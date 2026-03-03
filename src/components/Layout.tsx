import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AFFILIATE_XM_URL } from "@/config/affiliate";
import { Menu, X, BookOpen, Wrench, BarChart3, Rocket, AlertTriangle, GraduationCap } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home", icon: GraduationCap },
  { path: "/academy", label: "Academy", icon: BookOpen },
  { path: "/tools", label: "Tools", icon: Wrench },
  { path: "/gold-insights", label: "Gold Insights", icon: BarChart3 },
  { path: "/start-trading", label: "Start Trading", icon: Rocket },
  { path: "/disclaimer", label: "Disclaimer", icon: AlertTriangle },
];

const riskPages = ["/academy", "/tools", "/gold-insights", "/start-trading"];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const showRisk = riskPages.some(p => location.pathname.startsWith(p));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <GraduationCap className="h-6 w-6 text-gold" />
            <span className="hidden sm:inline">Small Account Trading Academy</span>
            <span className="sm:hidden">SATA</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="gold" size="sm" asChild className="hidden sm:inline-flex">
              <a href={AFFILIATE_XM_URL} target="_blank" rel="noopener noreferrer">Open Demo Account</a>
            </Button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t bg-background px-4 pb-4">
            {navLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-3 rounded-md text-sm font-medium ${
                  location.pathname === l.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <l.icon className="h-4 w-4" />
                {l.label}
              </Link>
            ))}
            <Button variant="gold" size="sm" asChild className="w-full mt-2">
              <a href={AFFILIATE_XM_URL} target="_blank" rel="noopener noreferrer">Open Demo Account</a>
            </Button>
          </nav>
        )}
      </header>

      {/* Risk banner */}
      {showRisk && (
        <div className="risk-banner flex items-center justify-center gap-2">
          <AlertTriangle className="h-3 w-3 text-warning" />
          <span>Trading involves risk. Past performance is not a guarantee of future results.</span>
        </div>
      )}

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Academy</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/academy" className="block hover:text-foreground">All Modules</Link>
                <Link to="/tools" className="block hover:text-foreground">Free Tools</Link>
                <Link to="/gold-insights" className="block hover:text-foreground">Gold Insights</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Get Started</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/start-trading" className="block hover:text-foreground">Start Trading</Link>
                <a href={AFFILIATE_XM_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-foreground">Open Demo Account</a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/disclaimer" className="block hover:text-foreground">Disclaimer</Link>
                <Link to="/privacy" className="block hover:text-foreground">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/contact" className="block hover:text-foreground">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Small Account Trading Academy. For educational purposes only.</p>
            <p className="mt-1">This site contains affiliate links. See our <Link to="/disclaimer" className="underline hover:text-foreground">disclaimer</Link> for details.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
