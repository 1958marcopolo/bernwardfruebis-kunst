import { useState } from "react";
import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";
import { getImageSrc } from "@/lib/imageRegistry";
import { useTranslation } from "@/hooks/useTranslation";

// Using local masken hero image from public folder
const maskenHero = "/galerie_web_01.jpg";

type Category = "alle" | "zeichnungen" | "masken" | "skulpturen" | "atelier";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category>("masken");

  // Combined artwork data with categories - using image registry for proper bundling
  const allArtworks = [
    // Zeichnungen
    { id: "zeichnung-01", src: getImageSrc("zeichnung-01"), alt: "Bon Jovi (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-02", src: getImageSrc("zeichnung-02"), alt: "Vulkan (Acryl) 40x40cm", category: "zeichnungen" as Category },
    { id: "zeichnung-03", src: getImageSrc("zeichnung-03"), alt: "Gargouilles (Filzstift) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-04", src: getImageSrc("zeichnung-04"), alt: "Gargouilles 2 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-05", src: getImageSrc("zeichnung-05"), alt: "Zeitmaschine II (Acryl- Mischtechnik) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-06", src: getImageSrc("zeichnung-06"), alt: "Picasso (Graphit) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-07", src: getImageSrc("zeichnung-07"), alt: "Struktur mit Kugel (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-08", src: getImageSrc("zeichnung-08"), alt: "Kurt Cobain (Graphit) A1", category: "zeichnungen" as Category },
    { id: "zeichnung-09", src: getImageSrc("zeichnung-09"), alt: "Beaucet VII (Feder tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-10", src: getImageSrc("zeichnung-10"), alt: "Herbst (Graphit) DIN A6", category: "zeichnungen" as Category },
    { id: "zeichnung-11", src: getImageSrc("zeichnung-11"), alt: "Beaucet I (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-12", src: getImageSrc("zeichnung-12"), alt: "Beaucet II (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-13", src: getImageSrc("zeichnung-13"), alt: "Sator-Maske II (Ton Kupfer Leder) 15x50cm", category: "zeichnungen" as Category },
    { id: "zeichnung-14", src: getImageSrc("zeichnung-14"), alt: "Bob Dylan (Oil) 150x150cm", category: "zeichnungen" as Category },
    { id: "zeichnung-15", src: getImageSrc("zeichnung-15"), alt: "alter Mann 1 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-16", src: getImageSrc("zeichnung-16"), alt: "Jonathan (4Jahre) (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-17", src: getImageSrc("zeichnung-17"), alt: "Venasque (Aquarell) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-18", src: getImageSrc("zeichnung-18"), alt: "Jack Nickolson (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-19", src: getImageSrc("zeichnung-19"), alt: "Das fliegende Ei (Akryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-20", src: getImageSrc("zeichnung-20"), alt: "Iggi Pop (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-21", src: getImageSrc("zeichnung-21"), alt: "ouvre la port! (Graphit) DIN A7", category: "zeichnungen" as Category },
    { id: "zeichnung-22", src: getImageSrc("zeichnung-22"), alt: "Chien Mechant (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-23", src: getImageSrc("zeichnung-23"), alt: "afri-cola (Tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-24", src: getImageSrc("zeichnung-24"), alt: "Beaucet III (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-25", src: getImageSrc("zeichnung-25"), alt: "Ueber den Daechern von Paris 1978 (Kugelschreiber) 15x15cm", category: "zeichnungen" as Category },
    { id: "zeichnung-26", src: getImageSrc("zeichnung-26"), alt: "alter Mann 2 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-27", src: getImageSrc("zeichnung-27"), alt: "Das ueberraschte Rot (Acryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-28", src: getImageSrc("zeichnung-28"), alt: "Liegender Akt (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-29", src: getImageSrc("zeichnung-29"), alt: "C2-C4 (Acryl 3D) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-30", src: getImageSrc("zeichnung-30"), alt: "Zwischen-Rot (Lithographie) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-31", src: getImageSrc("zeichnung-31"), alt: "Bleistift 366 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-32", src: getImageSrc("zeichnung-32"), alt: "Der Matrose (Tusche) DIN A2", category: "zeichnungen" as Category },
    { id: "zeichnung-33", src: getImageSrc("zeichnung-33"), alt: "Luzifer (Acryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-34", src: getImageSrc("zeichnung-34"), alt: "Chaise long (Pastell) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-35", src: getImageSrc("zeichnung-35"), alt: "Sator-Maske I (Ton Kupfer Leder) 15x40cm", category: "zeichnungen" as Category },
    { id: "zeichnung-36", src: getImageSrc("zeichnung-36"), alt: "Zeitmaschine I (Acryl-Mischtechnik) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-37", src: getImageSrc("zeichnung-37"), alt: "Beaucet VIII Detail (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-38", src: getImageSrc("zeichnung-38"), alt: "Papi (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-39", src: getImageSrc("zeichnung-39"), alt: "Methamis (Tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-40", src: getImageSrc("zeichnung-40"), alt: "Beaucet IV (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-41", src: getImageSrc("zeichnung-41"), alt: "Venasque (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-42", src: getImageSrc("zeichnung-42"), alt: "Beaucet VI (Graphit) DIN A4", category: "zeichnungen" as Category },
    
    // Masken
    { id: "masken-01", src: getImageSrc("masken-01"), alt: "BF Masken 01", category: "masken" as Category },
    { id: "masken-02", src: getImageSrc("masken-02"), alt: "BF Masken 02", category: "masken" as Category },
    { id: "masken-03", src: getImageSrc("masken-03"), alt: "BF Masken 03", category: "masken" as Category },
    { id: "masken-04", src: getImageSrc("masken-04"), alt: "BF Masken 04", category: "masken" as Category },
    { id: "masken-05", src: getImageSrc("masken-05"), alt: "BF Masken 05", category: "masken" as Category },
    { id: "masken-06", src: getImageSrc("masken-06"), alt: "BF Masken 06", category: "masken" as Category },
    { id: "masken-07", src: getImageSrc("masken-07"), alt: "BF Masken 07", category: "masken" as Category },
    { id: "masken-08", src: getImageSrc("masken-08"), alt: "BF Masken 08", category: "masken" as Category },
    { id: "masken-09", src: getImageSrc("masken-09"), alt: "BF Masken 09", category: "masken" as Category },
    { id: "masken-10", src: getImageSrc("masken-10"), alt: "BF Masken 10", category: "masken" as Category },
    { id: "masken-11", src: getImageSrc("masken-11"), alt: "BF Masken 11", category: "masken" as Category },
    { id: "masken-12", src: getImageSrc("masken-12"), alt: "BF Masken 12", category: "masken" as Category },
    { id: "masken-13", src: getImageSrc("masken-13"), alt: "BF Masken 13", category: "masken" as Category },
    { id: "masken-14", src: getImageSrc("masken-14"), alt: "BF Masken 14", category: "masken" as Category },
    { id: "masken-15", src: getImageSrc("masken-15"), alt: "BF Masken 15", category: "masken" as Category },
    { id: "masken-16", src: getImageSrc("masken-16"), alt: "BF Masken 16", category: "masken" as Category },
    { id: "masken-17", src: getImageSrc("masken-17"), alt: "BF Masken 17", category: "masken" as Category },
    { id: "masken-18", src: getImageSrc("masken-18"), alt: "BF Masken 18", category: "masken" as Category },
    { id: "masken-19", src: getImageSrc("masken-19"), alt: "BF Masken 19", category: "masken" as Category },
    { id: "masken-20", src: getImageSrc("masken-20"), alt: "BF Masken 20", category: "masken" as Category },
    { id: "masken-21", src: getImageSrc("masken-21"), alt: "BF Masken 21", category: "masken" as Category },
    { id: "masken-22", src: getImageSrc("masken-22"), alt: "BF Masken 22", category: "masken" as Category },
    { id: "masken-23", src: getImageSrc("masken-23"), alt: "BF Masken 23", category: "masken" as Category },
    { id: "masken-24", src: getImageSrc("masken-24"), alt: "BF Masken 24", category: "masken" as Category },
    { id: "masken-25", src: getImageSrc("masken-25"), alt: "BF Masken 25", category: "masken" as Category },
    { id: "masken-26", src: getImageSrc("masken-26"), alt: "BF Masken 26", category: "masken" as Category },
    { id: "masken-27", src: getImageSrc("masken-27"), alt: "BF Masken 27", category: "masken" as Category },
    { id: "masken-28", src: getImageSrc("masken-28"), alt: "BF Masken 28", category: "masken" as Category },
    { id: "masken-29", src: getImageSrc("masken-29"), alt: "BF Masken 29", category: "masken" as Category },
    { id: "masken-30", src: getImageSrc("masken-30"), alt: "BF Masken 30", category: "masken" as Category },
    { id: "masken-31", src: getImageSrc("masken-31"), alt: "BF Masken 31", category: "masken" as Category },
    { id: "masken-32", src: getImageSrc("masken-32"), alt: "BF Masken 32", category: "masken" as Category },
    { id: "masken-33", src: getImageSrc("masken-33"), alt: "BF Masken 33", category: "masken" as Category },
    { id: "masken-34", src: getImageSrc("masken-34"), alt: "BF Masken 34", category: "masken" as Category },
    { id: "masken-35", src: getImageSrc("masken-35"), alt: "BF Masken 35", category: "masken" as Category },
    { id: "masken-36", src: getImageSrc("masken-36"), alt: "BF Masken 36", category: "masken" as Category },
    { id: "masken-37", src: getImageSrc("masken-37"), alt: "BF Masken 37", category: "masken" as Category },
    { id: "masken-38", src: getImageSrc("masken-38"), alt: "BF Masken 38", category: "masken" as Category },
    { id: "masken-39", src: getImageSrc("masken-39"), alt: "BF Masken 39", category: "masken" as Category },
    { id: "masken-40", src: getImageSrc("masken-40"), alt: "BF Masken 40", category: "masken" as Category },
    { id: "masken-41", src: getImageSrc("masken-41"), alt: "BF Masken 41", category: "masken" as Category },
    { id: "masken-42", src: getImageSrc("masken-42"), alt: "BF Masken 42", category: "masken" as Category },
    { id: "masken-43", src: getImageSrc("masken-43"), alt: "BF Masken 43", category: "masken" as Category },
    { id: "masken-44", src: getImageSrc("masken-44"), alt: "BF Masken 44", category: "masken" as Category },
    { id: "masken-45", src: getImageSrc("masken-45"), alt: "BF Masken 45", category: "masken" as Category },
    { id: "masken-46", src: getImageSrc("masken-46"), alt: "BF Masken 46", category: "masken" as Category },
    { id: "masken-47", src: getImageSrc("masken-47"), alt: "BF Masken 47", category: "masken" as Category },
    { id: "masken-48", src: getImageSrc("masken-48"), alt: "BF Masken 48", category: "masken" as Category },
    { id: "masken-49", src: getImageSrc("masken-49"), alt: "BF Masken 49", category: "masken" as Category },
    { id: "masken-50", src: getImageSrc("masken-50"), alt: "BF Masken 50", category: "masken" as Category },
    { id: "masken-51", src: getImageSrc("masken-51"), alt: "BF Masken 51", category: "masken" as Category },
    { id: "masken-52", src: getImageSrc("masken-52"), alt: "BF Masken 52", category: "masken" as Category },
    { id: "masken-53", src: getImageSrc("masken-53"), alt: "BF Masken 53", category: "masken" as Category },
    { id: "masken-54", src: getImageSrc("masken-54"), alt: "BFK Masken 54", category: "masken" as Category },
    
    // Skulpturen
    // Note: 00-hero.png is used as hero image but excluded from gallery display
    { id: "skulptur-01", src: getImageSrc("skulptur-01"), alt: "Cavallo (Ton) h30cm", category: "skulpturen" as Category },
    { id: "skulptur-02", src: getImageSrc("skulptur-02"), alt: "Sonnenmann (Ton) h20cm", category: "skulpturen" as Category },
    { id: "skulptur-03", src: getImageSrc("skulptur-03"), alt: "Lama (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-04", src: getImageSrc("skulptur-04"), alt: "Ziege (Ton) h10cm", category: "skulpturen" as Category },
    { id: "skulptur-05", src: getImageSrc("skulptur-05"), alt: "Ulli (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-06", src: getImageSrc("skulptur-06"), alt: "Goettin (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-07", src: getImageSrc("skulptur-07"), alt: "Erschrockene Frau (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-08", src: getImageSrc("skulptur-08"), alt: "Stier (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-09", src: getImageSrc("skulptur-09"), alt: "Kultischer Stier (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-10", src: getImageSrc("skulptur-10"), alt: "Zorniges Pferd (Ton) h20cm", category: "skulpturen" as Category },
    { id: "skulptur-11", src: getImageSrc("skulptur-11"), alt: "Venus von Willendorf (Ton) h20cm", category: "skulpturen" as Category },

    // Atelier
    { id: "atelier-01", src: getImageSrc("atelier-01"), alt: "Ziege (Ton) h10cm", category: "atelier" as Category },
    { id: "atelier-02", src: getImageSrc("atelier-02"), alt: "Sonnenmann Schatten (Ton) h20cm", category: "atelier" as Category },
    { id: "atelier-03", src: getImageSrc("atelier-03"), alt: "Ziege Gebrannt (Ton) h10cm", category: "atelier" as Category },
    { id: "atelier-04", src: getImageSrc("atelier-04"), alt: "Lama (Ton) h15cm", category: "atelier" as Category },
    { id: "atelier-05", src: getImageSrc("atelier-05"), alt: "Sonnenmann Schatten (Ton) h20cm", category: "atelier" as Category },
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
          title: t.descriptions.alle.title,
          description: t.descriptions.alle.description,
          headerImage: getImageSrc("zeichnung-22")
        };
      case "zeichnungen":
        return {
          title: t.descriptions.zeichnungen.title,
          description: t.descriptions.zeichnungen.description,
          headerImage: getImageSrc("zeichnungenHeader")
        };
      case "masken":
        return {
          title: t.descriptions.masken.title,
          description: t.descriptions.masken.description,
          headerImage: maskenHero
        };
      case "skulpturen":
        return {
          title: t.descriptions.skulpturen.title,
          description: t.descriptions.skulpturen.description,
          headerImage: getImageSrc("skulpturenHero")
        };
      case "atelier":
        return {
          title: t.descriptions.atelier.title,
          description: t.descriptions.atelier.description,
          headerImage: "/Atelier-05-Sonnenmann_Schatten(Ton)_h20cm.jpg"
        };
      default:
        return {
          title: t.descriptions.alle.title,
          description: t.descriptions.alle.description,
          headerImage: "/placeholder.svg"
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

      {/* Filter Navigation - Duplicate above footer */}
      <div className="mb-12 border-t border-b border-border pt-6 pb-6">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {(["alle", "zeichnungen", "masken", "skulpturen", "atelier"] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
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
      </div>

      <footer className="bg-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <a href="/impressum" className="hover:text-foreground transition-colors">
              {t.footer.impressum}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;