
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-navy/90 backdrop-blur shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-teal font-fira text-2xl font-semibold">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <ol className="flex items-center space-x-5">
            {navItems.map((item, i) => (
              <li key={i} className="text-sm">
                <a
                  href={item.href}
                  className="relative text-slate px-2 py-2 font-fira hover:text-teal transition-colors duration-300 group"
                >
                  <span className="text-teal mr-1">0{i + 1}.</span>
                  {item.name}
                  <span className="absolute left-0 right-0 bottom-0 h-px bg-teal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ol>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button 
              className="ml-5 bg-transparent border border-teal text-teal hover:bg-teal/10 font-fira"
              variant="outline"
            >
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-teal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} 
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 z-50 bg-navy-dark/90 backdrop-blur flex flex-col justify-center items-center transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-xl font-fira text-slate-light hover:text-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-teal block text-center text-sm mb-1">0{i + 1}.</span>
                {item.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button 
                className="bg-transparent border border-teal text-teal hover:bg-teal/10 font-fira"
                variant="outline"
              >
                Resume
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
