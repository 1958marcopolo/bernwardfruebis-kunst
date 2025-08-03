import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 style={{
              fontWeight: '100',
              fontSize: '32px',
              letterSpacing: '0'
            }} className="tracking-wide font-sans mb-4 text-foreground text-2xl">
              KONTAKT
            </h1>
          </header>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-medium mb-4 text-foreground">
                  Anschrift
                </h2>
                <div className="text-lg text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Bernward Frübis</p>
                  <p>Rheinvillenstr. 10</p>
                  <p>68163 Mannheim</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-4 text-foreground">
                  Kontaktdaten
                </h2>
                <div className="text-lg text-muted-foreground space-y-2">
                  <p>
                    <span className="text-foreground font-medium">E-Mail:</span>{" "}
                    <a 
                      href="mailto:info@bernwardfrruebis-kunst.de"
                      className="hover:text-foreground transition-colors"
                    >
                      info@bernwardfrruebis-kunst.de
                    </a>
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Mobil:</span>{" "}
                    <a 
                      href="tel:+4917370686639"
                      className="hover:text-foreground transition-colors"
                    >
                      0173 70 86 639
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-medium mb-4 text-foreground">
                  Anfragen
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bei Interesse von Galeristen, privaten Kauf/Interessenten oder 
                  sonstigen Anregungen können Sie mich gerne per Mail kontaktieren.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-sm">
                <h3 className="text-lg font-medium mb-3 text-foreground">
                  Verfügbare Services
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Galerienausstellungen</li>
                  <li>• Private Kunstakquisition</li>
                  <li>• Auftragsarbeiten</li>
                  <li>• Kunstberatung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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

export default Contact;