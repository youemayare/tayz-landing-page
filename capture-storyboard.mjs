import { chromium } from 'playwright';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const BASE_URL = 'http://localhost:3000';
const SCREENSHOTS_DIR = './public/storyboard';
const TEST_EMAIL = `test-${Date.now()}@tayz.local`;
const TEST_PASSWORD = 'TestPassword123!';

async function hideNextJsOverlay(page) {
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = `
      nextjs-portal, [data-nextjs-dialog-overlay], [data-nextjs-toast],
      #__next-build-watcher, [data-next-mark],
      div[style*="position: fixed"][style*="z-index: 99999"],
      body > div:last-child > div[style*="position: fixed"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);
    document.querySelectorAll('nextjs-portal').forEach(el => el.remove());
  });
  await page.waitForTimeout(200);
}

async function main() {
  console.log('Fetching Umar profile data...');
  const { data: umarProfile } = await supabase
    .from('profiles')
    .select('*')
    .eq('slug', 'umar-soorty')
    .single();

  if (!umarProfile) throw new Error("Could not find umar-soorty profile");
  console.log(`Original Profile layout: ${umarProfile.profile_layout}`);

  // Create test user
  console.log('Creating test user...');
  const { data: userData, error: createError } = await supabase.auth.admin.createUser({
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
    email_confirm: true,
  });
  if (createError) throw createError;
  const testUser = userData.user;

  await new Promise(res => setTimeout(res, 2000));

  // Insert into public.users table
  const testHandle = `test-${Date.now()}`;
  await supabase.from('users').insert({
    id: testUser.id,
    email: testUser.email,
    full_name: umarProfile.first_name + ' ' + umarProfile.last_name,
    handle: testHandle
  });

  // Create ONE main/default profile for the editor, dashboard, and analytics
  const mainSlug = `test-main-${Date.now()}`;
  const mainClone = { ...umarProfile };
  delete mainClone.id;
  mainClone.user_id = testUser.id;
  mainClone.slug = mainSlug;
  mainClone.is_default = true;
  mainClone.profile_layout = 'professional'; // Force "signature"/professional layout for hero

  const { data: mainProfile, error: mainErr } = await supabase
    .from('profiles')
    .insert(mainClone)
    .select()
    .single();
  if (mainErr) throw mainErr;

  // Create separate profiles for each layout (distinct slugs = no cache issue)
  const layouts = ['canvas', 'classic', 'identity', 'professional'];
  const layoutProfiles = {};
  for (const layout of layouts) {
    const cloneData = { ...umarProfile };
    delete cloneData.id;
    cloneData.user_id = testUser.id;
    cloneData.slug = `test-${layout}-${Date.now()}`;
    cloneData.profile_layout = layout;
    cloneData.is_default = false;

    const { data: inserted, error: insertErr } = await supabase
      .from('profiles')
      .insert(cloneData)
      .select()
      .single();
    if (insertErr) throw insertErr;
    layoutProfiles[layout] = { id: inserted.id, slug: cloneData.slug };
  }

  // Create "before" and "after" profiles for the update section
  const beforeSlug = `test-before-${Date.now()}`;
  const beforeClone = { ...umarProfile };
  delete beforeClone.id;
  beforeClone.user_id = testUser.id;
  beforeClone.slug = beforeSlug;
  beforeClone.is_default = false;
  beforeClone.profile_layout = 'professional';
  beforeClone.job_title = 'Vice President';
  const { data: beforeProfile } = await supabase.from('profiles').insert(beforeClone).select().single();

  const afterSlug = `test-after-${Date.now()}`;
  const afterClone = { ...umarProfile };
  delete afterClone.id;
  afterClone.user_id = testUser.id;
  afterClone.slug = afterSlug;
  afterClone.is_default = false;
  afterClone.profile_layout = 'professional';
  afterClone.job_title = 'CEO';
  const { data: afterProfile } = await supabase.from('profiles').insert(afterClone).select().single();

  // Mock tap events with CORRECT column names
  console.log('Mocking analytics data...');
  const tapEvents = [];
  for (let i = 0; i < 85; i++) {
    const daysAgo = Math.floor(Math.random() * 28);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    tapEvents.push({
      profile_id: mainProfile.id,
      tapped_at: date.toISOString(),
      ip_hash: `hash_${Math.floor(Math.random() * 50)}`,
      device_type: ['mobile', 'desktop', 'tablet'][Math.floor(Math.random() * 3)],
      browser: ['Chrome', 'Safari', 'Firefox', 'Edge'][Math.floor(Math.random() * 4)],
      country: ['AE', 'US', 'GB', 'PK'][Math.floor(Math.random() * 4)],
      is_unique: Math.random() > 0.3,
    });
  }
  await supabase.from('tap_events').insert(tapEvents);

  // Mock a connection
  await supabase.from('connections').insert({
    viewer_user_id: testUser.id,
    profile_id: umarProfile.id
  });

  // Launch browser
  const browser = await chromium.launch({ channel: 'msedge' });
  
  // Create TWO contexts: one public (incognito-like), one authenticated
  const viewportParams = {
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    colorScheme: 'dark'
  };
  
  const publicContext = await browser.newContext(viewportParams);
  const publicPage = await publicContext.newPage();
  
  const authContext = await browser.newContext(viewportParams);
  const authPage = await authContext.newPage();

  // Login on the authenticated context
  console.log('Logging in to auth context...');
  await authPage.goto(`${BASE_URL}/login`);
  await authPage.waitForLoadState('networkidle');
  await authPage.fill('input[type="email"]', TEST_EMAIL);
  await authPage.fill('input[type="password"]', TEST_PASSWORD);
  await authPage.click('button[type="submit"]');
  await authPage.waitForURL('**/dashboard**', { timeout: 15000 });
  await authPage.waitForTimeout(2000);
  console.log('  Logged in successfully');

  // ===== 1. HERO (Public view) =====
  console.log('1. Capturing Hero Profile (Public)...');
  await publicPage.goto(`${BASE_URL}/${testHandle}`);
  await publicPage.waitForLoadState('networkidle');
  await publicPage.waitForTimeout(1500);
  await hideNextJsOverlay(publicPage);
  await publicPage.screenshot({ path: `${SCREENSHOTS_DIR}/hero.png` });
  console.log('  ✓ hero.png');

  // ===== 2. LAYOUTS (Public view) =====
  console.log('2. Capturing Layout variants (Public)...');
  for (const layout of layouts) {
    const { slug } = layoutProfiles[layout];
    await publicPage.goto(`${BASE_URL}/${slug}`);
    await publicPage.waitForLoadState('networkidle');
    await publicPage.waitForTimeout(1500);
    await hideNextJsOverlay(publicPage);
    await publicPage.screenshot({ path: `${SCREENSHOTS_DIR}/layout-${layout}.png` });
    console.log(`  ✓ layout-${layout}.png`);
  }

  // ===== 3. EDITOR (Auth view) =====
  console.log('3. Capturing Editor (Auth)...');
  await authPage.goto(`${BASE_URL}/dashboard/profile?id=${mainProfile.id}`);
  await authPage.waitForLoadState('networkidle');
  await authPage.waitForTimeout(2000);
  await hideNextJsOverlay(authPage);
  await authPage.screenshot({ path: `${SCREENSHOTS_DIR}/editor.png` });
  console.log('  ✓ editor.png');

  // ===== 4. BEFORE/AFTER (Public view) =====
  console.log('4. Capturing Before (Public)...');
  await publicPage.goto(`${BASE_URL}/${beforeSlug}`);
  await publicPage.waitForLoadState('networkidle');
  await publicPage.waitForTimeout(1500);
  await hideNextJsOverlay(publicPage);
  await publicPage.screenshot({ path: `${SCREENSHOTS_DIR}/hero.png` }); // Overwrite hero with "before" version (they use the same image in UI)

  console.log('4. Capturing After (Public)...');
  await publicPage.goto(`${BASE_URL}/${afterSlug}`);
  await publicPage.waitForLoadState('networkidle');
  await publicPage.waitForTimeout(1500);
  await hideNextJsOverlay(publicPage);
  await publicPage.screenshot({ path: `${SCREENSHOTS_DIR}/after-update.png` });
  console.log('  ✓ after-update.png');

  // ===== 5. DASHBOARD (Auth view) =====
  console.log('5. Capturing Dashboard (Auth)...');
  await authPage.goto(`${BASE_URL}/dashboard`);
  await authPage.waitForLoadState('networkidle');
  await authPage.waitForTimeout(3000);
  await hideNextJsOverlay(authPage);
  await authPage.screenshot({ path: `${SCREENSHOTS_DIR}/dashboard.png` });
  console.log('  ✓ dashboard.png');

  // ===== 6. ANALYTICS (Auth view) =====
  console.log('6. Capturing Analytics (Auth)...');
  await authPage.goto(`${BASE_URL}/dashboard/analytics`);
  await authPage.waitForLoadState('networkidle');
  await authPage.waitForTimeout(3000);
  await hideNextJsOverlay(authPage);
  await authPage.screenshot({ path: `${SCREENSHOTS_DIR}/analytics.png` });
  console.log('  ✓ analytics.png');

  // ===== 7. CONNECTIONS (Auth view) =====
  console.log('7. Capturing Connections (Auth)...');
  await authPage.goto(`${BASE_URL}/dashboard/connections`);
  await authPage.waitForLoadState('networkidle');
  await authPage.waitForTimeout(3000);
  await hideNextJsOverlay(authPage);
  await authPage.screenshot({ path: `${SCREENSHOTS_DIR}/connections.png` });
  console.log('  ✓ connections.png');

  await browser.close();

  // Cleanup
  console.log('Cleaning up...');
  const allProfileIds = [
    mainProfile.id,
    ...Object.values(layoutProfiles).map(p => p.id),
    beforeProfile?.id,
    afterProfile?.id
  ].filter(Boolean);

  for (const pid of allProfileIds) {
    await supabase.from('tap_events').delete().eq('profile_id', pid);
    await supabase.from('profiles').delete().eq('id', pid);
  }
  await supabase.from('connections').delete().eq('viewer_user_id', testUser.id);
  await supabase.auth.admin.deleteUser(testUser.id);

  console.log('Done! All screenshots captured successfully.');
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
