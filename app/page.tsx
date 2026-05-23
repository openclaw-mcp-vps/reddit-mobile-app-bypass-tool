export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">

      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Mobile Web
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Reddit on Mobile —{" "}
          <span className="text-[#58a6ff]">Without the App Nag</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 leading-relaxed">
          Browse Reddit cleanly on any mobile browser. No "Open in App" banners,
          no forced redirects, no dark patterns — just the content you came for.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Get Access — $5/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works on all mobile browsers.</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-2xl w-full mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🚫", label: "Blocks app-forcing overlays" },
            { icon: "⚡", label: "Fast server-side rendering" },
            { icon: "🔒", label: "No tracking, no account needed" }
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col items-center text-center gap-2">
              <span className="text-3xl">{f.icon}</span>
              <span className="text-sm font-medium text-[#c9d1d9]">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md w-full mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-3">Pro Access</span>
          <div className="flex items-end gap-1 mb-2">
            <span className="text-5xl font-extrabold text-white">$5</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for clean mobile Reddit browsing.</p>
          <ul className="text-left w-full space-y-3 mb-8">
            {[
              "Bypass app-forcing overlays",
              "Clean, distraction-free reader",
              "Server-side Reddit proxy",
              "Works on iOS & Android browsers",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="w-full block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-6 py-3 rounded-xl transition-colors duration-200 text-center"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it bypass Reddit's app prompts?",
              a: "Our server fetches Reddit content and renders it through our own interface, so your browser never sees Reddit's JavaScript that triggers app-forcing overlays and banners."
            },
            {
              q: "Do I need a Reddit account?",
              a: "No. You can browse public subreddits and posts without logging in. The tool works entirely anonymously for public content."
            },
            {
              q: "What happens if I cancel?",
              a: "You keep access until the end of your billing period. No questions asked, no hoops to jump through — cancel from your Lemon Squeezy dashboard in seconds."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} RedditClean. Not affiliated with Reddit, Inc.
      </footer>
    </main>
  );
}
