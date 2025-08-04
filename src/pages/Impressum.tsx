import Navigation from "@/components/Navigation";
import { useTranslation } from "@/hooks/useTranslation";

const Impressum = () => {
  const { t } = useTranslation();
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
              {t.impressum.title}
            </h1>
          </header>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-medium mb-4">{t.impressum.legalInfo}</h2>
              <div className="space-y-2">
                <p>Bernward Frübis</p>
                <p>Künstler</p>
                <p>Rheinvillenstr. 10</p>
                <p>68163 Mannheim</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">{t.impressum.contact}</h2>
              <div className="space-y-2">
                <p>Mobil: 0173 70 86 839</p>
                <p>E-Mail: info@bernwardfruebis-kunst.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">{t.impressum.responsibleContent}</h2>
              <div className="space-y-2">
                <p>Bernward Frübis</p>
                <p>Rheinvillenstr. 10</p>
                <p>68163 Mannheim</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">{t.impressum.contentLiability}</h2>
              <p className="text-sm leading-relaxed">
                {t.impressum.contentLiabilityText1}
              </p>
              <p className="text-sm leading-relaxed mt-3">
                {t.impressum.contentLiabilityText2}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">{t.impressum.linkLiability}</h2>
              <p className="text-sm leading-relaxed">
                {t.impressum.linkLiabilityText1}
              </p>
              <p className="text-sm leading-relaxed mt-3">
                {t.impressum.linkLiabilityText2}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">{t.impressum.copyright}</h2>
              <p className="text-sm leading-relaxed">
                {t.impressum.copyrightText1}
              </p>
              <p className="text-sm leading-relaxed mt-3">
                {t.impressum.copyrightText2}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">{t.impressum.dataProtection}</h2>
              <p className="text-sm leading-relaxed">
                {t.impressum.dataProtectionText1}
              </p>
              <p className="text-sm leading-relaxed mt-3">
                {t.impressum.dataProtectionText2}
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;