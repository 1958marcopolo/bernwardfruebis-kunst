import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Artwork {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface GalleryModalProps {
  artworks: Artwork[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const GalleryModal = ({ 
  artworks, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious 
}: GalleryModalProps) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || artworks.length === 0) return null;

  const currentArtwork = artworks[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      {/* Previous button */}
      <button
        onClick={onPrevious}
        className="absolute left-6 z-10 p-4 text-white hover:text-gray-300 transition-colors disabled:opacity-50"
        disabled={artworks.length <= 1}
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-6 z-10 p-4 text-white hover:text-gray-300 transition-colors disabled:opacity-50"
        disabled={artworks.length <= 1}
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </button>

      {/* Image counter */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 text-white text-sm font-medium">
        {currentIndex + 1} of {artworks.length}
      </div>

      {/* Main image */}
      <div className="relative max-w-screen-lg max-h-screen px-16 py-16">
        <img
          src={currentArtwork.src}
          alt={currentArtwork.alt}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
        
        {/* Title if available */}
        {currentArtwork.title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
            <h3 className="text-lg font-medium">{currentArtwork.title}</h3>
          </div>
        )}
      </div>

      {/* Touch/swipe area for mobile */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
};

export default GalleryModal;