import { chromium } from 'playwright';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const BASE_URL = 'http://localhost:3000';
const SCREENSHOTS_DIR = './public/screenshots';
const TEST_EMAIL = 'test-screenshot-user-1@tayz.local';
const TEST_PASSWORD = 'TestPassword123!';

async function main() {
  console.log('Creating test user via Supabase Admin...');
  const { data: user, error: createError } = await supabase.auth.admin.createUser({
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
    email_confirm: true,
  });

  if (createError && createError.message !== 'User already registered') {
    console.error('Error creating user:', createError);
    return;
  }

  // Get user ID
  const { data: users } = await supabase.auth.admin.listUsers();
  const testUser = users.users.find(u => u.email === TEST_EMAIL);
  
  if (!testUser) {
    console.error('Could not find test user.');
    return;
  }

  // Insert dummy profile if needed. We might need to go through onboarding.
  // We can just log in and let the app handle it, or we can insert directly into `profiles`.
  // Let's just log in via Playwright and see if we can do it via UI, or if we should bypass.
  // Let's insert a profile directly to skip onboarding if possible.
  console.log('Inserting mock profile...');
  await supabase.from('profiles').upsert({
    id: testUser.id,
    username: 'alexmorgan',
    full_name: 'Alex Morgan',
    job_title: 'Design Director',
    company_name: 'Studio',
    bio: 'Award-winning designer focusing on digital experiences.',
    theme: 'dark'
  });

  console.log('Launching Playwright...');
  const browser = await chromium.launch({ channel: 'msedge' });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: 'dark'
  });

  const page = await context.newPage();

  console.log('Logging in...');
  await page.goto(`${BASE_URL}/login`);
  await page.fill('input[type="email"]', TEST_EMAIL);
  await page.fill('input[type="password"]', TEST_PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForLoadState('networkidle');

  // Wait for dashboard to load
  await page.waitForTimeout(2000);

  // Take Dashboard Screenshot
  console.log('Capturing Dashboard...');
  await page.goto(`${BASE_URL}/dashboard`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${SCREENSHOTS_DIR}/dashboard.png` });

  // Take Profile Editor Screenshot
  console.log('Capturing Profile Editor...');
  await page.goto(`${BASE_URL}/alexmorgan/edit`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${SCREENSHOTS_DIR}/editor.png` });

  // Capture Public Profile (from Vercel directly)
  console.log('Capturing Public Profile...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 12 Pro dimensions
    deviceScaleFactor: 3,
    colorScheme: 'dark'
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('https://tapthat.vercel.app/umarsoorty');
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: `${SCREENSHOTS_DIR}/profile-mobile.png` });

  await browser.close();

  // Cleanup
  console.log('Cleaning up test user...');
  await supabase.auth.admin.deleteUser(testUser.id);
  
  console.log('Done!');
}

main().catch(console.error);
