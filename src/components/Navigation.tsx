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
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-medium tracking-wider">
            <span style={{ color: '#555' }}>BERNWARD FRÜBIS</span>{' '}
            <span className="font-normal" style={{ color: '#fff' }}>KUNST</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground ${
                  location.pathname === item.path
                    ? "text-foreground border-b border-foreground pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;