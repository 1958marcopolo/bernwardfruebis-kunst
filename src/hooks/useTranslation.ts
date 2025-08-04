import { useState, useEffect, createContext, useContext } from 'react';

export interface Translations {
  // Navigation
  navigation: {
    about: string;
    contact: string;
  };
  
  // Gallery categories
  categories: {
    alle: string;
    zeichnungen: string;
    masken: string;
    skulpturen: string;
    atelier: string;
  };
  
  // Gallery descriptions
  descriptions: {
    alle: {
      title: string;
      description: string;
    };
    zeichnungen: {
      title: string;
      description: string;
    };
    masken: {
      title: string;
      description: string;
    };
    skulpturen: {
      title: string;
      description: string;
    };
    atelier: {
      title: string;
      description: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
    impressum: string;
  };
  
  // About page
  about: {
    title: string;
    personalInfo: string;
    biography: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
      paragraph5: string;
    };
  };
  
  // Contact page
  contact: {
    title: string;
    address: string;
    contactData: string;
    inquiries: string;
    inquiriesText: string;
    availableServices: string;
    services: {
      pottery: string;
      drawing: string;
      portfolio: string;
      consulting: string;
      commissions: string;
      exhibitions: string;
    };
    email: string;
    mobile: string;
  };
  
  // Gallery modal
  modal: {
    of: string;
    closeGallery: string;
    previousImage: string;
    nextImage: string;
  };
}

const germanTranslations: Translations = {
  navigation: {
    about: 'ÜBER MICH',
    contact: 'KONTAKT',
  },
  categories: {
    alle: 'ALLE',
    zeichnungen: 'ZEICHNUNGEN',
    masken: 'MASKEN',
    skulpturen: 'SKULPTUREN',
    atelier: 'ATELIER',
  },
  descriptions: {
    alle: {
      title: '"CHIEN MECHANT"',
      description: '84 x 60 cm',
    },
    zeichnungen: {
      title: 'ZEICHNUNGEN',
      description: 'Vielfältige künstlerische Ausdrucksformen in verschiedenen Medien und Techniken',
    },
    masken: {
      title: 'MASKEN',
      description: 'Trotz ihrer starken Reduzierung ist vielen Masken ein menschlicher Wesenszug geblieben, der die Kommunikation mit dem überraschten Betrachter sucht.',
    },
    skulpturen: {
      title: 'SKULPTUREN',
      description: 'Skulpturen springen hervor, treten in die dritte Dimension, erwecken ein Objekt erst richtig zum Leben. Dadurch ist der kreative Prozess ungleich komplexer, als bei jeder Zeichnung oder Malerei. Am Beginn steht ein amorphes Ausgangsmaterial wie Holz, Ton, Marmor oder sonstigen Materialien und letztlich entscheidet nur der pure Wille des Schöpfers in Verbindung mit seinen gestalterischen Fähigkeiten was am Ende daraus entsteht. - Einfach faszinierend.',
    },
    atelier: {
      title: 'ATELIER',
      description: 'Einblicke in den kreativen Prozess und die Entstehung der Kunstwerke',
    },
  },
  footer: {
    copyright: '© 2024 Bernward Frübis. Alle Rechte vorbehalten.',
    impressum: 'IMPRESSUM',
  },
  about: {
    title: 'ZU MEINER PERSON',
    personalInfo: 'ZU MEINER PERSON',
    biography: {
      paragraph1: 'Geboren wurde ich 1958 in Meckenheim in der Pfalz, meine Schulzeit verbrachte ich in St. Blasien im Schwarzwald.',
      paragraph2: 'Aus heutiger Sicht würde ich sagen, dass ich eher ein lausiger Schüler war, gerade in klassischen Fächern, wie Latein oder Mathe. Doch schon damals entdeckte Carlo Pickert, ein ziemlich verrückter Kunstlehrer aus der Schweiz, mein besonderes Auge für Farben und Formen.',
      paragraph3: 'Später studierte ich an der FH Mainz Visuelle Kommunikation bei Prof. Hans F. Krebs und Prof. Gedo Dötterweich. Zu meiner Ausbildung gehörten traditionelle Drucktechniken, wie Lithographie, Kaltnadelradierung, sowie freie Grafik und figurliches Zeichnen.',
      paragraph4: 'In dieser Zeit experimentierte ich auch mit allerlei Spielarten von Monotypie.',
      paragraph5: 'Später habe ich meine Vorliebe zum Zeichnen entdeckt und spüre noch heute jedes mal den Aufbruch, der einem weißen Blatt Papier inne wohnt.'
    }
  },
  contact: {
    title: 'KONTAKT',
    address: 'Anschrift',
    contactData: 'Kontaktdaten',
    inquiries: 'Anfragen',
    inquiriesText: 'Bei Interesse von Galeristen, privaten Kauf/Interessenten oder sonstigen Anregungen können Sie mich gerne per Mail kontaktieren.',
    availableServices: 'Verfügbare Services',
    services: {
      pottery: 'Töpferkurse',
      drawing: 'Zeichen- und Malkurse',
      portfolio: 'Mappenberatung',
      consulting: 'Kunstberatung',
      commissions: 'Auftragsarbeiten',
      exhibitions: 'Galerienausstellungen'
    },
    email: 'E-Mail',
    mobile: 'Mobil'
  },
  modal: {
    of: 'von',
    closeGallery: 'Galerie schließen',
    previousImage: 'Vorheriges Bild',
    nextImage: 'Nächstes Bild',
  },
};

const englishTranslations: Translations = {
  navigation: {
    about: 'ABOUT',
    contact: 'CONTACT',
  },
  categories: {
    alle: 'ALL',
    zeichnungen: 'DRAWINGS',
    masken: 'MASKS',
    skulpturen: 'SCULPTURES',
    atelier: 'STUDIO',
  },
  descriptions: {
    alle: {
      title: '"CHIEN MECHANT"',
      description: '84 x 60 cm',
    },
    zeichnungen: {
      title: 'DRAWINGS',
      description: 'Diverse artistic expressions in various media and techniques',
    },
    masken: {
      title: 'MASKS',
      description: 'Despite their strong reduction, many masks have retained a human trait that seeks communication with the surprised viewer.',
    },
    skulpturen: {
      title: 'SCULPTURES',
      description: 'Sculptures emerge, step into the third dimension, truly bring an object to life. This makes the creative process infinitely more complex than any drawing or painting. At the beginning there is an amorphous raw material like wood, clay, marble or other materials and ultimately only the pure will of the creator in connection with his creative abilities decides what emerges in the end. - Simply fascinating.',
    },
    atelier: {
      title: 'STUDIO',
      description: 'Insights into the creative process and the creation of artworks',
    },
  },
  footer: {
    copyright: '© 2024 Bernward Frübis. All rights reserved.',
    impressum: 'IMPRINT',
  },
  about: {
    title: 'ABOUT ME',
    personalInfo: 'ABOUT ME',
    biography: {
      paragraph1: 'I was born in 1958 in Meckenheim in the Palatinate, and spent my school years in St. Blasien in the Black Forest.',
      paragraph2: 'From today\'s perspective, I would say that I was rather a poor student, especially in classical subjects like Latin or Math. But even then, Carlo Pickert, a rather crazy art teacher from Switzerland, discovered my special eye for colors and forms.',
      paragraph3: 'Later I studied Visual Communication at FH Mainz under Prof. Hans F. Krebs and Prof. Gedo Dötterweich. My education included traditional printing techniques such as lithography, cold needle etching, as well as free graphics and figurative drawing.',
      paragraph4: 'During this time I also experimented with all kinds of variations of monotype.',
      paragraph5: 'Later I discovered my preference for drawing and still feel today every time the departure that dwells within a white sheet of paper.'
    }
  },
  contact: {
    title: 'CONTACT',
    address: 'Address',
    contactData: 'Contact Information',
    inquiries: 'Inquiries',
    inquiriesText: 'If you are a gallery owner, private buyer/interested party, or have other suggestions, please feel free to contact me by email.',
    availableServices: 'Available Services',
    services: {
      pottery: 'Pottery courses',
      drawing: 'Drawing and painting courses',
      portfolio: 'Portfolio consulting',
      consulting: 'Art consulting',
      commissions: 'Commission work',
      exhibitions: 'Gallery exhibitions'
    },
    email: 'Email',
    mobile: 'Mobile'
  },
  modal: {
    of: 'of',
    closeGallery: 'Close gallery',
    previousImage: 'Previous image',
    nextImage: 'Next image',
  },
};

// Detect user language based on browser language and location
const detectUserLanguage = (): 'de' | 'en' => {
  const browserLang = navigator.language.toLowerCase();
  
  // Check if browser language is German or from German-speaking countries
  if (browserLang.startsWith('de') || 
      browserLang === 'de-de' || 
      browserLang === 'de-at' || 
      browserLang === 'de-ch') {
    return 'de';
  }
  
  return 'en'; // Default to English for all other languages
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<'de' | 'en'>(() => {
    // Check localStorage first, then detect language
    const savedLang = localStorage.getItem('language') as 'de' | 'en' | null;
    return savedLang || detectUserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const translations = language === 'de' ? germanTranslations : englishTranslations;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
    t: translations,
  };
};