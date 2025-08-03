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

// Import zeichnungen images
import zeichnung01 from "@/assets/zeichnungen/01-Bon Jovi (Graphit) DIN A1.jpg";
import zeichnung02 from "@/assets/zeichnungen/02-Vulkan (Acryl) 40x40cm.jpg";
import zeichnung03 from "@/assets/zeichnungen/03-Gargouilles (Filzstift) DIN A4.jpg";
import zeichnung04 from "@/assets/zeichnungen/04-Gargouilles 2 (Graphit) DIN A4.jpg";
import zeichnung05 from "@/assets/zeichnungen/05-Zeitmaschine II (Acryl- Mischtechnik) DIN A4.jpg";
import zeichnung06 from "@/assets/zeichnungen/06-Picasso (Graphit) DIN A3.jpg";
import zeichnung07 from "@/assets/zeichnungen/07-Struktur mit Kugel (Graphit) DIN A4.jpg";
import zeichnung08 from "@/assets/zeichnungen/08-Kurt Cobain (Graphit) A1.jpg";
import zeichnung09 from "@/assets/zeichnungen/09-Beaucet VII (Feder tusche) DIN A4.jpg";
import zeichnung10 from "@/assets/zeichnungen/10-Herbst (Graphit) DIN A6.jpeg";
import zeichnung11 from "@/assets/zeichnungen/11-Beaucet I (Graphit) DIN A4.jpg";
import zeichnung12 from "@/assets/zeichnungen/12-Beaucet II (Graphit) DIN A4.jpg";
import zeichnung13 from "@/assets/zeichnungen/13-Sator-Maske II ( Ton Kupfer Leder) 15x50cm.jpg";
import zeichnung14 from "@/assets/zeichnungen/14-Bob Dylan (Oil) 150x150cm.jpg";
import zeichnung15 from "@/assets/zeichnungen/15-alter Mann 1 (Graphit) DIN A4.jpg";
import zeichnung16 from "@/assets/zeichnungen/16-Jonathan (4Jahre) (Graphit) DIN A4.jpg";
import zeichnung17 from "@/assets/zeichnungen/17-Venasque (Aquarell) DIN A4.jpg";
import zeichnung18 from "@/assets/zeichnungen/18-Jack Nickolson (Graphit) DIN A1.jpg";
import zeichnung19 from "@/assets/zeichnungen/19-Das fliegende Ei (Akryl) DIN A4.jpg";
import zeichnung20 from "@/assets/zeichnungen/20-Iggi Pop (Graphit) DIN A1.jpg";
import zeichnung21 from "@/assets/zeichnungen/21-ouvre la port! (Graphit) DIN A7.jpg";
import zeichnung22 from "@/assets/zeichnungen/22-Cien Mechant (Graphit) DIN A1.jpg";
import zeichnung23 from "@/assets/zeichnungen/23-afri-cola (Tusche) DIN A4.jpg";
import zeichnung24 from "@/assets/zeichnungen/24-Beaucet III (Graphit) DIN A4.jpg";
import zeichnung25 from "@/assets/zeichnungen/25-Ueber den Daechern von Paris 1978 (Kugelschreiber)15x15cm.jpg";
import zeichnung26 from "@/assets/zeichnungen/26-alter Mann 2 (Graphit) DIN A4.jpg";
import zeichnung27 from "@/assets/zeichnungen/27-Das ueberraschte Rot (Acryl) DIN A4.jpg";
import zeichnung28 from "@/assets/zeichnungen/28-Liegender Akt (Graphit) DIN A1.jpg";
import zeichnung29 from "@/assets/zeichnungen/29-C2-C4 (Acryl 3D) DIN A4.jpg";
import zeichnung30 from "@/assets/zeichnungen/30-Zwischen-Rot (Lithographie) DIN A3.jpg";
import zeichnung31 from "@/assets/zeichnungen/31-Bleistift 366 (Graphit) DIN A4.jpg";
import zeichnung32 from "@/assets/zeichnungen/32-Der Matrose (Tusche) DIN A2.jpg";
import zeichnung33 from "@/assets/zeichnungen/33-Luzifer (Acryl) DIN A4.jpg";
import zeichnung34 from "@/assets/zeichnungen/34-Chaise long (Pastell) DIN A3.jpg";
import zeichnung35 from "@/assets/zeichnungen/35-Sator-Maske I (Ton Kupfer Leder) 15x40cm.jpg";
import zeichnung36 from "@/assets/zeichnungen/36-Zeitmaschine I (Acryl-Mischtechnik) DIN A4.jpg";
import zeichnung37 from "@/assets/zeichnungen/37-Beaucet VIII Detail (Graphit) DIN A4.jpg";
import zeichnung38 from "@/assets/zeichnungen/38-Papi (Graphit) DIN A4.jpg";
import zeichnung39 from "@/assets/zeichnungen/39-Methamis (Tusche) DIN A 4.jpg";
import zeichnung40 from "@/assets/zeichnungen/40-Beaucet IV (Graphit) DIN A4.jpg";
import zeichnung41 from "@/assets/zeichnungen/41-Venasque (Graphit) DIN A4.jpg";
import zeichnung42 from "@/assets/zeichnungen/42-Beaucet VI (Graphit) DIN A4.jpg";

// Import masken images
import masken01 from "@/assets/masken/01-BF-Masken.jpg";
import masken02 from "@/assets/masken/02-BF-Masken.jpg";
import masken03 from "@/assets/masken/03-BF-Masken.jpg";
import masken04 from "@/assets/masken/04-BF-Masken.jpg";
import masken05 from "@/assets/masken/05-BF-Masken.jpg";
import masken06 from "@/assets/masken/06-BF-Masken.jpg";
import masken07 from "@/assets/masken/07-BF-Masken.jpg";
import masken08 from "@/assets/masken/08-BF-Masken.jpg";
import masken09 from "@/assets/masken/09-BF-Masken.jpg";
import masken10 from "@/assets/masken/10-BF-Masken.jpg";
import masken11 from "@/assets/masken/11-BF-Masken.jpg";
import masken12 from "@/assets/masken/12-BF-Masken.jpg";
import masken13 from "@/assets/masken/13-BF-Masken.jpg";
import masken14 from "@/assets/masken/14-BF-Masken.jpg";
import masken15 from "@/assets/masken/15-BF-Masken.jpg";
import masken16 from "@/assets/masken/16-BF-Masken.jpg";
import masken17 from "@/assets/masken/17-BF-Masken.jpg";
import masken18 from "@/assets/masken/18-BF-Masken.jpg";
import masken19 from "@/assets/masken/19-BF-Masken.jpg";
import masken20 from "@/assets/masken/20-BF-Masken.jpg";
import masken21 from "@/assets/masken/21-BF-Masken.jpg";
import masken22 from "@/assets/masken/22-BF-Masken.jpg";
import masken23 from "@/assets/masken/23-BF-Masken.jpg";
import masken24 from "@/assets/masken/24-BF-Masken.jpg";
import masken25 from "@/assets/masken/25-BF-Masken.jpg";
import masken26 from "@/assets/masken/26-BF-Masken.jpg";
import masken27 from "@/assets/masken/27-BF-Masken.jpg";
import masken28 from "@/assets/masken/28-BF-Masken.jpg";
import masken29 from "@/assets/masken/29-BF-Masken.jpg";
import masken30 from "@/assets/masken/30-BF-Masken.jpg";
import masken31 from "@/assets/masken/31-BF-Masken.jpg";
import masken32 from "@/assets/masken/32-BF-Masken.jpg";
import masken33 from "@/assets/masken/33-BF-Masken.jpg";
import masken34 from "@/assets/masken/34-BF_Masken.jpg";
import masken35 from "@/assets/masken/35-BF_Masken.jpg";
import masken36 from "@/assets/masken/36-BF_Masken.jpg";
import masken37 from "@/assets/masken/37-BF_Masken.jpg";
import masken38 from "@/assets/masken/38-BF_Masken.jpg";
import masken39 from "@/assets/masken/39-BF_Masken.jpg";
import masken40 from "@/assets/masken/40-BF_Masken.jpg";
import masken41 from "@/assets/masken/41-BF_Masken.jpg";
import masken42 from "@/assets/masken/42-BF_Masken.jpg";
import masken43 from "@/assets/masken/43-BF_Masken.jpg";
import masken44 from "@/assets/masken/44-BF_Masken.jpg";
import masken45 from "@/assets/masken/45-BF_Masken.jpg";
import masken46 from "@/assets/masken/46-BF_Masken.jpg";
import masken47 from "@/assets/masken/47-BF_Masken.jpg";
import masken48 from "@/assets/masken/48-BF_Masken.jpg";
import masken49 from "@/assets/masken/49-BF_Masken.jpg";
import masken50 from "@/assets/masken/50-BF_Masken.jpg";
import masken51 from "@/assets/masken/51-BF_Masken.jpg";
import masken52 from "@/assets/masken/52-BF_Masken.jpg";
import masken53 from "@/assets/masken/53-BF_Masken.jpg";
import masken54 from "@/assets/masken/54-BFK_Masken.jpg";

// Import skulpturen images
import skulptur01 from "@/assets/skulpturen/01-Cavallo (Ton) h30cm.jpg";
import skulptur02 from "@/assets/skulpturen/02-Sonnenmann (Ton) h20cm.jpg";
import skulptur03 from "@/assets/skulpturen/03-Lama (Ton) h15cm.jpg";
import skulptur04 from "@/assets/skulpturen/04-Ziege (Ton) h10cm.jpg";
import skulptur05 from "@/assets/skulpturen/05-Ulli (Ton) h15cm.jpg";
import skulptur06 from "@/assets/skulpturen/06-Mono (Ton) h15cm.jpg";
import skulptur07 from "@/assets/skulpturen/07-Mensch (Ton) h15cm.jpg";
import skulptur08 from "@/assets/skulpturen/08-Stier (Ton) h15cm.jpg";

// Import atelier images
import atelier01 from "@/assets/atelier/01-Ziege (Ton) h10cm.jpg";
import atelier02 from "@/assets/atelier/02-Sonnenmann Schatten (Ton) h20cm.jpg";

// Using external URL for masken hero image
const maskenHero = "https://bernwardfruebis-kunst.de/images/galerie/galerie_web_01.jpg";

type Category = "alle" | "zeichnungen" | "masken" | "skulpturen" | "atelier";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("alle");

  // Combined artwork data with categories
  const allArtworks = [
    // Zeichnungen
    { id: "zeichnung-01", src: zeichnung01, alt: "Bon Jovi (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-02", src: zeichnung02, alt: "Vulkan (Acryl) 40x40cm", category: "zeichnungen" as Category },
    { id: "zeichnung-03", src: zeichnung03, alt: "Gargouilles (Filzstift) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-04", src: zeichnung04, alt: "Gargouilles 2 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-05", src: zeichnung05, alt: "Zeitmaschine II (Acryl- Mischtechnik) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-06", src: zeichnung06, alt: "Picasso (Graphit) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-07", src: zeichnung07, alt: "Struktur mit Kugel (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-08", src: zeichnung08, alt: "Kurt Cobain (Graphit) A1", category: "zeichnungen" as Category },
    { id: "zeichnung-09", src: zeichnung09, alt: "Beaucet VII (Feder tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-10", src: zeichnung10, alt: "Herbst (Graphit) DIN A6", category: "zeichnungen" as Category },
    { id: "zeichnung-11", src: zeichnung11, alt: "Beaucet I (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-12", src: zeichnung12, alt: "Beaucet II (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-13", src: zeichnung13, alt: "Sator-Maske II (Ton Kupfer Leder) 15x50cm", category: "zeichnungen" as Category },
    { id: "zeichnung-14", src: zeichnung14, alt: "Bob Dylan (Oil) 150x150cm", category: "zeichnungen" as Category },
    { id: "zeichnung-15", src: zeichnung15, alt: "alter Mann 1 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-16", src: zeichnung16, alt: "Jonathan (4Jahre) (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-17", src: zeichnung17, alt: "Venasque (Aquarell) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-18", src: zeichnung18, alt: "Jack Nickolson (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-19", src: zeichnung19, alt: "Das fliegende Ei (Akryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-20", src: zeichnung20, alt: "Iggi Pop (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-21", src: zeichnung21, alt: "ouvre la port! (Graphit) DIN A7", category: "zeichnungen" as Category },
    { id: "zeichnung-22", src: zeichnung22, alt: "Cien Mechant (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-23", src: zeichnung23, alt: "afri-cola (Tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-24", src: zeichnung24, alt: "Beaucet III (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-25", src: zeichnung25, alt: "Ueber den Daechern von Paris 1978 (Kugelschreiber) 15x15cm", category: "zeichnungen" as Category },
    { id: "zeichnung-26", src: zeichnung26, alt: "alter Mann 2 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-27", src: zeichnung27, alt: "Das ueberraschte Rot (Acryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-28", src: zeichnung28, alt: "Liegender Akt (Graphit) DIN A1", category: "zeichnungen" as Category },
    { id: "zeichnung-29", src: zeichnung29, alt: "C2-C4 (Acryl 3D) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-30", src: zeichnung30, alt: "Zwischen-Rot (Lithographie) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-31", src: zeichnung31, alt: "Bleistift 366 (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-32", src: zeichnung32, alt: "Der Matrose (Tusche) DIN A2", category: "zeichnungen" as Category },
    { id: "zeichnung-33", src: zeichnung33, alt: "Luzifer (Acryl) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-34", src: zeichnung34, alt: "Chaise long (Pastell) DIN A3", category: "zeichnungen" as Category },
    { id: "zeichnung-35", src: zeichnung35, alt: "Sator-Maske I (Ton Kupfer Leder) 15x40cm", category: "zeichnungen" as Category },
    { id: "zeichnung-36", src: zeichnung36, alt: "Zeitmaschine I (Acryl-Mischtechnik) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-37", src: zeichnung37, alt: "Beaucet VIII Detail (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-38", src: zeichnung38, alt: "Papi (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-39", src: zeichnung39, alt: "Methamis (Tusche) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-40", src: zeichnung40, alt: "Beaucet IV (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-41", src: zeichnung41, alt: "Venasque (Graphit) DIN A4", category: "zeichnungen" as Category },
    { id: "zeichnung-42", src: zeichnung42, alt: "Beaucet VI (Graphit) DIN A4", category: "zeichnungen" as Category },
    
    // Masken
    { id: "masken-01", src: masken01, alt: "BF Masken 01", category: "masken" as Category },
    { id: "masken-02", src: masken02, alt: "BF Masken 02", category: "masken" as Category },
    { id: "masken-03", src: masken03, alt: "BF Masken 03", category: "masken" as Category },
    { id: "masken-04", src: masken04, alt: "BF Masken 04", category: "masken" as Category },
    { id: "masken-05", src: masken05, alt: "BF Masken 05", category: "masken" as Category },
    { id: "masken-06", src: masken06, alt: "BF Masken 06", category: "masken" as Category },
    { id: "masken-07", src: masken07, alt: "BF Masken 07", category: "masken" as Category },
    { id: "masken-08", src: masken08, alt: "BF Masken 08", category: "masken" as Category },
    { id: "masken-09", src: masken09, alt: "BF Masken 09", category: "masken" as Category },
    { id: "masken-10", src: masken10, alt: "BF Masken 10", category: "masken" as Category },
    { id: "masken-11", src: masken11, alt: "BF Masken 11", category: "masken" as Category },
    { id: "masken-12", src: masken12, alt: "BF Masken 12", category: "masken" as Category },
    { id: "masken-13", src: masken13, alt: "BF Masken 13", category: "masken" as Category },
    { id: "masken-14", src: masken14, alt: "BF Masken 14", category: "masken" as Category },
    { id: "masken-15", src: masken15, alt: "BF Masken 15", category: "masken" as Category },
    { id: "masken-16", src: masken16, alt: "BF Masken 16", category: "masken" as Category },
    { id: "masken-17", src: masken17, alt: "BF Masken 17", category: "masken" as Category },
    { id: "masken-18", src: masken18, alt: "BF Masken 18", category: "masken" as Category },
    { id: "masken-19", src: masken19, alt: "BF Masken 19", category: "masken" as Category },
    { id: "masken-20", src: masken20, alt: "BF Masken 20", category: "masken" as Category },
    { id: "masken-21", src: masken21, alt: "BF Masken 21", category: "masken" as Category },
    { id: "masken-22", src: masken22, alt: "BF Masken 22", category: "masken" as Category },
    { id: "masken-23", src: masken23, alt: "BF Masken 23", category: "masken" as Category },
    { id: "masken-24", src: masken24, alt: "BF Masken 24", category: "masken" as Category },
    { id: "masken-25", src: masken25, alt: "BF Masken 25", category: "masken" as Category },
    { id: "masken-26", src: masken26, alt: "BF Masken 26", category: "masken" as Category },
    { id: "masken-27", src: masken27, alt: "BF Masken 27", category: "masken" as Category },
    { id: "masken-28", src: masken28, alt: "BF Masken 28", category: "masken" as Category },
    { id: "masken-29", src: masken29, alt: "BF Masken 29", category: "masken" as Category },
    { id: "masken-30", src: masken30, alt: "BF Masken 30", category: "masken" as Category },
    { id: "masken-31", src: masken31, alt: "BF Masken 31", category: "masken" as Category },
    { id: "masken-32", src: masken32, alt: "BF Masken 32", category: "masken" as Category },
    { id: "masken-33", src: masken33, alt: "BF Masken 33", category: "masken" as Category },
    { id: "masken-34", src: masken34, alt: "BF Masken 34", category: "masken" as Category },
    { id: "masken-35", src: masken35, alt: "BF Masken 35", category: "masken" as Category },
    { id: "masken-36", src: masken36, alt: "BF Masken 36", category: "masken" as Category },
    { id: "masken-37", src: masken37, alt: "BF Masken 37", category: "masken" as Category },
    { id: "masken-38", src: masken38, alt: "BF Masken 38", category: "masken" as Category },
    { id: "masken-39", src: masken39, alt: "BF Masken 39", category: "masken" as Category },
    { id: "masken-40", src: masken40, alt: "BF Masken 40", category: "masken" as Category },
    { id: "masken-41", src: masken41, alt: "BF Masken 41", category: "masken" as Category },
    { id: "masken-42", src: masken42, alt: "BF Masken 42", category: "masken" as Category },
    { id: "masken-43", src: masken43, alt: "BF Masken 43", category: "masken" as Category },
    { id: "masken-44", src: masken44, alt: "BF Masken 44", category: "masken" as Category },
    { id: "masken-45", src: masken45, alt: "BF Masken 45", category: "masken" as Category },
    { id: "masken-46", src: masken46, alt: "BF Masken 46", category: "masken" as Category },
    { id: "masken-47", src: masken47, alt: "BF Masken 47", category: "masken" as Category },
    { id: "masken-48", src: masken48, alt: "BF Masken 48", category: "masken" as Category },
    { id: "masken-49", src: masken49, alt: "BF Masken 49", category: "masken" as Category },
    { id: "masken-50", src: masken50, alt: "BF Masken 50", category: "masken" as Category },
    { id: "masken-51", src: masken51, alt: "BF Masken 51", category: "masken" as Category },
    { id: "masken-52", src: masken52, alt: "BF Masken 52", category: "masken" as Category },
    { id: "masken-53", src: masken53, alt: "BF Masken 53", category: "masken" as Category },
    { id: "masken-54", src: masken54, alt: "BFK Masken 54", category: "masken" as Category },
    
    // Skulpturen
    { id: "skulptur-01", src: skulptur01, alt: "Cavallo (Ton) h30cm", category: "skulpturen" as Category },
    { id: "skulptur-02", src: skulptur02, alt: "Sonnenmann (Ton) h20cm", category: "skulpturen" as Category },
    { id: "skulptur-03", src: skulptur03, alt: "Lama (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-04", src: skulptur04, alt: "Ziege (Ton) h10cm", category: "skulpturen" as Category },
    { id: "skulptur-05", src: skulptur05, alt: "Ulli (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-06", src: skulptur06, alt: "Mono (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-07", src: skulptur07, alt: "Mensch (Ton) h15cm", category: "skulpturen" as Category },
    { id: "skulptur-08", src: skulptur08, alt: "Stier (Ton) h15cm", category: "skulpturen" as Category },

    // Atelier
    { id: "atelier-01", src: atelier01, alt: "Ziege (Ton) h10cm", category: "atelier" as Category },
    { id: "atelier-02", src: atelier02, alt: "Sonnenmann Schatten (Ton) h20cm", category: "atelier" as Category },
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
          headerImage: zeichnung41
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
      case "atelier":
        return {
          title: "ATELIER",
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