"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function PageVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = volume;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name !== "AbortError") {
            setIsPlaying(false);
          }
        });
      }
    }
  }, []);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        const currentVol = volume === 0 ? 1 : volume;
        videoRef.current.volume = currentVol;
        videoRef.current.muted = false;
        setVolume(currentVol);
        setIsMuted(false);
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        videoRef.current.muted = true;
        setIsMuted(true);
        setIsPlaying(false);
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Playback error:", error);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isMuted) {
      const restoredVol = volume === 0 ? 0.5 : volume;
      videoRef.current.muted = false;
      videoRef.current.volume = restoredVol;
      setVolume(restoredVol);
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);

    if (videoRef.current) {
      videoRef.current.volume = newVol;
      if (newVol === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
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

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40 pointer-events-none z-10" />

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-charcoal/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/30 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-ivory font-semibold">ShowRoom</span>
      </div>

      {/* Expandable Sound & Volume Control */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="absolute top-4 right-4 z-30 flex items-center bg-charcoal/80 backdrop-blur-md rounded-full border border-ivory/20 hover:border-gold/50 transition-all duration-300 group/vol overflow-hidden"
      >
        <button
          onClick={toggleMute}
          type="button"
          className="p-2.5 text-ivory hover:text-gold transition-colors cursor-pointer flex items-center justify-center shrink-0"
          aria-label="Toggle Mute"
        >
          {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <div className="w-0 opacity-0 pointer-events-none group-hover/vol:w-20 group-hover/vol:opacity-100 group-hover/vol:pr-3 group-hover/vol:pointer-events-auto transition-all duration-300 ease-out flex items-center">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-ivory/30 rounded-lg appearance-none cursor-pointer accent-gold"
            style={{ accentColor: '#D4AF37' }}
          />
        </div>
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