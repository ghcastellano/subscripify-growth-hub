import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold gradient-text">Always Active</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-saas-purple transition-colors">Home</Link>
          <a href="#features" className="text-gray-700 hover:text-saas-purple transition-colors">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-saas-purple transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-saas-purple transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-saas-purple transition-colors">FAQ</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-saas-purple text-saas-purple hover:bg-saas-purple hover:text-white">
            Log In
          </Button>
          <Button className="btn-gradient">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-saas-purple transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <a href="#features" className="text-gray-700 hover:text-saas-purple transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-saas-purple transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-saas-purple transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-saas-purple transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            
            <div className="flex flex-col space-y-2 pt-2 px-4">
              <Button variant="outline" className="border-saas-purple text-saas-purple hover:bg-saas-purple hover:text-white w-full">
                Log In
              </Button>
              <Button className="btn-gradient w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Navbar;