import { CallDemo } from "./call-demo";
import { LiveDemo } from "./live-demo";
import { ConsultationForm } from "./consultation-form";

export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-[20px] font-semibold tracking-[-0.02em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Citadel
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#how"
              className="hidden text-[14px] text-ink-muted transition-colors hover:text-ink sm:block"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="hidden text-[14px] text-ink-muted transition-colors hover:text-ink sm:block"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hidden text-[14px] text-ink-muted transition-colors hover:text-ink sm:block"
            >
              FAQ
            </a>
            <a
              href="#book"
              className="rounded-full bg-rust px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-rust-hover"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="bg-cream px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="inline-block rounded-full bg-rust/10 px-4 py-1.5 text-[13px] font-medium text-rust">
                  AI receptionist for criminal defense
                </p>

                <h1
                  className="mt-6 text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.08] tracking-[-0.02em] text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Never miss a<br />
                  <span className="italic">high-value lead</span>
                </h1>

                <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-secondary">
                  When someone gets arrested at 2&nbsp;a.m., their family starts
                  calling attorneys. The first one who answers books the retainer.
                  Citadel answers every call, qualifies the lead, and books the
                  consultation — so you never lose a client to voicemail again.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#book"
                    className="rounded-full bg-rust px-7 py-3.5 text-center text-[15px] font-medium text-white transition-colors hover:bg-rust-hover"
                  >
                    Book a Consultation
                  </a>
                  <a
                    href="#demo"
                    className="rounded-full border border-border px-7 py-3.5 text-center text-[15px] font-medium text-ink transition-colors hover:bg-cream-dark"
                  >
                    Try the Demo
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-6 border-t border-border pt-6">
                  <div>
                    <p className="text-[24px] font-semibold text-ink">24/7</p>
                    <p className="text-[13px] text-ink-muted">
                      Call answering
                    </p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="text-[24px] font-semibold text-ink">
                      &lt; 2 rings
                    </p>
                    <p className="text-[13px] text-ink-muted">
                      Average pickup
                    </p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="text-[24px] font-semibold text-ink">100%</p>
                    <p className="text-[13px] text-ink-muted">Calls answered</p>
                  </div>
                </div>
              </div>

              {/* Hero visual — sample call on desktop, static card on mobile */}
              <div>
                {/* Desktop: interactive sample call */}
                <div className="hidden lg:block">
                  <p className="mb-3 text-[13px] font-medium text-ink-muted">
                    Hear a real intake call
                  </p>
                  <CallDemo />
                </div>

                {/* Mobile/tablet: compact static conversation */}
                <div className="lg:hidden">
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
                    <div className="flex items-center gap-2.5 border-b border-border pb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-ink-muted">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-ink">Saturday, 2:14 AM</p>
                      </div>
                      <span className="ml-auto rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-medium text-green-700">
                        Answered
                      </span>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      <div className="flex gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-[10px] font-medium text-ink-muted">
                          AI
                        </div>
                        <div className="rounded-xl rounded-tl-sm bg-cream px-3 py-2">
                          <p className="text-[12px] leading-relaxed text-ink-secondary">
                            Thank you for calling the Law Office of Marcus Torres. How can I help you?
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="rounded-xl rounded-tr-sm bg-rust/10 px-3 py-2">
                          <p className="text-[12px] leading-relaxed text-ink-secondary">
                            My son was just arrested for DUI. I need a lawyer right away.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-[10px] font-medium text-ink-muted">
                          AI
                        </div>
                        <div className="rounded-xl rounded-tl-sm bg-cream px-3 py-2">
                          <p className="text-[12px] leading-relaxed text-ink-secondary">
                            I understand — what county was he arrested in?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 rounded-lg bg-warm-bg p-3">
                      <div className="grid grid-cols-2 gap-1.5 text-[12px]">
                        <div>
                          <span className="text-ink-muted">Charge:</span>{" "}
                          <span className="text-ink">DUI</span>
                        </div>
                        <div>
                          <span className="text-ink-muted">Urgency:</span>{" "}
                          <span className="font-medium text-rust">High</span>
                        </div>
                        <div>
                          <span className="text-ink-muted">Status:</span>{" "}
                          <span className="text-ink">In custody</span>
                        </div>
                        <div>
                          <span className="text-ink-muted">Consult:</span>{" "}
                          <span className="text-ink">Booked 9 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Every missed call costs you $5,000–$15,000
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                68% of callers won&rsquo;t leave a voicemail. They&rsquo;ll call
                the next attorney on Google instead.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  ),
                  title: "2 a.m. DUI arrest",
                  desc: "A panicked family member calls four attorneys. The first one who answers books a $10,000 retainer.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ),
                  title: "Your phone goes to voicemail",
                  desc: "You're in court, asleep, or with a client. The caller hangs up and moves on. You never know they called.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                  ),
                  title: "Revenue lost forever",
                  desc: "That retainer goes to a competitor. Multiply that across nights, weekends, and holidays.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cream text-ink-muted">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Demo ── */}
        <section id="demo" className="bg-cream px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-medium uppercase tracking-widest text-rust">
                Try it yourself
              </p>
              <h2
                className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Talk to Citadel right now
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                Talk to Citadel in your browser or have it call your phone.
                See for yourself how it handles criminal defense intake.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-lg">
              <LiveDemo />
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-medium uppercase tracking-widest text-rust">
                How it works
              </p>
              <h2
                className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                From missed call to booked consultation
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "1",
                  title: "Citadel answers",
                  desc: "Every call picked up instantly. Nights, weekends, holidays. A professional voice that understands criminal defense.",
                },
                {
                  num: "2",
                  title: "Qualifies the lead",
                  desc: "Charge type, jurisdiction, urgency, arraignment status. No wasted consultations on cases you don't take.",
                },
                {
                  num: "3",
                  title: "Captures intake",
                  desc: "Contact info, case details, notes — all captured. You get a full summary before speaking to the client.",
                },
                {
                  num: "4",
                  title: "Books the consult",
                  desc: "Qualified leads booked directly onto your calendar. You wake up to consultations, not voicemails.",
                },
              ].map((step) => (
                <div key={step.num} className="text-center sm:text-left">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-rust text-[14px] font-semibold text-white sm:mx-0">
                    {step.num}
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="border-t border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-[13px] font-medium uppercase tracking-widest text-rust">
                  Built for criminal defense
                </p>
                <h2
                  className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Everything your front desk should do
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                  Citadel isn&rsquo;t a generic answering service. It&rsquo;s
                  trained on criminal defense workflows — charge types,
                  jurisdictions, arraignment timelines, and how to triage
                  urgency.
                </p>
                <a
                  href="#book"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-rust transition-colors hover:text-rust-hover"
                >
                  Get started
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.33 8h9.34M8.67 4l4 4-4 4"/></svg>
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "24/7 call answering",
                    desc: "Every call answered in under two rings. No exceptions.",
                  },
                  {
                    title: "Criminal defense intake",
                    desc: "Asks about charges, court dates, custody status, jurisdiction.",
                  },
                  {
                    title: "Lead qualification",
                    desc: "Screens for case type, budget, and urgency automatically.",
                  },
                  {
                    title: "Calendar booking",
                    desc: "Syncs with your calendar and books qualified leads directly.",
                  },
                  {
                    title: "Transcripts & summaries",
                    desc: "Full transcripts and AI summaries after every call.",
                  },
                  {
                    title: "Bilingual support",
                    desc: "Handles calls in English and Spanish.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-border bg-white p-5"
                  >
                    <h3 className="text-[14px] font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Compliance & Trust ── */}
        <section className="bg-cream px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-[13px] font-medium uppercase tracking-widest text-rust">
                  Ethics & compliance
                </p>
                <h2
                  className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Built for the standard your bar requires
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                  AI in legal raises real questions — confidentiality, privilege,
                  supervision, consent. We built Citadel around the ABA&rsquo;s
                  guidance on AI use and the latest state bar ethics opinions, so
                  you can adopt it with confidence.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "End-to-end encryption",
                    desc: "All calls encrypted in transit and at rest. Your client communications stay protected.",
                  },
                  {
                    title: "No AI training on your data",
                    desc: "Call data is never used to train models. Your conversations remain yours — period.",
                  },
                  {
                    title: "Privilege-aware design",
                    desc: "Callers are informed they're speaking with an AI assistant. Consent and disclosure built into every call flow.",
                  },
                  {
                    title: "BAA & compliance support",
                    desc: "We sign Business Associate Agreements and work with your firm to meet state-specific ethical obligations.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-border bg-white p-5"
                  >
                    <h3 className="text-[14px] font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Social proof ── */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[13px] font-medium uppercase tracking-widest text-rust">
              From attorneys like you
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  quote:
                    "A family called at 1 a.m. after their son's DUI arrest. Citadel answered, got the details, and had a consultation booked before I woke up. That's a $10K retainer I would have lost to voicemail.",
                  name: "Marcus T.",
                  title: "Solo practitioner, Houston TX",
                },
                {
                  quote:
                    "I was paying a service $600/month and they couldn't tell a felony from a misdemeanor. Citadel actually understands criminal defense — it asks the right questions.",
                  name: "Sarah K.",
                  title: "Managing partner, Atlanta GA",
                },
                {
                  quote:
                    "Weekends and holidays used to mean missed leads. Now I check my phone in the morning and the consultations are already booked.",
                  name: "David R.",
                  title: "Criminal defense, Phoenix AZ",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <div className="flex gap-1 text-rust">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-secondary">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-[13px] font-semibold text-ink-muted">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-ink">
                        {t.name}
                      </p>
                      <p className="text-[12px] text-ink-muted">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[13px] font-medium uppercase tracking-widest text-rust">
                Simple pricing
              </p>
              <h2
                className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                One missed retainer pays for a full year
              </h2>
              <p className="mt-4 text-[16px] text-ink-muted">
                Human receptionist services charge $500+/mo with per-call fees
                and can&rsquo;t tell a DUI from a traffic ticket.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-md">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-[48px] font-semibold tracking-tight text-ink">
                    $299
                  </span>
                  <span className="text-[16px] text-ink-muted">/month</span>
                </div>
                <p className="mt-1 text-[15px] text-ink-muted">
                  Everything included. No per-call fees. Cancel anytime.
                </p>

                <div className="my-6 h-px bg-border" />

                <ul className="space-y-3 text-[14px] text-ink-secondary">
                  {[
                    "Unlimited 24/7 call answering",
                    "Criminal defense-trained AI",
                    "Lead qualification & intake",
                    "Calendar integration & auto-booking",
                    "Call transcripts & summaries",
                    "Bilingual (English & Spanish)",
                    "Dedicated business phone number",
                    "Email & SMS notifications",
                    "End-to-end encryption & BAA",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-rust"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5L6.5 12L13 4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className="mt-8 block w-full rounded-full bg-rust py-3.5 text-center text-[15px] font-medium text-white transition-colors hover:bg-rust-hover"
                >
                  Book a Consultation
                </a>

                <p className="mt-4 text-center text-[13px] text-ink-muted">
                  One $5,000 retainer covers Citadel for over a year
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="bg-cream px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <h2
              className="text-center text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently asked questions
            </h2>

            <div className="mt-10 divide-y divide-border">
              {[
                {
                  q: "Can Citadel handle Spanish-speaking callers?",
                  a: "Yes. Citadel supports bilingual calls in English and Spanish. The AI detects the caller's language and responds accordingly.",
                },
                {
                  q: "What if the caller needs to speak to a human?",
                  a: "Citadel routes urgent calls directly to you or your on-call attorney based on rules you set. You define what counts as urgent — active warrants, in-custody calls, or any criteria you choose.",
                },
                {
                  q: "How does it integrate with my calendar?",
                  a: "Syncs with Google Calendar, Outlook, and Calendly. Qualified leads are booked directly into your available slots with buffer times and blackout hours.",
                },
                {
                  q: "Is this compliant with attorney-client privilege?",
                  a: "Yes. All calls are encrypted end-to-end. We never use call data to train AI models. Callers are disclosed upfront that they're speaking with an AI assistant, consistent with ABA guidance on AI use and recent state bar ethics opinions on recording and summarizing client communications. We sign BAAs and work with your firm to meet your jurisdiction's specific ethical requirements.",
                },
                {
                  q: "How is this different from a generic answering service?",
                  a: "Generic services use scripts. Citadel understands charge types, jurisdictions, arraignment timelines, and how to triage urgency. It asks the questions a good paralegal would ask.",
                },
              ].map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="flex items-center justify-between gap-4 py-5 text-[15px] font-medium text-ink">
                    <span>{faq.q}</span>
                    <svg
                      className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <p className="pb-5 pr-8 text-[14px] leading-relaxed text-ink-muted">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA / Form ── */}
        <section id="book" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2
                  className="text-[clamp(1.75rem,5vw,3rem)] leading-[1.12] tracking-[-0.02em] text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Stop losing clients to your voicemail
                </h2>
                <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-ink-muted">
                  We&rsquo;ll walk you through setup, customize the intake for
                  your case types, and have you live in under a week.
                </p>
                <ul className="mt-6 space-y-3 text-[14px] text-ink-secondary">
                  {[
                    "Free 15-minute consultation",
                    "Custom intake setup for your practice",
                    "Live in under a week",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg
                        className="h-4 w-4 shrink-0 text-rust"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5L6.5 12L13 4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a
            href="#"
            className="text-[18px] font-semibold tracking-[-0.02em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Citadel
          </a>
          <p className="text-[13px] text-ink-muted">
            &copy; {new Date().getFullYear()} Citadel. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
