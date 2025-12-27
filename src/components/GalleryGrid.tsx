import { useState } from "react";
import GalleryModal from "./GalleryModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "@/hooks/useTranslation";
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
const GalleryGrid = ({ 
  artworks, 
  title, 
  description, 
  headerImage, 
  selectedCategory, 
  onCategoryChange 
}: GalleryGridProps) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
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
    setCurrentImageIndex(prev => prev === artworks.length - 1 ? 0 : prev + 1);
  };
  const previousImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? artworks.length - 1 : prev - 1);
  };
  return <section className="mb-16">
      {/* Header Section */}
      <div className="mb-12">
        {headerImage && <>
            {/* Hero Image */}
            <div className="relative mb-6 aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-sm">
              <img src={headerImage} alt={`${title} header`} className={`w-full h-full object-cover ${title === "MASKEN" ? "object-center md:object-[45%_center]" : "object-center"}`} />
              {/* H2 overlay - only visible on desktop/tablet */}
              <div className="absolute inset-0 hidden md:block">
                {/* Headline positioning - all at bottom left */}
                <div className="absolute bottom-8 left-0 px-8 w-full">
                  <h2 style={{
                    color: '#555555',
                    fontWeight: '100',
                    fontSize: '32px',
                    letterSpacing: '0',
                    whiteSpace: title === "\"CHIEN MÉCHANT\"" ? 'nowrap' : 'normal'
                  }} className="tracking-wide font-sans mb-2 text-2xl text-left">
                    {title}
                  </h2>
                  {/* Paragraph inside hero - only for "alle" category */}
                  {selectedCategory === "alle" && (
                    <p className="text-base leading-relaxed text-left" style={{ color: '#555555' }}>
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Paragraph below hero image - desktop/tablet, not for "alle" category */}
            {selectedCategory !== "alle" && (
              <div className="hidden md:block max-w-4xl mx-auto mb-8 px-8">
                {(title === "ZEICHNUNGEN" || title === "DRAWINGS") ? (
                  <div className="text-sm leading-relaxed" style={{ color: '#555555' }}>
                    <div className="grid grid-cols-2 gap-6">
                      <p>Was beim Modellieren ein Klumpen Ton, ist bei einer Zeichnung unweigerlich das weiße Blatt Papier. Es fordert Mut voraus und zwingt den Zeichner seine anfängliche Zaghaftigkeit abzulegen</p>
                      <p>um sich sogleich an der Darstellung der Realität zu messen. Das kann mitunter zu einer gewissen Ernüchterung führen. Mir hat es bis heute den ehrlichen Respekt vor jeder guten Zeichnung bewahrt.</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-base leading-relaxed text-left" style={{ color: '#555555' }}>
                    {description}
                  </p>
                )}
              </div>
            )}
            
            {/* Mobile headlines below hero image - hide for "alle" category */}
            {selectedCategory !== "alle" && (
              <div className="md:hidden mb-8 text-left px-6">
                <h2 className="text-2xl tracking-wide font-sans mb-4" style={{
                  color: '#555555',
                  fontWeight: '100',
                  letterSpacing: '0'
                }}>
                  {title}
                </h2>
                {/* Subheadline below headline - hide for Zeichnungen/Drawings */}
                {title !== "ZEICHNUNGEN" && title !== "DRAWINGS" && <p className="text-sm leading-relaxed" style={{
                  color: '#555555'
                }}>
                  {description}
                </p>}
              </div>
            )}
          </>}
        
        {/* Fallback for when no header image */}
        {!headerImage && <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-thin mb-4 text-foreground tracking-wide">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>}
      </div>

      {/* Filter Navigation - only show if we have category functionality */}
      {selectedCategory && onCategoryChange && <div className="mb-12 border-t border-b border-border pt-6 pb-6">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12">
              {(["alle", "zeichnungen", "masken", "skulpturen", "atelier"] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground ${
                    selectedCategory === category
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {t.categories[category]}
                </button>
              ))}
            </div>
          </div>
        </div>}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {artworks.map((artwork, index) => <div key={artwork.id} className="group cursor-pointer" onClick={() => openModal(index)}>
            <div className="aspect-square overflow-hidden rounded-sm bg-muted">
              <img src={artwork.src} alt={artwork.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" style={artwork.category === "masken" ? {
            height: "200%",
            objectPosition: `calc(50% - 10px) calc(50% - ${isMobile ? '60px' : '110px'})`
          } : {}} loading="lazy" />
            </div>
          </div>)}
      </div>

      {/* Gallery Modal */}
      <GalleryModal artworks={artworks} currentIndex={currentImageIndex} isOpen={isModalOpen} onClose={closeModal} onNext={nextImage} onPrevious={previousImage} />
    </section>;
};
export default GalleryGrid;