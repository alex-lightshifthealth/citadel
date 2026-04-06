"use client";

import { useRef, useEffect } from "react";

export function Waveform({
  audioElement,
  isActive,
  color = "#6b6b65",
  barCount = 32,
  className = "",
}: {
  audioElement: HTMLAudioElement | null;
  isActive: boolean;
  color?: string;
  barCount?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const rafRef = useRef<number>(0);
  const connectedElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioElement || !isActive || !canvasRef.current) {
      // Clear canvas when not active
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
      cancelAnimationFrame(rafRef.current);
      return;
    }

    // Create audio context once
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    const audioCtx = ctxRef.current;

    // Only create a new source if the audio element changed
    if (connectedElementRef.current !== audioElement) {
      try {
        sourceRef.current = audioCtx.createMediaElementSource(audioElement);
        connectedElementRef.current = audioElement;
      } catch {
        // Element might already be connected — that's fine
      }
    }

    if (!analyserRef.current) {
      analyserRef.current = audioCtx.createAnalyser();
      analyserRef.current.fftSize = 128;
      analyserRef.current.smoothingTimeConstant = 0.7;
    }

    const analyser = analyserRef.current;

    if (sourceRef.current) {
      sourceRef.current.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function draw() {
      rafRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx!.scale(dpr, dpr);
      ctx!.clearRect(0, 0, w, h);

      const gap = 2;
      const barWidth = (w - (barCount - 1) * gap) / barCount;
      const step = Math.floor(dataArray.length / barCount);

      for (let i = 0; i < barCount; i++) {
        const value = dataArray[i * step] / 255;
        const barHeight = Math.max(2, value * h);
        const x = i * (barWidth + gap);
        const y = (h - barHeight) / 2;

        ctx!.fillStyle = color;
        ctx!.beginPath();
        ctx!.roundRect(x, y, barWidth, barHeight, 1);
        ctx!.fill();
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [audioElement, isActive, color, barCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
