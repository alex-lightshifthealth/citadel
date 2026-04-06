"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Waveform } from "./waveform";

const SCRIPT = [
  { from: "ai" as const, text: "Thank you for calling the Law Office of Marcus Torres. This is Citadel, how can I help you tonight?", audio: "/audio/ai-1.mp3" },
  { from: "caller" as const, text: "Hi, my son was just arrested for a DUI about an hour ago. I need to talk to a lawyer.", audio: "/audio/caller-1.mp3" },
  { from: "ai" as const, text: "I'm sorry to hear that. I can help get you connected with Mr. Torres. Let me ask a few quick questions. What county was your son arrested in?", audio: "/audio/ai-2.mp3" },
  { from: "caller" as const, text: "Harris County. He's at the jail downtown.", audio: "/audio/caller-2.mp3" },
  { from: "ai" as const, text: "Got it. Harris County, currently in custody. Is this his first DUI offense?", audio: "/audio/ai-3.mp3" },
  { from: "caller" as const, text: "Yes, first time. He's never been in trouble before.", audio: "/audio/caller-3.mp3" },
  { from: "ai" as const, text: "Understood. I have an opening for a consultation with Mr. Torres tomorrow morning at 9 AM. Can I book that for you and get your contact information?", audio: "/audio/ai-4.mp3" },
  { from: "caller" as const, text: "Yes, please. That would be great.", audio: "/audio/caller-4.mp3" },
  { from: "ai" as const, text: "Perfect. I've booked you for 9 AM tomorrow. You'll receive a confirmation text shortly. Mr. Torres will have your son's case details before the call. Is there anything else I can help with tonight?", audio: "/audio/ai-5.mp3" },
];

export function CallDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [messages, setMessages] = useState<typeof SCRIPT>([]);
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, activeAudioIndex]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playAudio = useCallback((src: string, muted: boolean): Promise<void> => {
    return new Promise((resolve) => {
      const audio = new Audio(src);
      audio.crossOrigin = "anonymous";
      audioRef.current = audio;
      audio.muted = muted;
      audio.onended = () => resolve();
      audio.onerror = () => resolve();
      audio.play().catch(() => resolve());
    });
  }, []);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function startDemo() {
    abortRef.current = false;
    setIsPlaying(true);
    setMessages([]);
    setCallDuration(0);
    setActiveAudioIndex(null);

    timerRef.current = setInterval(() => {
      setCallDuration((d) => d + 1);
    }, 1000);

    for (let i = 0; i < SCRIPT.length; i++) {
      if (abortRef.current) break;

      const msg = SCRIPT[i];

      // Show the message bubble
      setMessages((prev) => [...prev, msg]);

      // Small pause before audio plays
      await sleep(400);
      if (abortRef.current) break;

      // Play audio with waveform active on this message
      setActiveAudioIndex(i);
      await playAudio(msg.audio, isMuted);
      setActiveAudioIndex(null);

      if (abortRef.current) break;

      // Pause between messages
      await sleep(500);
    }

    if (timerRef.current) clearInterval(timerRef.current);
  }

  function resetDemo() {
    abortRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
    setMessages([]);
    setCallDuration(0);
    setActiveAudioIndex(null);
  }

  function toggleMute() {
    setIsMuted((m) => {
      const next = !m;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  }

  const mins = Math.floor(callDuration / 60);
  const secs = callDuration % 60;
  const timeStr = `${mins}:${secs.toString().padStart(2, "0")}`;
  const leadCaptured = messages.length >= SCRIPT.length && activeAudioIndex === null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      {/* Call header */}
      <div className="flex items-center justify-between border-b border-border bg-warm-bg px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className={`h-2.5 w-2.5 rounded-full ${isPlaying && !leadCaptured ? "animate-pulse bg-green-500" : leadCaptured ? "bg-green-500" : "bg-ink-muted/30"}`}
          />
          <span className="text-[14px] font-medium text-ink">
            {leadCaptured
              ? "Call complete"
              : isPlaying
                ? "Call in progress"
                : "Demo call"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {isPlaying && (
            <>
              <button
                onClick={toggleMute}
                className="text-ink-muted transition-colors hover:text-ink"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
                )}
              </button>
              <span className="font-mono text-[13px] text-ink-muted">
                {timeStr}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="h-[380px] overflow-y-auto px-6 py-5">
        {!isPlaying && messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink-muted"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <p className="mt-4 text-[15px] font-medium text-ink">
              Saturday, 2:14 AM — Incoming call
            </p>
            <p className="mt-1 text-[13px] text-ink-muted">
              Listen to Citadel handle a real DUI intake call
            </p>
            <button
              onClick={startDemo}
              className="mt-6 flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-rust-hover"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Play Demo Call
            </button>
          </div>
        )}

        {(isPlaying || messages.length > 0) && (
          <div className="space-y-3">
            {messages.map((msg, i) => {
              const isCurrentlyPlaying = activeAudioIndex === i;
              return (
                <div key={i}>
                  <div
                    className={`flex gap-3 ${msg.from === "caller" ? "justify-end" : ""}`}
                  >
                    {msg.from === "ai" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-[10px] font-semibold text-ink-muted">
                        AI
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-xl px-4 py-2.5 ${
                        msg.from === "ai"
                          ? "rounded-tl-sm bg-cream"
                          : "rounded-tr-sm bg-rust/10"
                      }`}
                    >
                      <p className="text-[13px] leading-relaxed text-ink-secondary">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                  {/* Waveform bar below the active message */}
                  {isCurrentlyPlaying && (
                    <div
                      className={`mt-1.5 flex gap-3 ${msg.from === "caller" ? "justify-end" : ""}`}
                    >
                      {msg.from === "ai" && <div className="w-7 shrink-0" />}
                      <div
                        className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ${
                          msg.from === "ai" ? "bg-cream/60" : "bg-rust/5"
                        }`}
                      >
                        <div className="h-5 w-28">
                          <Waveform
                            audioElement={audioRef.current}
                            isActive={true}
                            color={msg.from === "ai" ? "#6b6b65" : "#c64110"}
                            barCount={24}
                          />
                        </div>
                        <span className="text-[10px] text-ink-muted">
                          {msg.from === "ai" ? "Citadel" : "Caller"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lead capture summary */}
      {leadCaptured && (
        <div className="border-t border-border bg-warm-bg px-6 py-4">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-rust">
            Lead captured
          </p>
          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1.5 text-[13px]">
            <div>
              <span className="text-ink-muted">Charge: </span>
              <span className="text-ink">DUI — 1st offense</span>
            </div>
            <div>
              <span className="text-ink-muted">County: </span>
              <span className="text-ink">Harris County, TX</span>
            </div>
            <div>
              <span className="text-ink-muted">Status: </span>
              <span className="text-ink">In custody</span>
            </div>
            <div>
              <span className="text-ink-muted">Consult: </span>
              <span className="font-medium text-rust">Booked 9 AM</span>
            </div>
          </div>
          <button
            onClick={resetDemo}
            className="mt-3 text-[13px] font-medium text-rust transition-colors hover:text-rust-hover"
          >
            Replay demo
          </button>
        </div>
      )}
    </div>
  );
}
