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
  
  // Impressum page
  impressum: {
    title: string;
    legalInfo: string;
    contact: string;
    responsibleContent: string;
    contentLiability: string;
    linkLiability: string;
    copyright: string;
    dataProtection: string;
    contentLiabilityText1: string;
    contentLiabilityText2: string;
    linkLiabilityText1: string;
    linkLiabilityText2: string;
    copyrightText1: string;
    copyrightText2: string;
    dataProtectionText1: string;
    dataProtectionText2: string;
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
      title: '"CHIEN MÉCHANT"',
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
      description: 'Einblicke in den kreativen Prozess und\ndie Entstehung der Kunstwerke',
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
  impressum: {
    title: 'IMPRESSUM',
    legalInfo: 'Angaben gemäß § 5 TMG',
    contact: 'Kontakt',
    responsibleContent: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    contentLiability: 'Haftung für Inhalte',
    linkLiability: 'Haftung für Links',
    copyright: 'Urheberrecht',
    dataProtection: 'Datenschutz',
    contentLiabilityText1: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
    contentLiabilityText2: 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    linkLiabilityText1: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
    linkLiabilityText2: 'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    copyrightText1: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
    copyrightText2: 'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    dataProtectionText1: 'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
    dataProtectionText2: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
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
      title: '"CHIEN MÉCHANT"',
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
      description: 'Insights into the creative process and\nthe creation of artworks',
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
  impressum: {
    title: 'IMPRINT',
    legalInfo: 'Legal Information according to § 5 TMG',
    contact: 'Contact',
    responsibleContent: 'Responsible for content according to § 55 Abs. 2 RStV',
    contentLiability: 'Liability for Content',
    linkLiability: 'Liability for Links',
    copyright: 'Copyright',
    dataProtection: 'Data Protection',
    contentLiabilityText1: 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG and general laws. However, according to §§ 8 to 10 TMG, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
    contentLiabilityText2: 'Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of such legal violations, we will remove this content immediately.',
    linkLiabilityText1: 'Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.',
    linkLiabilityText2: 'However, permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.',
    copyrightText1: 'The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.',
    copyrightText2: 'Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.',
    dataProtectionText1: 'The use of our website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or email addresses) is collected on our pages, this is always done on a voluntary basis whenever possible. This data will not be passed on to third parties without your express consent.',
    dataProtectionText2: 'We point out that data transmission on the Internet (e.g. when communicating by email) can have security gaps. Complete protection of data against access by third parties is not possible.',
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