import React, { useState } from 'react';
import { ArrowRight, X, Calendar, Clock, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenBooking?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      className="bg-[#faf9f6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#ece8de]/70"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching screenshot */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="blog-main-heading"
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1b232a] font-normal tracking-tight max-w-3xl mx-auto leading-snug"
          >
            Welcome to the healthy hair + healthy colour blog!
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="flex flex-row items-center relative group"
            >
              {/* Left: Rounded Image */}
              <div className="w-[46%] sm:w-[48%] aspect-[4/5] sm:aspect-[1/1.1] rounded-[24px] sm:rounded-[30px] overflow-hidden shrink-0 shadow-sm relative bg-[#ebe6dc]">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Right: Overlapping Nude Peach Card */}
              <div
                onClick={() => setSelectedPost(post)}
                className="w-[62%] sm:w-[60%] -ml-8 sm:-ml-12 z-10 bg-[#f4e8e1] rounded-[24px] sm:rounded-[30px] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-h-[240px] sm:min-h-[280px] cursor-pointer border border-[#ece0d8]"
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-[#1e2328] font-normal leading-snug mb-2.5 sm:mb-3 group-hover:text-[#9e7932] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#554e48] font-light leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    aria-label={`Read full article: ${post.title}`}
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl flex items-center justify-center text-[#111111] shadow-xs group-hover:bg-[#c5a059] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <span className="text-[11px] text-[#7a726b] uppercase tracking-wider font-light">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reading Modal */}
      {selectedPost && (
        <div
          id="blog-reading-modal"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-[#faf9f6] text-[#222222] max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-[#c5a059]/40 my-auto rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black p-1 transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Post Header */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 text-xs text-[#c5a059] uppercase tracking-[0.2em] mb-2 font-medium">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {selectedPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {selectedPost.readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal leading-tight mb-4">
                {selectedPost.title}
              </h2>

              <p className="text-xs text-[#777777] font-light">
                Published by <strong className="text-black font-medium">Delaney</strong>, Lead Stylist & Salon Owner
              </p>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 shadow-sm">
              <img
                src={selectedPost.image}
                alt={selectedPost.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-4 text-[#333333] text-sm sm:text-[15px] font-light leading-relaxed">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Consultation Call to Action */}
            <div className="mt-8 pt-6 border-t border-[#ece8de] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#666666] font-light text-center sm:text-left">
                Have questions about your hair type or custom toning formulation?
              </p>

              {onOpenBooking && (
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-3 bg-[#111111] hover:bg-[#c5a059] text-white hover:text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer shrink-0"
                >
                  RESERVE APPOINTMENT
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
