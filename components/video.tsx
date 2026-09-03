"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function PageVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false; // Turn sound ON when playing
      videoRef.current.play();
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef.current.muted = true; // Turn sound OFF (mute) when paused
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    const nextMuteState = !isMuted;
    videoRef.current.muted = nextMuteState;
    setIsMuted(nextMuteState);
  };

  return (
    <div 
      onClick={togglePlay}
      className="relative w-full max-w-[360px] h-[600px] mx-auto rounded-lg overflow-hidden border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group cursor-pointer"
    >
      {/* Golden Glow Accent */}
      <div className="absolute inset-0 border border-gold/20 rounded-lg pointer-events-none transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] z-30" />

      {/* Main Video */}
      <video
        ref={videoRef}
        src="/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40 pointer-events-none z-10" />

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-charcoal/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/30 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-ivory font-semibold">ShowRoom </span>
      </div>

      {/* Sound Toggle Button */}
      <div className="absolute top-4 right-4 z-30">
        <button
          onClick={toggleMute}
          type="button"
          className="p-2.5 rounded-full bg-charcoal/80 backdrop-blur-md border border-ivory/20 text-ivory hover:text-gold hover:border-gold transition-all duration-300 cursor-pointer"
          aria-label="Toggle Mute"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Center Play/Pause Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div
          className={`p-5 rounded-full bg-gold text-charcoal shadow-2xl transition-all duration-300 transform ${
            isPlaying 
              ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100" 
              : "opacity-100 scale-100"
          }`}
        >
          {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
        </div>
      </div>

      {/* Bottom Caption */}
      <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none text-left">
        <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase block mb-1">
          Bespoke Quality
        </span>
        <p className="text-ivory font-serif text-sm font-light leading-snug">
          Precision joinery & handcrafted luxury finishes.
        </p>
      </div>
    </div>
  );
}