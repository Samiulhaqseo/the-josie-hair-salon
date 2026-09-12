import React, { useState } from 'react';
import { Play, Heart, Eye, Volume2, VolumeX, X, ExternalLink, Sparkles, MessageCircle, Share2 } from 'lucide-react';
import { INSTAGRAM_REELS, SALON_INFO } from '../data';
import { InstagramReel } from '../types';

interface InstagramVideosSectionProps {
  onOpenBooking?: (stylistOrService?: string) => void;
}

export const InstagramVideosSection: React.FC<InstagramVideosSectionProps> = ({ onOpenBooking }) => {
  const [activeReel, setActiveReel] = useState<InstagramReel | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [likedReels, setLikedReels] = useState<string[]>([]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedReels((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="instagram-videos"
      className="bg-[#faf9f6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#ece8de]/70"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching the screenshot */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="insta-tiktok-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1b232a] font-normal tracking-tight leading-snug"
          >
            Follow us on Insta + Tiktok
          </h2>
          <p className="text-xs sm:text-sm text-[#706a64] font-light max-w-lg mx-auto mt-2 tracking-wide">
            Daily salon transformations, effortless lived-in blondes, and hair tutorials straight from the chair.
          </p>
        </div>

        {/* 5-Column Video / Reel Row matching the screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {INSTAGRAM_REELS.map((reel, index) => {
            const isLiked = likedReels.includes(reel.id);

            return (
              <div
                key={reel.id}
                id={`insta-reel-card-${reel.id}`}
                onClick={() => {
                  setActiveReel(reel);
                  setIsPlaying(true);
                }}
                className="group relative aspect-[4/5] sm:aspect-[1/1.1] rounded-none sm:rounded-sm overflow-hidden bg-[#161c21] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Background Image Thumbnail */}
                <img
                  src={reel.thumbnail}
                  alt={reel.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25 pointer-events-none" />

                {/* Specific Overlay Text if present (e.g., Reel 2 "THE RESULTS" & Reel 5 "kinda chic...") */}
                {reel.overlayText && (
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 pointer-events-none z-10 text-center">
                    {reel.id === 'reel-2' ? (
                      <span className="font-serif text-white text-xs sm:text-sm md:text-[15px] uppercase tracking-[0.35em] drop-shadow-md font-light">
                        {reel.overlayText}
                      </span>
                    ) : (
                      <p className="font-serif italic text-white text-xs sm:text-[13px] md:text-sm leading-snug drop-shadow-lg max-w-[190px] font-light text-center px-1">
                        "{reel.overlayText}"
                      </p>
                    )}
                  </div>
                )}

                {/* Reel / Video Icon Badge in Top Corner */}
                <div className="absolute top-2.5 right-2.5 z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white border border-white/20">
                    <Play className="w-3 h-3 fill-white text-white translate-x-0.5" />
                  </div>
                </div>

                {/* Platform Badge on Top Left */}
                <div className="absolute top-2.5 left-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-2 py-0.5 bg-black/50 backdrop-blur-xs text-[10px] text-white/90 uppercase tracking-widest font-mono rounded-xs">
                    REEL
                  </span>
                </div>

                {/* Bottom Bar: Views & Heart */}
                <div className="absolute bottom-0 inset-x-0 p-3 z-10 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center space-x-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-white/80" />
                    <span className="text-[11px] font-light tracking-wide">{reel.views}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => toggleLike(reel.id, e)}
                    aria-label={`Like reel ${reel.id}`}
                    className="p-1 hover:scale-125 transition-transform cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isLiked ? 'fill-[#e05a5a] text-[#e05a5a]' : 'text-white/80 hover:text-white'
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Profile Bar Below Videos */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white border border-[#ece8de] px-6 sm:px-8 py-3.5 shadow-xs">
            <span className="text-xs text-[#666666] font-light tracking-wider uppercase">
              Join our community
            </span>

            <div className="h-4 w-px bg-[#e5dfd3] hidden sm:block" />

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs text-[#111111] hover:text-[#c5a059] font-medium tracking-wider transition-colors"
            >
              <span>@delaneyhairstylist on Instagram</span>
              <ExternalLink className="w-3 h-3 text-[#c5a059]" />
            </a>

            <div className="h-4 w-px bg-[#e5dfd3] hidden sm:block" />

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs text-[#111111] hover:text-[#c5a059] font-medium tracking-wider transition-colors"
            >
              <span>@delaneyhairstylist on TikTok</span>
              <ExternalLink className="w-3 h-3 text-[#c5a059]" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Reel Viewer Modal */}
      {activeReel && (
        <div
          id="active-reel-modal"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="bg-[#11161a] text-white max-w-sm sm:max-w-md w-full rounded-2xl overflow-hidden shadow-2xl relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-30 p-2 bg-black/60 rounded-full text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close reel viewer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video / Visual Simulation Area */}
            <div className="relative aspect-[9/16] w-full bg-black overflow-hidden select-none">
              <img
                src={activeReel.thumbnail}
                alt={activeReel.caption}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Reel Overlay Text */}
              {activeReel.overlayText && (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center pointer-events-none">
                  {activeReel.id === 'reel-2' ? (
                    <span className="font-serif text-white text-lg uppercase tracking-[0.35em] drop-shadow-lg font-light">
                      {activeReel.overlayText}
                    </span>
                  ) : (
                    <p className="font-serif italic text-white text-base leading-snug drop-shadow-lg max-w-[240px] font-light">
                      "{activeReel.overlayText}"
                    </p>
                  )}
                </div>
              )}

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 flex flex-col justify-between p-4 z-20 pointer-events-none">
                {/* Top Bar inside reel */}
                <div className="flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full border border-white/40 overflow-hidden bg-[#c5a059]">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                        alt="Delaney Hair Stylist profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wide">delaneyhairstylist</p>
                      <p className="text-[10px] text-white/60 font-light">Original Audio • Salon Vibes</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 bg-black/40 rounded-full text-white/90 hover:text-white pointer-events-auto cursor-pointer"
                    aria-label="Toggle audio"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Bottom Overlay: Caption & Interactive Actions */}
                <div className="space-y-3 pointer-events-auto">
                  <p className="text-xs text-white/95 leading-relaxed font-light">
                    {activeReel.caption}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={(e) => toggleLike(activeReel.id, e)}
                        className="flex items-center space-x-1.5 text-xs text-white/90 hover:text-white cursor-pointer"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            likedReels.includes(activeReel.id)
                              ? 'fill-[#e05a5a] text-[#e05a5a]'
                              : 'text-white'
                          }`}
                        />
                        <span>{activeReel.likes}</span>
                      </button>

                      <div className="flex items-center space-x-1.5 text-xs text-white/80">
                        <Eye className="w-4 h-4" />
                        <span>{activeReel.views}</span>
                      </div>
                    </div>

                    <a
                      href={activeReel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-full text-[11px] text-white tracking-wider uppercase transition-colors"
                    >
                      <span>Open on App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Book this look CTA */}
                  {onOpenBooking && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveReel(null);
                        onOpenBooking('Custom Balayage & Cut');
                      }}
                      className="w-full py-2.5 bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                    >
                      Book This Look
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
