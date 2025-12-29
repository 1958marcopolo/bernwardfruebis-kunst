import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t } = useTranslation();

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
              {t.about.title}
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
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.biography.paragraph1}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.biography.paragraph2}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.biography.paragraph3}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.biography.paragraph4}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.biography.paragraph5}
              </p>
            </div>
          </div>

          {/* Gallery Button */}
          <div className="mt-12 text-center">
            <Button asChild className="px-12 py-6 text-lg font-medium">
              <Link to="/">Zur Galerie</Link>
            </Button>
          </div>
        </div>
      </main>

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

export default About;