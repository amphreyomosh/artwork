import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => document.body.style.overflow = 'auto'; // Clean up when component unmounts
  }, [isOpen]);

  return (
    <nav className="relative bg-gray-800 text-white p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo on the far left */}
        <div className="text-2xl font-bold">ArtSite</div>

        {/* Navigation links on the far right for large screens */}
        <div className="hidden md:flex space-x-4 ml-auto">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/projects" className="hover:text-yellow-300">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-500`}
        style={{ zIndex: 1000, height: isOpen ? '100vh' : '0', overflow: 'hidden' }}
      >
        {/* Navigation links aligned to the left on small screens */}
        <div
          className={`flex flex-col items-start pl-8 py-8 space-y-4 curtain-wave ${isOpen ? 'curtain-open' : ''}`}
        >
          <Link to="/" className="text-xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="text-xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="text-xl hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
