import { useState } from "react";
import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Import artwork images
import artworkGeneral1 from "@/assets/artwork-general-1.jpg";
import artworkGeneral2 from "@/assets/artwork-general-2.jpg";
import mask1 from "@/assets/mask-1.jpg";
import mask2 from "@/assets/mask-2.jpg";
import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import skulpturenHero from "@/assets/skulpturen-hero.jpg";
import studioHeader from "@/assets/studio-header.jpg";
// Using external URL for masken hero image
const maskenHero = "https://bernwardfruebis-kunst.de/images/galerie/galerie_web_01.jpg";

type Category = "alle" | "zeichnungen" | "masken" | "skulpturen" | "making-of";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("alle");

  // Combined artwork data with categories
  const allArtworks = [
    // Zeichnungen (General artworks)
    { id: "general-1", src: artworkGeneral1, alt: "Mixed media artwork with geometric forms", category: "zeichnungen" as Category },
    { id: "general-2", src: artworkGeneral2, alt: "Urban landscape charcoal drawing", category: "zeichnungen" as Category },
    { id: "general-3", src: artworkGeneral1, alt: "Abstract composition", category: "zeichnungen" as Category },
    { id: "general-4", src: artworkGeneral2, alt: "Architectural sketch", category: "zeichnungen" as Category },
    { id: "general-5", src: artworkGeneral1, alt: "Contemporary drawing", category: "zeichnungen" as Category },
    { id: "general-6", src: artworkGeneral2, alt: "Mixed media piece", category: "zeichnungen" as Category },
    
    // Masken
    { id: "mask-1", src: mask1, alt: "Expressive mask drawing in ink", category: "masken" as Category },
    { id: "mask-2", src: mask2, alt: "Abstract face portrait", category: "masken" as Category },
    { id: "mask-3", src: mask1, alt: "Simplified human features", category: "masken" as Category },
    { id: "mask-4", src: mask2, alt: "Contemporary mask study", category: "masken" as Category },
    { id: "mask-5", src: mask1, alt: "Emotional expression drawing", category: "masken" as Category },
    { id: "mask-6", src: mask2, alt: "Minimalist face sketch", category: "masken" as Category },
    { id: "mask-7", src: mask1, alt: "Mask-like portrait", category: "masken" as Category },
    { id: "mask-8", src: mask2, alt: "Abstract facial features", category: "masken" as Category },
    
    // Skulpturen
    { id: "sculpture-1", src: sculpture1, alt: "Abstract sculptural form", category: "skulpturen" as Category },
    { id: "sculpture-2", src: sculpture2, alt: "Geometric sculpture installation", category: "skulpturen" as Category },
    { id: "sculpture-3", src: sculpture1, alt: "Contemporary three-dimensional work", category: "skulpturen" as Category },
    { id: "sculpture-4", src: sculpture2, alt: "Modern sculptural piece", category: "skulpturen" as Category },
  ];

  // Filter artworks based on selected category
  const filteredArtworks = selectedCategory === "alle" 
    ? allArtworks 
    : allArtworks.filter(artwork => artwork.category === selectedCategory);

  // Get category info for display
  const getCategoryInfo = (category: Category) => {
    switch (category) {
      case "alle":
        return {
          title: "ALLE ARBEITEN",
          description: "Eine Übersicht aller künstlerischen Arbeiten von Bernward Frübis",
          headerImage: studioHeader
        };
      case "zeichnungen":
        return {
          title: "ZEICHNUNGEN",
          description: "Vielfältige künstlerische Ausdrucksformen in verschiedenen Medien und Techniken",
          headerImage: artworkGeneral1
        };
      case "masken":
        return {
          title: "MASKEN",
          description: "Trotz ihrer starken Reduzierung ist vielen Masken ein menschlicher Wesenszug geblieben, der die Kommunikation mit dem überraschten Betrachter sucht.",
          headerImage: maskenHero
        };
      case "skulpturen":
        return {
          title: "SKULPTUREN",
          description: "Skulpturen springen hervor, treten in die dritte Dimension, erwecken ein Objekt erst richtig zum Leben. Dadurch ist der kreative Prozess ungleich komplexer, als bei jeder Zeichnung oder Malerei. Am Beginn steht ein amorphes Ausgangsmaterial wie Holz, Ton, Marmor oder sonstigen Materialien und letztlich entscheidet nur der pure Wille des Schöpfers in Verbindung mit seinen gestalterischen Fähigkeiten was am Ende daraus entsteht. - Einfach faszinierend.",
          headerImage: skulpturenHero
        };
      case "making-of":
        return {
          title: "MAKING-OF",
          description: "Einblicke in den kreativen Prozess und die Entstehung der Kunstwerke",
          headerImage: studioHeader
        };
      default:
        return {
          title: "ALLE ARBEITEN",
          description: "Eine Übersicht aller künstlerischen Arbeiten von Bernward Frübis",
          headerImage: studioHeader
        };
    }
  };

  const currentCategoryInfo = getCategoryInfo(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        {/* Gallery Grid with integrated filter navigation */}
        <GalleryGrid
          artworks={filteredArtworks}
          title={currentCategoryInfo.title}
          description={currentCategoryInfo.description}
          headerImage={currentCategoryInfo.headerImage}
          selectedCategory={selectedCategory}
          onCategoryChange={(category: string) => setSelectedCategory(category as Category)}
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