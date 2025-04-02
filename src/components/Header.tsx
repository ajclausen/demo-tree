import React from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const location = useLocation();
  const servicesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: 'Tree Removal', href: '/services/tree-removal' },
    { name: 'Tree Trimming', href: '/services/tree-trimming' },
    { name: 'Tree Care', href: '/services/tree-care' },
    { name: 'Residential Services', href: '/services/residential' },
    { name: 'Commercial Services', href: '/services/commercial' },
    { name: 'Stump Removal', href: '/services/stump-removal' },
    { name: 'Storm Damage', href: '/services/storm-damage' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/career' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-800">Complete Tree Care</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-green-700 border-b-2 border-green-700'
                    : 'text-gray-700 hover:text-green-700'
                } px-3 py-2 text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`${
                  location.pathname.startsWith('/services')
                    ? 'text-green-700 border-b-2 border-green-700'
                    : 'text-gray-700 hover:text-green-700'
                } px-3 py-2 text-sm font-medium inline-flex items-center`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      role="menuitem"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                        role="menuitem"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navigation.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-green-700 border-b-2 border-green-700'
                    : 'text-gray-700 hover:text-green-700'
                } px-3 py-2 text-sm font-medium`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:317-783-2518"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
            >
              <Phone className="h-4 w-4 mr-2" />
              317-783-2518
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'bg-green-700 text-white'
                    : 'text-gray-700 hover:bg-green-50'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Menu */}
            <div className="space-y-1">
              <Link
                to="/services"
                className={`${
                  location.pathname === '/services'
                    ? 'bg-green-700 text-white'
                    : 'text-gray-700 hover:bg-green-50'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className={`${
                    location.pathname === service.href
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-600'
                  } block px-3 py-2 pl-6 text-sm hover:bg-green-50 hover:text-green-700`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <a
              href="tel:317-783-2518"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-700 hover:bg-green-800"
            >
              <Phone className="inline h-4 w-4 mr-2" />
              317-783-2518
            </a>
          </div>
        </div>
      )}
    </header>
  );
}