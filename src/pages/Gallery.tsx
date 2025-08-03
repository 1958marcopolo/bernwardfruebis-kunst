import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";

// Import artwork images
import artworkGeneral1 from "@/assets/artwork-general-1.jpg";
import artworkGeneral2 from "@/assets/artwork-general-2.jpg";
import mask1 from "@/assets/mask-1.jpg";
import mask2 from "@/assets/mask-2.jpg";
import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import studioHeader from "@/assets/studio-header.jpg";

const Gallery = () => {
  // Sample artwork data - in a real app this would come from a CMS or API
  const allgemeinArtworks = [
    { id: "general-1", src: artworkGeneral1, alt: "Mixed media artwork with geometric forms" },
    { id: "general-2", src: artworkGeneral2, alt: "Urban landscape charcoal drawing" },
    { id: "general-3", src: artworkGeneral1, alt: "Abstract composition" },
    { id: "general-4", src: artworkGeneral2, alt: "Architectural sketch" },
    { id: "general-5", src: artworkGeneral1, alt: "Contemporary drawing" },
    { id: "general-6", src: artworkGeneral2, alt: "Mixed media piece" },
  ];

  const maskenArtworks = [
    { id: "mask-1", src: mask1, alt: "Expressive mask drawing in ink" },
    { id: "mask-2", src: mask2, alt: "Abstract face portrait" },
    { id: "mask-3", src: mask1, alt: "Simplified human features" },
    { id: "mask-4", src: mask2, alt: "Contemporary mask study" },
    { id: "mask-5", src: mask1, alt: "Emotional expression drawing" },
    { id: "mask-6", src: mask2, alt: "Minimalist face sketch" },
    { id: "mask-7", src: mask1, alt: "Mask-like portrait" },
    { id: "mask-8", src: mask2, alt: "Abstract facial features" },
  ];

  const skulpturenArtworks = [
    { id: "sculpture-1", src: sculpture1, alt: "Abstract sculptural form" },
    { id: "sculpture-2", src: sculpture2, alt: "Geometric sculpture installation" },
    { id: "sculpture-3", src: sculpture1, alt: "Contemporary three-dimensional work" },
    { id: "sculpture-4", src: sculpture2, alt: "Modern sculptural piece" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <GalleryGrid
          artworks={allgemeinArtworks}
          title="Allgemein"
          description="Vielfältige künstlerische Ausdrucksformen in verschiedenen Medien und Techniken"
          headerImage={studioHeader}
        />

        <GalleryGrid
          artworks={maskenArtworks}
          title="Masken"
          description="Trotz ihrer starken Reduzierung ist vielen Masken ein menschlicher Wesenszug geblieben, der die Kommunikation mit dem überraschten Betrachter sucht"
          headerImage={mask1}
        />

        <GalleryGrid
          artworks={skulpturenArtworks}
          title="Skulpturen"
          description="Dreidimensionale Arbeiten, die Raum und Form in einen Dialog mit dem Betrachter bringen"
          headerImage={sculpture1}
        />
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Bernward Frübis. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <a href="/impressum" className="hover:text-foreground transition-colors">
              IMPRESSUM
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;