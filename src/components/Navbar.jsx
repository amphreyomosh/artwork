import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [artFound, setArtFound] = useState(true);
  const [searchMessage, setSearchMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

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
      setArtFound(false);
      setSearchMessage('Art not found');
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } else {
      setSearchMessage('Please enter a search query.');
      setArtFound(true);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };

  return (
    <nav className='fixed top-0 left-0 w-full bg-white text-white p-5 z-50'>
      <div className='flex justify-between items-center w-full'>
        {/* Logo on the far left */}
        <div className='text-2xl font-bold'>
          <img
            src='/jopelogo.png'
            alt='jopegraphics logo'
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
        <div className='md:hidden text-black'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-4xl'>
            &#9776;
          </button>
        </div>

        {/* Navigation links for large screens */}
        <div className='hidden md:flex space-x-7 ml-auto'>
          <Link to='/' className='hover:text-yellow-300 text-black'>
            Home
          </Link>
          <Link to='/about' className='hover:text-yellow-300 text-black'>
            About
          </Link>
          <Link to='/projects' className='hover:text-yellow-300 text-black'>
            Projects
          </Link>
          <Link to='/contact' className='hover:text-yellow-300 text-black'>
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className='hidden md:flex ml-4 items-center'>
          <div className='flex items-center bg-white rounded-full px-3 py-1 shadow-md'>
            <i className='text-black text-lg'>&#128269;</i>
            <input
              type='text'
              placeholder='Search for art...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='ml-2 px-4 py-2 rounded-full bg-transparent text-gray-700 focus:outline-none w-0 transition-all ease-in-out duration-300 focus:w-56'
            />
          </div>
          <button
            onClick={handleSearch}
            className='ml-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600'
          >
            Search
          </button>
        </div>
      </div>

      {/* Popup Message (Notification) */}
      {showMessage && (
        <div className='popup-message'>
          {searchMessage}
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white text-black transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-500`}
        style={{ zIndex: 1000, height: isOpen ? '100vh' : '0', overflow: 'hidden' }}
      >
        {/* Navigation links aligned to the left on small screens */}
        <div
          className={`flex flex-col items-start pl-8 py-8 space-y-4 curtain-wave ${
            isOpen ? 'curtain-open' : ''
          }`}
        >
          <Link to='/' className='text-xl hover:text-yellow-300 text-black' onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to='/about'
            className='text-xl hover:text-yellow-300 text-black'
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to='/projects'
            className='text-xl hover:text-yellow-300 text-black'
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to='/contact'
            className='text-xl hover:text-yellow-300 text-black'
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
