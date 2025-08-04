import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
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
  
  // Extract filename from src and format it
  const getFormattedFilename = (src: string) => {
    const filename = src.split('/').pop() || '';
    // Remove file extension
    let formatted = filename.replace(/\.[^/.]+$/, '');
    // Remove category prefixes (e.g., "Skulpturen-11-", "Zeichnung-01-", "Masken-05-", "Atelier-02-")
    formatted = formatted.replace(/^(Skulpturen|Zeichnung|Masken|Atelier)-\d+-/, '');
    // Replace underscores with spaces
    return formatted.replace(/_/g, ' ');
  };

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
      <div className={`relative w-full h-full flex flex-col items-center justify-center ${isMobile ? 'px-4 py-16' : 'px-20 py-20'}`}>
        <img
          src={currentArtwork.src}
          alt={currentArtwork.alt}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
        
        {/* Filename below image */}
        <div className="mt-4 text-white text-center">
          <p className="text-sm font-medium opacity-80">
            {getFormattedFilename(currentArtwork.src)}
          </p>
        </div>
        
        {/* Title if available */}
        {currentArtwork.title && (
          <div className="mt-2 text-white text-center">
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