import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
            Ellis
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:opacity-80 transition-opacity"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#work" className="hover:opacity-80 transition-opacity">Work</a>
            <Link to="/about" className="hover:opacity-80 transition-opacity">About</Link>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#work"
                className="hover:opacity-80 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Work
              </a>
              <Link
                to="/about"
                className="hover:opacity-80 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <a
                href="#contact"
                className="hover:opacity-80 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;