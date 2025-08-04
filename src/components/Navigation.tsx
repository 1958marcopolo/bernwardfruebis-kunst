import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { Globe } from "lucide-react";

const Navigation = () => {
  const { language, toggleLanguage, t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "GALERIE" },
    { path: "/about", label: t.navigation.about },
    { path: "/contact", label: t.navigation.contact },
  ];

  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <Link to="/" className="text-xl font-medium tracking-wider text-center lg:text-left">
            <span style={{ color: '#555' }}>BERNWARD FRÜBIS</span>{' '}
            <span className="font-normal" style={{ color: '#fff' }}>KUNST</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-6 md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground whitespace-nowrap ${
                  location.pathname === item.path
                    ? "text-foreground border-b border-foreground pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors ml-4"
              aria-label={`Switch to ${language === 'de' ? 'English' : 'German'}`}
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;