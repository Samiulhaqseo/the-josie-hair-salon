import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export const SalonInterior: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const interiorImages = [
    {
      id: 'station-1',
      title: 'Styling Station Left View',
      src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
      alt: 'Salon styling station with modern grey chair, illuminated mirror and potted green plant',
    },
    {
      id: 'station-2',
      title: 'Styling Station Center View',
      src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=85',
      alt: 'Center salon chair and mirror with warm ambient studio lighting',
    },
    {
      id: 'station-3',
      title: 'Styling Station Right View',
      src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=85',
      alt: 'Sleek luxury salon stations with wood flooring and minimalist interior',
    },
  ];

  return (
    <section id="salon-interior" className="w-full bg-[#faf9f6] pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Triptych Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {interiorImages.map((image, idx) => (
            <div
              key={image.id}
              id={`interior-image-${idx + 1}`}
              onClick={() => setActiveImage(image.src)}
              className="group relative overflow-hidden bg-[#ebe6db] aspect-[4/5] sm:aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white p-3 rounded-full backdrop-blur-sm">
                  <ZoomIn className="w-5 h-5 text-[#dfba73]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          id="salon-image-lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage}
            alt="Enlarged salon view"
            referrerPolicy="no-referrer"
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
