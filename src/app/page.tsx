import Link from 'next/link';
import { WAITLIST_URL } from '@/lib/constants';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            TAYZ
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
            <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
            <Link href="#founding-offer" className="hover:text-white transition-colors">Founding offer</Link>
          </nav>
        </div>
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

function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Your identity.<br />One tap away.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
            A premium metal card that opens your live professional profile with a tap or scan. Share who you are, stay up to date, and make every introduction count.
          </p>
          <div className="mb-8 p-6 rounded-2xl bg-[#141414] border border-white/5">
            <p className="text-white font-medium mb-1">Founding Circle price: AED 299</p>
            <p className="text-zinc-500 line-through text-sm">Planned regular price: AED 499</p>
            <p className="text-[#60a5fa] text-sm mt-3 font-medium">Save AED 200 · Approximately 40% off</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href={WAITLIST_URL}
              className="inline-flex justify-center text-base font-semibold text-white bg-[#0071e3] px-8 py-4 rounded-full hover:bg-[#005bb8] transition-colors"
            >
              Join the Founding Circle
            </a>
          </div>
          <p className="text-sm text-zinc-500 mt-6">
            Free to join. No payment today. No obligation to buy.
          </p>
        </div>
        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-[#141414] border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center group">
          {/* Concept visual placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="text-center p-8">
            <div className="w-64 h-40 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-xl border border-zinc-700/50 shadow-2xl mx-auto mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-700 flex items-center justify-center">
              <span className="text-zinc-600 font-medium tracking-widest text-sm">TAYZ</span>
            </div>
            <div className="w-48 h-80 bg-zinc-950 rounded-[2rem] border-4 border-zinc-800 mx-auto shadow-2xl overflow-hidden relative">
              <div className="w-full h-full p-4 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-zinc-800 mx-auto mt-4"></div>
                <div className="h-4 w-24 bg-zinc-800 rounded mx-auto mt-2"></div>
                <div className="h-2 w-32 bg-zinc-800 rounded mx-auto mb-4"></div>
                <div className="h-10 w-full bg-zinc-800 rounded-xl"></div>
                <div className="h-10 w-full bg-zinc-800 rounded-xl"></div>
              </div>
            </div>
            <p className="text-xs text-zinc-600 mt-6">Product preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductExperience() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          The recipient experience
        </h2>
        <p className="text-lg text-zinc-400 mb-16 max-w-2xl mx-auto">
          When someone taps your Tayz card, their browser instantly opens your live profile. No apps to download, no accounts to create. Just your details, ready to save.
        </p>
        
        <div className="relative w-full max-w-[320px] mx-auto h-[640px] bg-zinc-950 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden">
          {/* Sample Profile UI */}
          <div className="h-full w-full bg-[#0a0a0a] p-6 flex flex-col relative">
            <div className="w-full h-32 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl mb-12 absolute top-0 left-0"></div>
            
            <div className="relative z-10 flex flex-col items-center mt-16">
              <div className="w-24 h-24 rounded-full bg-zinc-800 border-4 border-[#0a0a0a] mb-4 shadow-xl"></div>
              <h3 className="text-xl font-bold text-white mb-1">Alex Morgan</h3>
              <p className="text-sm text-zinc-400 mb-6">Design Director at Studio</p>
              
              <button className="w-full py-3 bg-[#0071e3] text-white font-semibold rounded-xl mb-6">
                Save Contact
              </button>
              
              <div className="w-full space-y-3">
                <div className="w-full p-4 bg-[#141414] rounded-xl flex items-center gap-4">
                  <div className="w-6 h-6 bg-zinc-800 rounded-full"></div>
                  <div className="h-2 w-32 bg-zinc-800 rounded"></div>
                </div>
                <div className="w-full p-4 bg-[#141414] rounded-xl flex items-center gap-4">
                  <div className="w-6 h-6 bg-zinc-800 rounded-full"></div>
                  <div className="h-2 w-24 bg-zinc-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-zinc-600 mt-8">Sample profile visualization</p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/5">
            <div className="w-12 h-12 bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tap or scan</h3>
            <p className="text-zinc-400 leading-relaxed">
              Open your professional profile in seconds with NFC or QR.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/5">
            <div className="w-12 h-12 bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Always current</h3>
            <p className="text-zinc-400 leading-relaxed">
              Update your details and important links without replacing your card.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/5">
            <div className="w-12 h-12 bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Made to be remembered</h3>
            <p className="text-zinc-400 leading-relaxed">
              A premium metal card designed to make a lasting first impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#141414] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-8">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Create your profile</h3>
            <p className="text-zinc-400">
              Add your professional details and important links.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-8">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tap or scan</h3>
            <p className="text-zinc-400">
              Share with a compatible phone using NFC or the card’s QR code.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-8">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Stay connected</h3>
            <p className="text-zinc-400">
              The recipient opens your profile and can save your contact details.
            </p>
          </div>
        </div>
        <p className="text-center text-zinc-500 mt-16 font-medium">
          No app needed for the person you meet.
        </p>
      </div>
    </section>
  );
}

function MetalCardShowcase() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Crafted to stand out
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed mb-6">
            The Tayz Metal Card is built with premium materials for a weighty, substantial feel in hand. It’s an object designed to communicate quality before you even speak a word.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed">
            More than just a smart chip, it is a physical extension of your professional identity. 
          </p>
        </div>
        <div className="order-1 md:order-2 relative aspect-[4/3] w-full bg-[#141414] rounded-3xl border border-white/5 flex flex-col items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          <div className="relative z-10 w-64 h-40 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-xl border border-zinc-600/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between p-5 transform rotate-3">
            <div className="flex justify-between items-start">
              <span className="text-zinc-500 text-[10px] tracking-widest">TAYZ</span>
              <svg className="w-6 h-6 text-zinc-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30"></div>
          </div>
          <p className="absolute bottom-6 text-xs text-zinc-600 z-10">Product visualisation. Final design and finish may vary.</p>
        </div>
      </div>
    </section>
  );
}

function PricingOffer() {
  return (
    <section id="founding-offer" className="py-24 bg-[#141414] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">
          Be among the first to carry Tayz.
        </h2>
        
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
          <div className="flex flex-col items-center mb-8 pb-8 border-b border-white/5">
            <div className="flex justify-between w-full max-w-sm mb-4 text-zinc-400">
              <span>Planned regular price</span>
              <span className="line-through">AED 499</span>
            </div>
            <div className="flex justify-between w-full max-w-sm text-2xl md:text-3xl font-bold text-white">
              <span>Founding Circle price</span>
              <span>AED 299</span>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0071e3]/10 text-[#60a5fa] font-medium text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save AED 200 · Approximately 40%
            </div>
          </div>
          
          <p className="text-zinc-400 leading-relaxed mb-8">
            Join the Founding Circle for early access to the Tayz Metal Card at AED 299. We’ll notify you when Tayz is ready to launch. Joining is free, and you can decide whether to order then.
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

function FAQ() {
  const faqs = [
    {
      q: "Does the other person need the Tayz app?",
      a: "No. Their browser opens your profile when they tap or scan."
    },
    {
      q: "Do I pay anything to join?",
      a: "No. Joining the Founding Circle is free."
    },
    {
      q: "What happens after I join?",
      a: "We’ll notify you when Tayz is ready to launch and share how to access the founding price."
    },
    {
      q: "Am I required to buy?",
      a: "No. You can decide when the card becomes available."
    },
    {
      q: "Can I update my profile?",
      a: "Yes. Updates to the live profile do not require replacing the card."
    },
    {
      q: "What if someone’s phone does not support NFC?",
      a: "They can scan the QR code instead."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Questions?</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#141414] border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-zinc-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent to-[#141414]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
          Make your next introduction count.
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          Join the Tayz Founding Circle for access to the Metal Card at AED 299 instead of the planned AED 499 regular price.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            href={WAITLIST_URL}
            className="inline-flex justify-center text-lg font-semibold text-white bg-[#0071e3] px-10 py-5 rounded-full hover:bg-[#005bb8] transition-colors shadow-[0_0_40px_rgba(0,113,227,0.2)] hover:shadow-[0_0_60px_rgba(0,113,227,0.3)]"
          >
            Join the Founding Circle
          </a>
          <p className="text-sm text-zinc-500 max-w-sm mx-auto">
            Free to join. We’ll notify you when Tayz launches. No payment today and no obligation to buy.
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
          © {new Date().getFullYear()} Tayz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <ProductExperience />
      <Benefits />
      <HowItWorks />
      <MetalCardShowcase />
      <PricingOffer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
