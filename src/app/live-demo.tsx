"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useConversation } from "@11labs/react";

const AGENT_ID = "agent_7501knj7cjgqfxja8qtyysttqxgh";

function BrowserDemo() {
  const [status, setStatus] = useState<"idle" | "connecting" | "active">(
    "idle"
  );
  const [messages, setMessages] = useState<
    Array<{ from: "ai" | "user"; text: string }>
  >([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const conversation = useConversation({
    volume: 1,
    onConnect: () => setStatus("active"),
    onDisconnect: () => setStatus("idle"),
    onMessage: (msg: { source: string; message: string }) => {
      setMessages((prev) => [
        ...prev,
        {
          from: msg.source === "ai" ? "ai" : "user",
          text: msg.message,
        },
      ]);
    },
    onError: (error: unknown) => {
      console.error("Conversation error:", error);
      setStatus("idle");
    },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const start = useCallback(async () => {
    setStatus("connecting");
    setMessages([]);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId: AGENT_ID });
    } catch (error) {
      console.error("Failed to start:", error);
      setStatus("idle");
    }
  }, [conversation]);

  const stop = useCallback(async () => {
    await conversation.endSession();
    setStatus("idle");
  }, [conversation]);

  const isSpeaking = conversation.isSpeaking;

  return (
    <div>
      {/* Transcript area */}
      <div
        ref={scrollRef}
        className="h-[280px] overflow-y-auto border-b border-border px-5 py-4"
      >
        {status === "idle" && messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-ink-muted"
              >
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </div>
            <p className="mt-3 text-[14px] font-medium text-ink">
              Talk to Citadel
            </p>
            <p className="mt-1 text-[13px] text-ink-muted">
              Use your microphone to have a live conversation
            </p>
          </div>
        )}

        {messages.length > 0 && (
          <div className="space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${msg.from === "user" ? "justify-end" : ""}`}
              >
                {msg.from === "ai" && (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-[9px] font-semibold text-ink-muted">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-xl px-3.5 py-2 ${
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
            ))}
          </div>
        )}

        {status === "connecting" && (
          <div className="flex h-full items-center justify-center">
            <p className="text-[13px] text-ink-muted">Connecting...</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          {status === "active" && (
            <>
              <div
                className={`h-2 w-2 rounded-full ${isSpeaking ? "animate-pulse bg-rust" : "bg-green-500"}`}
              />
              <span className="text-[12px] text-ink-muted">
                {isSpeaking ? "Citadel is speaking..." : "Listening..."}
              </span>
            </>
          )}
        </div>

        {status === "idle" ? (
          <button
            onClick={start}
            className="flex items-center gap-2 rounded-full bg-rust px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-rust-hover"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
              <path d="M19 10v2a7 7 0 01-14 0v-2" />
            </svg>
            Start Conversation
          </button>
        ) : status === "connecting" ? (
          <button
            disabled
            className="rounded-full bg-ink-muted/20 px-5 py-2.5 text-[13px] font-medium text-ink-muted"
          >
            Connecting...
          </button>
        ) : (
          <button
            onClick={stop}
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-cream"
          >
            End Call
          </button>
        )}
      </div>
    </div>
  );
}

function PhoneDemo() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-12 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-ink-muted"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </div>
      <p className="mt-3 text-[15px] font-medium text-ink">
        Phone demo coming soon
      </p>
      <p className="mt-1 max-w-[260px] text-[13px] text-ink-muted">
        Try the browser demo now, or{" "}
        <a href="#book" className="font-medium text-rust">
          book a consultation
        </a>{" "}
        and we&rsquo;ll call you for a live walkthrough.
      </p>
    </div>
  );
}

export function LiveDemo() {
  const [tab, setTab] = useState<"browser" | "phone">("browser");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      {/* Tab header */}
      <div className="flex border-b border-border bg-warm-bg">
        <button
          onClick={() => setTab("browser")}
          className={`flex-1 px-4 py-3.5 text-center text-[13px] font-medium transition-colors ${
            tab === "browser"
              ? "border-b-2 border-rust bg-white text-ink"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
              <path d="M19 10v2a7 7 0 01-14 0v-2" />
            </svg>
            Talk in Browser
          </span>
        </button>
        <button
          onClick={() => setTab("phone")}
          className={`flex-1 px-4 py-3.5 text-center text-[13px] font-medium transition-colors ${
            tab === "phone"
              ? "border-b-2 border-rust bg-white text-ink"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Get a Call
          </span>
        </button>
      </div>

      {tab === "browser" ? <BrowserDemo /> : <PhoneDemo />}
    </div>
  );
}
