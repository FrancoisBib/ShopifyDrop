import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#advantages", label: "Avantages" },
  { href: "#about", label: "Formateur" },
  { href: "#modules", label: "Programme" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingBag className="text-primary mr-2" size={26} />
          <span className="text-primary font-bold text-2xl">DropShip Pro</span>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-muted-foreground hover:text-primary font-medium transition duration-150"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#register" 
            className={cn(
              "bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90",
              "transition duration-150 font-medium"
            )}
          >
            S'inscrire
          </a>
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-dark"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Menu Mobile */}
      <div className={cn(
        "md:hidden bg-white absolute w-full z-50 shadow-md",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-muted-foreground hover:text-primary py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#register" 
            className={cn(
              "bg-primary text-white px-6 py-3 rounded-md text-center",
              "hover:bg-opacity-90 transition duration-150 font-medium"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            S'inscrire
          </a>
        </div>
      </div>
    </header>
  );
}
