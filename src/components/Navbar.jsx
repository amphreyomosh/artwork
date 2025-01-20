import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const navigate = useNavigate();

  const artworks = [
    {
      title: 'Masterful Paintings',
      description:
        'Dive deep into the world of vibrant and evocative paintings, where each brushstroke tells a story and captures the essence of timeless artistry.',
      image:
        'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hc3RlcmZ1bCUyMHBhaW50aW5nfGVufDB8fDB8fHww',
      price: {
        sold: 500,
        remaining: 600,
      },
    },
    {
      title: 'Expressive Canvas Art',
      description:
        'Explore a collection of meticulously crafted sculptures that bring life to stone and metal.',
      image:
        'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hc3RlcmZ1bCUyMHBhaW50aW5nfGVufDB8fDB8fHww',
      price: {
        sold: 300,
        remaining: 400,
      },
    },
    // Add other artworks as needed
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const searchResults = artworks.filter((artwork) =>
        artwork.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArtworks(searchResults);

      if (searchResults.length > 0) {
        navigate('/artwork', { state: { artwork: searchResults[0] } });
      }
    } else {
      setFilteredArtworks([]);
    }

    // Clear search input after searching
    setSearchQuery('');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-white p-5 z-50">
      <div className="flex justify-between items-center w-full">
        {/* Logo on the far left */}
        <div className="text-2xl font-bold">
          <img
            src="/jopelogo.png"
            alt="jopegraphics logo"
            style={{
              width: '70px',
              height: '50px',
              borderRadius: '10%',
              imageRendering: 'auto',
              filter: 'brightness(1)',
            }}
          />
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden text-black">
          <button onClick={() => setIsOpen(!isOpen)} className="text-4xl">
            &#9776;
          </button>
        </div>

        {/* Navigation links for large screens */}
        <div className="hidden md:flex space-x-7 ml-auto">
          <Link to="/" className="hover:text-yellow-300 text-black">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 text-black">
            About
          </Link>
          <Link to="/projects" className="hover:text-yellow-300 text-black">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 text-black">
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex ml-4 items-center">
          <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-md">
            <i className="text-black text-lg">&#128269;</i>
            <input
              type="text"
              placeholder="Search for art..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 px-4 py-2 rounded-full bg-transparent text-gray-700 focus:outline-none w-0 transition-all ease-in-out duration-300 focus:w-56"
            />
          </div>
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
