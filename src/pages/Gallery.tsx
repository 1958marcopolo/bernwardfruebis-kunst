import { useState } from "react";
import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";

// Using external URL for masken hero image
const maskenHero = "https://bernwardfruebis-kunst.de/images/galerie/galerie_web_01.jpg";

type Category = "alle" | "zeichnungen" | "masken" | "skulpturen" | "atelier";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("alle");

  // Combined artwork data with categories
  const allArtworks = [
    // Zeichnungen
    { id: "zeichnung-01", src: "/zeichnungen/01-Bon Jovi (Graphit) DIN A1.jpg", alt: "Bon Jovi (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-02", src: "/zeichnungen/02-Vulkan (Acryl) 40x40cm.jpg", alt: "Vulkan (Acryl) 40x40cm", category: "zeichnungen" as Category },
    { id: "zeichnung-03", src: "/zeichnungen/03-Gargouilles (Filzstift) DIN A4.jpg", alt: "Gargouilles (Filzstift) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-04", src: "/zeichnungen/04-Gargouilles 2 (Graphit) DIN A4.jpg", alt: "Gargouilles 2 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-05", src: "/zeichnungen/05-Zeitmaschine II (Acryl- Mischtechnik) DIN A4.jpg", alt: "Zeitmaschine II (Acryl- Mischtechnik) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-06", src: "/zeichnungen/06-Picasso (Graphit) DIN A3.jpg", alt: "Picasso (Graphit) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-07", src: "/zeichnungen/07-Struktur mit Kugel (Graphit) DIN A4.jpg", alt: "Struktur mit Kugel (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-08", src: "/zeichnungen/08-Kurt Cobain (Graphit) A1.jpg", alt: "Kurt Cobain (Graphit) A1", category: "zeichnungen" as Category },
    { id: "zeichnung-09", src: "/zeichnungen/09-Beaucet VII (Feder tusche) DIN A4.jpg", alt: "Beaucet VII (Feder tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-10", src: "/zeichnungen/10-Herbst (Graphit) DIN A6.jpeg", alt: "Herbst (Graphit) DIN A6", category: "zeichnungen" as Category },
    { id: "zeichnung-11", src: "/zeichnungen/11-Beaucet I (Graphit) DIN A4.jpg", alt: "Beaucet I (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-12", src: "/zeichnungen/12-Beaucet II (Graphit) DIN A4.jpg", alt: "Beaucet II (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-13", src: "/zeichnungen/13-Sator-Maske II ( Ton Kupfer Leder) 15x50cm.jpg", alt: "Sator-Maske II (Ton Kupfer Leder) 15x50cm", category: "zeichnungen" as Category },
    { id: "zeichnung-14", src: "/zeichnungen/14-Bob Dylan (Oil) 150x150cm.jpg", alt: "Bob Dylan (Oil) 150x150cm", category: "zeichnungen" as Category },
    { id: "zeichnung-15", src: "/zeichnungen/15-alter Mann 1 (Graphit) DIN A4.jpg", alt: "alter Mann 1 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-16", src: "/zeichnungen/16-Jonathan (4Jahre) (Graphit) DIN A4.jpg", alt: "Jonathan (4Jahre) (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-17", src: "/zeichnungen/17-Venasque (Aquarell) DIN A4.jpg", alt: "Venasque (Aquarell) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-18", src: "/zeichnungen/18-Jack Nickolson (Graphit) DIN A1.jpg", alt: "Jack Nickolson (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-19", src: "/zeichnungen/19-Das fliegende Ei (Akryl) DIN A4.jpg", alt: "Das fliegende Ei (Akryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-20", src: "/zeichnungen/20-Iggi Pop (Graphit) DIN A1.jpg", alt: "Iggi Pop (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-21", src: "/zeichnungen/21-ouvre la port! (Graphit) DIN A7.jpg", alt: "ouvre la port! (Graphit) DIN A7", category: "zeichnungen" as Category },
    { id: "zeichnung-22", src: "/zeichnungen/22-Chien Mechant (Graphit) DIN A1.jpg", alt: "Chien Mechant (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-23", src: "/zeichnungen/23-afri-cola (Tusche) DIN A4.jpg", alt: "afri-cola (Tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-24", src: "/zeichnungen/24-Beaucet III (Graphit) DIN A4.jpg", alt: "Beaucet III (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-25", src: "/zeichnungen/25-Ueber den Daechern von Paris 1978 (Kugelschreiber)15x15cm.jpg", alt: "Ueber den Daechern von Paris 1978 (Kugelschreiber) 15x15cm", category: "zeichnungen" as Category },
    { id: "zeichnung-26", src: "/zeichnungen/26-alter Mann 2 (Graphit) DIN A4.jpg", alt: "alter Mann 2 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-27", src: "/zeichnungen/27-Das ueberraschte Rot (Acryl) DIN A4.jpg", alt: "Das ueberraschte Rot (Acryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-28", src: "/zeichnungen/28-Liegender Akt (Graphit) DIN A1.jpg", alt: "Liegender Akt (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-29", src: "/zeichnungen/29-C2-C4 (Acryl 3D) DIN A4.jpg", alt: "C2-C4 (Acryl 3D) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-30", src: "/zeichnungen/30-Zwischen-Rot (Lithographie) DIN A3.jpg", alt: "Zwischen-Rot (Lithographie) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-31", src: "/zeichnungen/31-Bleistift 366 (Graphit) DIN A4.jpg", alt: "Bleistift 366 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-32", src: "/zeichnungen/32-Der Matrose (Tusche) DIN A2.jpg", alt: "Der Matrose (Tusche) DIN A2", category: "zeichnungen" as Category },
    { id: "zeichnung-33", src: "/zeichnungen/33-Luzifer (Acryl) DIN A4.jpg", alt: "Luzifer (Acryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-34", src: "/zeichnungen/34-Chaise long (Pastell) DIN A3.jpg", alt: "Chaise long (Pastell) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-35", src: "/zeichnungen/35-Sator-Maske I (Ton Kupfer Leder) 15x40cm.jpg", alt: "Sator-Maske I (Ton Kupfer Leder) 15x40cm", category: "zeichnungen" as Category },
    { id: "zeichnung-36", src: "/zeichnungen/36-Zeitmaschine I (Acryl-Mischtechnik) DIN A4.jpg", alt: "Zeitmaschine I (Acryl-Mischtechnik) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-37", src: "/zeichnungen/37-Beaucet VIII Detail (Graphit) DIN A4.jpg", alt: "Beaucet VIII Detail (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-38", src: "/zeichnungen/38-Papi (Graphit) DIN A4.jpg", alt: "Papi (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-39", src: "/zeichnungen/39-Methamis (Tusche) DIN A 4.jpg", alt: "Methamis (Tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-40", src: "/zeichnungen/40-Beaucet IV (Graphit) DIN A4.jpg", alt: "Beaucet IV (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-41", src: "/zeichnungen/41-Venasque (Graphit) DIN A4.jpg", alt: "Venasque (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-42", src: "/zeichnungen/42-Beaucet VI (Graphit) DIN A4.jpg", alt: "Beaucet VI (Graphit) DIN A4", category: "zeichnungen" as Category },
    
    // Masken
    { id: "masken-01", src: "/masken/01-BF-Masken.jpg", alt: "BF Masken 01", category: "masken" as Category },
    { id: "masken-02", src: "/masken/02-BF-Masken.jpg", alt: "BF Masken 02", category: "masken" as Category },
    { id: "masken-03", src: "/masken/03-BF-Masken.jpg", alt: "BF Masken 03", category: "masken" as Category },
    { id: "masken-04", src: "/masken/04-BF-Masken.jpg", alt: "BF Masken 04", category: "masken" as Category },
    { id: "masken-05", src: "/masken/05-BF-Masken.jpg", alt: "BF Masken 05", category: "masken" as Category },
    { id: "masken-06", src: "/masken/06-BF-Masken.jpg", alt: "BF Masken 06", category: "masken" as Category },
    { id: "masken-07", src: "/masken/07-BF-Masken.jpg", alt: "BF Masken 07", category: "masken" as Category },
    { id: "masken-08", src: "/masken/08-BF-Masken.jpg", alt: "BF Masken 08", category: "masken" as Category },
    { id: "masken-09", src: "/masken/09-BF-Masken.jpg", alt: "BF Masken 09", category: "masken" as Category },
    { id: "masken-10", src: "/masken/10-BF-Masken.jpg", alt: "BF Masken 10", category: "masken" as Category },
    { id: "masken-11", src: "/masken/11-BF-Masken.jpg", alt: "BF Masken 11", category: "masken" as Category },
    { id: "masken-12", src: "/masken/12-BF-Masken.jpg", alt: "BF Masken 12", category: "masken" as Category },
    { id: "masken-13", src: "/masken/13-BF-Masken.jpg", alt: "BF Masken 13", category: "masken" as Category },
    { id: "masken-14", src: "/masken/14-BF-Masken.jpg", alt: "BF Masken 14", category: "masken" as Category },
    { id: "masken-15", src: "/masken/15-BF-Masken.jpg", alt: "BF Masken 15", category: "masken" as Category },
    { id: "masken-16", src: "/masken/16-BF-Masken.jpg", alt: "BF Masken 16", category: "masken" as Category },
    { id: "masken-17", src: "/masken/17-BF-Masken.jpg", alt: "BF Masken 17", category: "masken" as Category },
    { id: "masken-18", src: "/masken/18-BF-Masken.jpg", alt: "BF Masken 18", category: "masken" as Category },
    { id: "masken-19", src: "/masken/19-BF-Masken.jpg", alt: "BF Masken 19", category: "masken" as Category },
    { id: "masken-20", src: "/masken/20-BF-Masken.jpg", alt: "BF Masken 20", category: "masken" as Category },
    { id: "masken-21", src: "/masken/21-BF-Masken.jpg", alt: "BF Masken 21", category: "masken" as Category },
    { id: "masken-22", src: "/masken/22-BF-Masken.jpg", alt: "BF Masken 22", category: "masken" as Category },
    { id: "masken-23", src: "/masken/23-BF-Masken.jpg", alt: "BF Masken 23", category: "masken" as Category },
    { id: "masken-24", src: "/masken/24-BF-Masken.jpg", alt: "BF Masken 24", category: "masken" as Category },
    { id: "masken-25", src: "/masken/25-BF-Masken.jpg", alt: "BF Masken 25", category: "masken" as Category },
    { id: "masken-26", src: "/masken/26-BF-Masken.jpg", alt: "BF Masken 26", category: "masken" as Category },
    { id: "masken-27", src: "/masken/27-BF-Masken.jpg", alt: "BF Masken 27", category: "masken" as Category },
    { id: "masken-28", src: "/masken/28-BF-Masken.jpg", alt: "BF Masken 28", category: "masken" as Category },
    { id: "masken-29", src: "/masken/29-BF-Masken.jpg", alt: "BF Masken 29", category: "masken" as Category },
    { id: "masken-30", src: "/masken/30-BF-Masken.jpg", alt: "BF Masken 30", category: "masken" as Category },
    { id: "masken-31", src: "/masken/31-BF-Masken.jpg", alt: "BF Masken 31", category: "masken" as Category },
    { id: "masken-32", src: "/masken/32-BF-Masken.jpg", alt: "BF Masken 32", category: "masken" as Category },
    { id: "masken-33", src: "/masken/33-BF-Masken.jpg", alt: "BF Masken 33", category: "masken" as Category },
    { id: "masken-34", src: "/masken/34-BF_Masken.jpg", alt: "BF Masken 34", category: "masken" as Category },
    { id: "masken-35", src: "/masken/35-BF_Masken.jpg", alt: "BF Masken 35", category: "masken" as Category },
    { id: "masken-36", src: "/masken/36-BF_Masken.jpg", alt: "BF Masken 36", category: "masken" as Category },
    { id: "masken-37", src: "/masken/37-BF_Masken.jpg", alt: "BF Masken 37", category: "masken" as Category },
    { id: "masken-38", src: "/masken/38-BF_Masken.jpg", alt: "BF Masken 38", category: "masken" as Category },
    { id: "masken-39", src: "/masken/39-BF_Masken.jpg", alt: "BF Masken 39", category: "masken" as Category },
    { id: "masken-40", src: "/masken/40-BF_Masken.jpg", alt: "BF Masken 40", category: "masken" as Category },
    { id: "masken-41", src: "/masken/41-BF_Masken.jpg", alt: "BF Masken 41", category: "masken" as Category },
    { id: "masken-42", src: "/masken/42-BF_Masken.jpg", alt: "BF Masken 42", category: "masken" as Category },
    { id: "masken-43", src: "/masken/43-BF_Masken.jpg", alt: "BF Masken 43", category: "masken" as Category },
    { id: "masken-44", src: "/masken/44-BF_Masken.jpg", alt: "BF Masken 44", category: "masken" as Category },
    { id: "masken-45", src: "/masken/45-BF_Masken.jpg", alt: "BF Masken 45", category: "masken" as Category },
    { id: "masken-46", src: "/masken/46-BF_Masken.jpg", alt: "BF Masken 46", category: "masken" as Category },
    { id: "masken-47", src: "/masken/47-BF_Masken.jpg", alt: "BF Masken 47", category: "masken" as Category },
    { id: "masken-48", src: "/masken/48-BF_Masken.jpg", alt: "BF Masken 48", category: "masken" as Category },
    { id: "masken-49", src: "/masken/49-BF_Masken.jpg", alt: "BF Masken 49", category: "masken" as Category },
    { id: "masken-50", src: "/masken/50-BF_Masken.jpg", alt: "BF Masken 50", category: "masken" as Category },
    { id: "masken-51", src: "/masken/51-BF_Masken.jpg", alt: "BF Masken 51", category: "masken" as Category },
    { id: "masken-52", src: "/masken/52-BF_Masken.jpg", alt: "BF Masken 52", category: "masken" as Category },
    { id: "masken-53", src: "/masken/53-BF_Masken.jpg", alt: "BF Masken 53", category: "masken" as Category },
    { id: "masken-54", src: "/masken/54-BFK_Masken.jpg", alt: "BFK Masken 54", category: "masken" as Category },
    
    // Skulpturen
    // Note: 00-hero.png is used as hero image but excluded from gallery display
    { id: "skulptur-01", src: "/skulpturen/01-Cavallo (Ton) h30cm.jpg", alt: "Cavallo (Ton) h30cm", category: "skulpturen" as Category },
    { id: "skulptur-02", src: "/skulpturen/02-Sonnenmann (Ton) h20cm.jpg", alt: "Sonnenmann (Ton) h20cm", category: "skulpturen" as Category },
    { id: "skulptur-03", src: "/skulpturen/03-Lama (Ton) h15cm.jpg", alt: "Lama (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-04", src: "/skulpturen/04-Ziege (Ton) h10cm.jpg", alt: "Ziege (Ton) h10cm", category: "skulpturen" as Category },
    { id: "skulptur-05", src: "/skulpturen/05-Ulli (Ton) h15cm.jpg", alt: "Ulli (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-06", src: "/skulpturen/06-Goettin (Ton) h15cm.jpg", alt: "Goettin (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-07", src: "/skulpturen/07-Erschrockene Frau (Ton) h15cm.jpg", alt: "Erschrockene Frau (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-08", src: "/skulpturen/08-Stier (Ton) h15cm.jpg", alt: "Stier (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-09", src: "/skulpturen/09-Kultischer Stier (Ton) h15cm.jpg", alt: "Kultischer Stier (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-10", src: "/skulpturen/10-Zorniges Pferd (Ton) h20cm.jpg", alt: "Zorniges Pferd (Ton) h20cm", category: "skulpturen" as Category },

    // Atelier
    { id: "atelier-01", src: "/atelier/01-Ziege (Ton) h10cm.jpg", alt: "Ziege (Ton) h10cm", category: "atelier" as Category },
    { id: "atelier-02", src: "/atelier/02-Sonnenmann Schatten(Ton) h20cm.jpg", alt: "Sonnenmann Schatten (Ton) h20cm", category: "atelier" as Category },
    { id: "atelier-03", src: "/atelier/03-Ziege Gebrannt (Ton) h10cm.jpg", alt: "Ziege Gebrannt (Ton) h10cm", category: "atelier" as Category },
    { id: "atelier-04", src: "/atelier/04-Lama (Ton) h15cm.jpg", alt: "Lama (Ton) h15cm", category: "atelier" as Category },
    { id: "atelier-05", src: "/atelier/05-Sonnenmann Schatten(Ton) h20cm.jpg", alt: "Sonnenmann Schatten (Ton) h20cm", category: "atelier" as Category },
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
          title: "",
          description: "",
          headerImage: "/zeichnungen/22-Chien Mechant (Graphit) DIN A1.jpg"
        };
      case "zeichnungen":
        return {
          title: "ZEICHNUNGEN",
          description: "Vielfältige künstlerische Ausdrucksformen in verschiedenen Medien und Techniken",
          headerImage: "/zeichnungen/31-Bleistift 366 (Graphit) DIN A4.jpg"
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
          headerImage: "/skulpturen/00-hero.png"
        };
      case "atelier":
        return {
          title: "ATELIER",
          description: "Einblicke in den kreativen Prozess und die Entstehung der Kunstwerke",
          headerImage: "/atelier/02-Sonnenmann Schatten(Ton) h20cm.jpg"
        };
      default:
        return {
          title: "ALLE ARBEITEN",
          description: "Eine Übersicht aller künstlerischen Arbeiten von Bernward Frübis",
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