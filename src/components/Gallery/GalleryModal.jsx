import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ 
  isGalleryOpen, 
  closeGallery, 
  currentImageIndex, 
  setCurrentImageIndex, 
  galleryImages, 
  prevImage, 
  nextImage 
}) => {
  if (!isGalleryOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Close button */}
      <button
        onClick={closeGallery}
        className="absolute top-6 right-6 z-60 glass text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
      >
        <X className="w-6 h-6 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
      </button>

      {/* Image counter */}
      <div className="absolute top-6 left-6 z-60 glass text-white px-4 py-2 rounded-xl">
        <span className="font-bold">{currentImageIndex + 1}</span>
        <span className="text-white/70 mx-2">/</span>
        <span className="text-white/70">{galleryImages.length}</span>
      </div>

      {/* Main media */}
      <div className="relative max-w-6xl max-h-[80vh] w-full">
        {galleryImages[currentImageIndex].type === "video" ? (
          <video
            src={galleryImages[currentImageIndex].src}
            className="w-full h-full object-contain rounded-2xl shadow-premium"
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].title}
            className="w-full h-full object-contain rounded-2xl shadow-premium"
          />
        )}



        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 glass text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 glass text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Thumbnail strip */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {galleryImages.map((media, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              currentImageIndex === index
                ? 'ring-2 ring-white scale-110'
                : 'opacity-60 hover:opacity-100 hover:scale-105'
            }`}
          >
            {media.type === "video" ? (
              <video
                src={media.src}
                className="w-full h-full object-cover"
                muted
              />
            ) : (
              <img
                src={media.src}
                alt={media.title}
                className="w-full h-full object-cover"
              />
            )}
            {media.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-white/80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-black border-y-[3px] border-y-transparent ml-0.5"></div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default GalleryModal;
