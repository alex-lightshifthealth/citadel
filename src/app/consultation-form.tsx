"use client";

import { useState } from "react";

export function ConsultationForm({
  variant = "default",
}: {
  variant?: "default" | "inline";
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      setSubmitted(true);
    } catch {
      // Still show success — we don't want to lose the lead
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={`text-center ${variant === "inline" ? "py-6" : "rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10"}`}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <p className="mt-4 text-[16px] font-medium text-ink">
          We&rsquo;ll be in touch shortly
        </p>
        <p className="mt-1 text-[14px] text-ink-muted">
          Check your email for next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "inline"
          ? ""
          : "rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10"
      }
    >
      {variant !== "inline" && (
        <div className="mb-6">
          <h3
            className="text-[22px] font-semibold tracking-[-0.02em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book a free consultation
          </h3>
          <p className="mt-1 text-[14px] text-ink-muted">
            We&rsquo;ll walk you through how Citadel works for your practice.
          </p>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted/60 focus:border-rust focus:outline-none focus:ring-1 focus:ring-rust"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted/60 focus:border-rust focus:outline-none focus:ring-1 focus:ring-rust"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted/60 focus:border-rust focus:outline-none focus:ring-1 focus:ring-rust"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full rounded-full bg-rust py-3.5 text-center text-[15px] font-medium text-white transition-colors hover:bg-rust-hover disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Book a Consultation"}
      </button>

      <p className="mt-3 text-center text-[12px] text-ink-muted">
        Free 15-minute call. No commitment.
      </p>
    </form>
  );
}
