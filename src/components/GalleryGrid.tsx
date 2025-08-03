import { useState } from "react";
import GalleryModal from "./GalleryModal";

interface Artwork {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface GalleryGridProps {
  artworks: Artwork[];
  title: string;
  description: string;
  headerImage?: string;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const GalleryGrid = ({ artworks, title, description, headerImage, selectedCategory, onCategoryChange }: GalleryGridProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === artworks.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? artworks.length - 1 : prev - 1
    );
  };

  return (
    <section className="mb-16">
      {/* Header Section */}
      <div className="mb-12">
        {headerImage && (
          <div className="mb-6 aspect-[16/9] max-w-4xl mx-auto">
            <img
              src={headerImage}
              alt={`${title} header`}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        )}
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground tracking-wide">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Filter Navigation - only show if we have category functionality */}
      {selectedCategory && onCategoryChange && (
        <div className="mb-12 border-b border-border">
          <div className="flex justify-center">
            <div className="flex items-center space-x-12">
              {[
                { key: "alle", label: "ALLE" },
                { key: "zeichnungen", label: "ZEICHNUNGEN" },
                { key: "masken", label: "MASKEN" },
                { key: "skulpturen", label: "SKULPTUREN" },
                { key: "making-of", label: "MAKING-OF" }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => onCategoryChange(item.key)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground pb-4 ${
                    selectedCategory === item.key
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {artworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className="group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="aspect-square overflow-hidden rounded-sm bg-muted">
              <img
                src={artwork.src}
                alt={artwork.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        artworks={artworks}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
};

export default GalleryGrid;