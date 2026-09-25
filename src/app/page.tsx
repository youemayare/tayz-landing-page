import Image from 'next/image';
import { WAITLIST_URL } from '@/lib/constants';

function Header() {
  return (
    <header className="w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-white">TAYZ</div>
        <div>
          <a
            href={WAITLIST_URL}
            className="text-sm font-medium text-white bg-[#0071e3] px-4 py-2 rounded-full hover:bg-[#005bb8] transition-colors"
          >
            Join the Founding Circle
          </a>
        </div>
      </div>
    </header>
  );
}

function StoryboardHero() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              One tap.<br/>They know you.
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              A premium metal card that opens your live professional profile with a tap or scan. Share who you are, stay up to date, and make every introduction count.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={WAITLIST_URL}
                className="inline-flex justify-center text-base font-semibold text-white bg-[#0071e3] px-8 py-4 rounded-full hover:bg-[#005bb8] transition-colors shadow-[0_0_40px_rgba(0,113,227,0.2)] hover:shadow-[0_0_60px_rgba(0,113,227,0.3)]"
              >
                Get Founding Circle access
              </a>
              <p className="text-sm text-zinc-500 font-medium">Exclusive early-bird pricing</p>
            </div>
          </div>
          <div className="relative w-full max-w-[320px] mx-auto sm:max-w-[360px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-[#262626] bg-black overflow-hidden shadow-[0_0_80px_rgba(0,113,227,0.15)]">
            <Image src="/storyboard/hero.png" alt="Tayz Live Profile" fill className="object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryboardStyles() {
  return (
    <section className="py-24 bg-[#141414] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            A profile that feels like you.
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Structurally distinct layouts crafted for different professions, not just simple color swaps. Find the one that matches your brand.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['canvas', 'classic', 'identity', 'professional'].map((theme, i) => (
            <div key={theme} className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src={`/storyboard/layout-${theme}.png`} alt={`Tayz ${theme} layout`} fill className="object-cover object-top" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryboardEditor() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[9/19.5] max-w-[320px] mx-auto w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.02)]">
            <Image src="/storyboard/editor.png" alt="Tayz Profile Editor" fill className="object-cover object-top" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Make every detail yours.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Refine your digital presence in seconds. Change your bio, update your contact details, and swap layouts effortlessly. Every change you make in the editor reflects instantly on your live profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryboardUpdate() {
  return (
    <section className="py-24 bg-[#141414] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Always current.
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-16">
          Got promoted? Change your title in the dashboard. The next person who taps your card sees the update instantly.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="relative w-full max-w-[280px] aspect-[9/19.5] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-zinc-400 z-10 border border-white/10">Before</div>
            <Image src="/storyboard/hero.png" alt="Before update" fill className="object-cover object-top" />
          </div>
          <div className="text-zinc-600 hidden md:block">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <div className="text-zinc-600 block md:hidden my-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="relative w-full max-w-[280px] aspect-[9/19.5] rounded-2xl border border-[#0071e3]/30 overflow-hidden shadow-[0_0_60px_rgba(0,113,227,0.15)]">
            <div className="absolute top-4 left-4 bg-[#0071e3] px-3 py-1 rounded-full text-xs font-semibold text-white z-10">After</div>
            <Image src="/storyboard/after-update.png" alt="After update" fill className="object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryboardShare() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Share it your way.
        </h2>
        <p className="text-xl text-zinc-400 mb-12">
          Whether you are in a boardroom, at a conference, or networking online, Tayz adapts to how you introduce yourself.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">NFC Tap</h3>
            <p className="text-zinc-400">A simple tap on any modern smartphone instantly opens your profile.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">QR Code</h3>
            <p className="text-zinc-400">Fallback QR code printed on the card for older devices.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Profile Link</h3>
            <p className="text-zinc-400">Share your custom URL directly in your email signature or social bio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryboardConnections() {
  return (
    <section className="py-24 bg-[#141414] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Remember the people you meet.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-6">
              When you exchange details, their information is saved directly to your Connections dashboard. Never lose track of a meaningful encounter again.
            </p>
          </div>
          <div className="relative aspect-[9/19.5] max-w-[320px] mx-auto w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.02)]">
            <Image src="/storyboard/connections.png" alt="Tayz Connections" fill className="object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryboardAnalytics() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[9/19.5] max-w-[320px] mx-auto w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.02)]">
            <Image src="/storyboard/analytics.png" alt="Tayz Analytics" fill className="object-cover object-top" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Know what's working.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Real-time analytics show you how often your card is tapped, unique profile views, and where your connections are happening. Make every interaction measurable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingOffer() {
  return (
    <section id="founding-offer" className="py-24 bg-[#141414] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">
          Be among the first to carry Tayz.
        </h2>
        
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
          <div className="flex flex-col items-center mb-8 pb-8 border-b border-white/5">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Founding Circle Membership</h3>
            <div className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071e3]/10 text-[#60a5fa] font-medium text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Approximately 40% off the planned regular price
            </div>
          </div>
          
          <p className="text-zinc-400 leading-relaxed mb-8">
            Join the Founding Circle for early access to the Tayz Metal Card at an exclusive discounted price. We'll notify you when Tayz is ready to launch. Joining is free, and you can decide whether to order then.
          </p>
          
          <a
            href={WAITLIST_URL}
            className="inline-flex w-full justify-center text-base font-semibold text-white bg-[#0071e3] px-8 py-4 rounded-xl hover:bg-[#005bb8] transition-colors"
          >
            Get Founding Circle access
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
          Make your next introduction count.
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          Join the Tayz Founding Circle for access to the Metal Card at an exclusive early-bird discount of approximately 40% off the planned regular price.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            href={WAITLIST_URL}
            className="inline-flex justify-center text-lg font-semibold text-white bg-[#0071e3] px-10 py-5 rounded-full hover:bg-[#005bb8] transition-colors shadow-[0_0_40px_rgba(0,113,227,0.2)] hover:shadow-[0_0_60px_rgba(0,113,227,0.3)]"
          >
            Join the Founding Circle
          </a>
          <p className="text-sm text-zinc-500 max-w-sm mx-auto">
            Free to join. We'll notify you when Tayz launches. No payment today and no obligation to buy.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tight text-white">TAYZ</div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
        </div>
        <div className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Tayz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <StoryboardHero />
      <StoryboardStyles />
      <StoryboardEditor />
      <StoryboardUpdate />
      <StoryboardShare />
      <StoryboardConnections />
      <StoryboardAnalytics />
      <PricingOffer />
      <FinalCTA />
      <Footer />
    </main>
  );
}
