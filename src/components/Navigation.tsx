import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "GALERIE" },
    { path: "/ueber-mich", label: "ÜBER MICH" },
    { path: "/kontakt", label: "KONTAKT" },
  ];

  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <Link to="/" className="text-xl font-medium tracking-wider text-center lg:text-left">
            <span style={{ color: '#555' }}>BERNWARD FRÜBIS</span>{' '}
            <span className="font-normal" style={{ color: '#fff' }}>KUNST</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-8 md:space-x-12">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;