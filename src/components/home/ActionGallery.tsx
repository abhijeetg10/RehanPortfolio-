import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../../data/siteData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const ActionGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-background-secondary border-t border-border overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md">
            Training in Action
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Transforming Engineering Campuses <span className="text-gradient">Nationwide</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted">
            Photographs from real auditorium seminars, hands-on coding bootcamps, and placement drives led by Rehan R. Chougale.
          </p>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900 border border-border cursor-pointer shadow-lg hover:border-brand-cyan/50 transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Gradient dark mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag & Caption */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-brand-cyan border border-brand-cyan/20">
                  {img.tag}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <p className="text-xs text-white font-medium line-clamp-2 pr-2">
                  {img.caption}
                </p>
                <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 animate-fadeIn">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors hidden sm:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors hidden sm:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={GALLERY_IMAGES[lightboxIndex].url}
                alt={GALLERY_IMAGES[lightboxIndex].caption}
                className="max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl border border-white/10"
              />
              <p className="mt-4 text-sm sm:text-base text-white text-center font-medium max-w-xl">
                {GALLERY_IMAGES[lightboxIndex].caption}
              </p>
              <span className="text-xs text-brand-cyan mt-1">
                {lightboxIndex + 1} of {GALLERY_IMAGES.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
