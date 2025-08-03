import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <h1 style={{
              fontWeight: '100',
              fontSize: '32px',
              letterSpacing: '0'
            }} className="tracking-wide font-sans mb-4 text-foreground text-2xl">
              ZU MEINER PERSON
            </h1>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Artist Photo */}
            <div className="w-full overflow-hidden rounded-sm">
              <img
                src="/bernward_fruebis.png"
                alt="Bernward Frübis, Artist"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Biography Text */}
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                Geboren wurde ich 1958 in Meckenheim in der Pfalz, meine 
                Schulzeit verbrachte ich in St. Blasien im Schwarzwald.
              </p>
              
              <p className="text-lg leading-relaxed">
                Aus heutiger Sicht würde ich sagen, dass ich eher ein lausiger 
                Schüler war, gerade in klassischen Fächern, wie Latein oder 
                Mathe. Doch schon damals entdeckte Carlo Pickert, ein ziemlich 
                verrückter Kunstlehrer aus der Schweiz, mein besonderes Auge 
                für Farben und Formen.
              </p>
              
              <p className="text-lg leading-relaxed">
                Später studierte ich an der FH Mainz Visuelle Kommunikation 
                bei Prof. Hans F. Krebs und Prof. Gedo Dötterweich. Zu meiner 
                Ausbildung gehörten traditionelle Drucktechniken, wie 
                Lithographie, Kaltnadelradierung, sowie freie Grafik und 
                figurliches Zeichnen.
              </p>
              
              <p className="text-lg leading-relaxed">
                In dieser Zeit experimentierte ich auch mit allerlei Spielarten 
                von Monotypie.
              </p>
              
              <p className="text-lg leading-relaxed">
                Später habe ich meine Vorliebe zum Zeichnen entdeckt und spüre 
                noch heute jedes mal den Aufbruch, der einem weißen Blatt Papier 
                inne wohnt.
              </p>
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

export default About;