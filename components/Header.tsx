'use client';

import { useState, useMemo } from 'react';
import { Wine, Menu, X, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // All cities
  const allCities = [
    { href: '/agra', label: 'Agra' },
    { href: '/ajmer', label: 'Ajmer' },
    { href: '/allahabad', label: 'Allahabad' },
    { href: '/ambala', label: 'Ambala' },
    { href: '/amritsar', label: 'Amritsar' },
    { href: '/aurangabad', label: 'Aurangabad' },
    { href: '/bangalore', label: 'Bangalore' },
    { href: '/batala', label: 'Batala' },
    { href: '/bbsr', label: 'BBSR' },
    { href: '/bharatpur', label: 'Bharatpur' },
    { href: '/bhopal', label: 'Bhopal' },
    { href: '/bhubaneswar', label: 'Bhubaneswar' },
    { href: '/bilaspur', label: 'Bilaspur' },
    { href: '/chandigarh', label: 'Chandigarh' },
    { href: '/chennai', label: 'Chennai' },
    { href: '/chikmagalur', label: 'Chikmagalur' },
    { href: '/coimbatore', label: 'Coimbatore' },
    { href: '/dehradun', label: 'Dehradun' },
    { href: '/delhi', label: 'Delhi' },
    { href: '/durgapur', label: 'Durgapur' },
    { href: '/faridabad', label: 'Faridabad' },
    { href: '/ghaziabad', label: 'Ghaziabad' },
    { href: '/gorakhpur', label: 'Gorakhpur' },
    { href: '/gurgaon', label: 'Gurgaon' },
    { href: '/guwahati', label: 'Guwahati' },
    { href: '/gwalior', label: 'Gwalior' },
    { href: '/hyderabad', label: 'Hyderabad' },
    { href: '/indore', label: 'Indore' },
    { href: '/jaipur', label: 'Jaipur' },
    { href: '/jalandhar', label: 'Jalandhar' },
    { href: '/jammu', label: 'Jammu' },
    { href: '/jodhpur', label: 'Jodhpur' },
    { href: '/kanpur', label: 'Kanpur' },
    { href: '/karnal', label: 'Karnal' },
    { href: '/kolkata', label: 'Kolkata' },
    { href: '/kota', label: 'Kota' },
    { href: '/lucknow', label: 'Lucknow' },
    { href: '/ludhiana', label: 'Ludhiana' },
    { href: '/mathura', label: 'Mathura' },
    { href: '/meerut', label: 'Meerut' },
    { href: '/mohali', label: 'Mohali' },
    { href: '/mumbai', label: 'Mumbai' },
    { href: '/muzaffarnagar', label: 'Muzaffarnagar' },
    { href: '/nagpur', label: 'Nagpur' },
    { href: '/noida', label: 'Noida' },
    { href: '/patiala', label: 'Patiala' },
    { href: '/patna', label: 'Patna' },
    { href: '/pune', label: 'Pune' },
    { href: '/raipur', label: 'Raipur' },
    { href: '/rajkot', label: 'Rajkot' },
    { href: '/ranchi', label: 'Ranchi' },
    { href: '/rewari', label: 'Rewari' },
    { href: '/rohtak', label: 'Rohtak' },
    { href: '/shimla', label: 'Shimla' },
    { href: '/siliguri', label: 'Siliguri' },
    { href: '/sirsa', label: 'Sirsa' },
    { href: '/surat', label: 'Surat' },
    { href: '/udaipur', label: 'Udaipur' },
    { href: '/ujjain', label: 'Ujjain' },
    { href: '/up', label: 'UP' },
    { href: '/vadodara', label: 'Vadodara' },
    { href: '/varanasi', label: 'Varanasi' },
  ];

  // Featured cities for desktop nav
  const featuredCities = [
    { href: '/', label: 'India' },
    { href: '/delhi', label: 'Delhi' },
    { href: '/mumbai', label: 'Mumbai' },
    { href: '/bangalore', label: 'Bangalore' },
    { href: '/hyderabad', label: 'Hyderabad' },
    { href: '/kolkata', label: 'Kolkata' },
    { href: '/pune', label: 'Pune' },
  ];

  // Filter cities based on search query
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return allCities;
    return allCities.filter(city =>
      city.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allCities]);

  return (
    <header className="border-b border-amber-200/20 dark:border-amber-900/20 backdrop-blur-sm sticky top-0 z-50 bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-1.5 sm:p-2.5 rounded-lg shadow-lg">
              <Wine className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                Old Monk
              </h1>
              <p className="text-xs sm:text-sm text-amber-500/80 hidden sm:block">Since 1954 | For The Spirit of Life</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {featuredCities.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm",
                  pathname === item.href
                    ? "bg-amber-500/10 text-amber-500 font-medium"
                    : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Explore Dropdown */}
            <div className="relative group/explore">
              <button
                className="px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5 flex items-center gap-1"
              >
                Explore
                <ChevronDown className="h-4 w-4 transition-transform group-hover/explore:rotate-180" />
              </button>

              <div className="absolute right-0 mt-0 pt-2 w-48 opacity-0 invisible group-hover/explore:opacity-100 group-hover/explore:visible transition-all duration-300">
                <div className="bg-zinc-900 border border-amber-900/20 rounded-lg shadow-xl overflow-hidden p-1">
                  {[
                    { href: '/apps', label: 'Apps' },
                    { href: '/games', label: 'Games' },
                    { href: '/software', label: 'Software' },
                    { href: '/vpn', label: 'VPN' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-md transition-all duration-200 text-sm",
                        pathname === item.href
                          ? "bg-amber-500/10 text-amber-500 font-medium"
                          : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              className={cn(
                "px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm",
                pathname === '/contact-us'
                  ? "bg-amber-500/10 text-amber-500 font-medium"
                  : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
              )}
            >
              Contact Us
            </Link>

            {/* More Cities Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCitiesDropdownOpen(!citiesDropdownOpen)}
                onBlur={() => setTimeout(() => setCitiesDropdownOpen(false), 200)}
                className="px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5 flex items-center gap-1"
              >
                More Cities
                <ChevronDown className={cn("h-4 w-4 transition-transform", citiesDropdownOpen && "rotate-180")} />
              </button>

              {citiesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-zinc-900 border border-amber-900/20 rounded-lg shadow-xl overflow-hidden">
                  <div className="max-h-96 overflow-y-auto p-2 grid grid-cols-2 gap-1">
                    {allCities.map((city) => (
                      <Link
                        key={city.href}
                        href={city.href}
                        className={cn(
                          "px-3 py-2 rounded-md transition-all duration-200 text-sm",
                          pathname === city.href
                            ? "bg-amber-500/10 text-amber-500 font-medium"
                            : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                        )}
                      >
                        {city.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-amber-500 hover:bg-amber-500/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-amber-900/20 py-4">
            {/* Search Bar */}
            <div className="px-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500/50" />
                <input
                  type="text"
                  placeholder="Search cities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-amber-900/20 rounded-lg text-amber-500 placeholder:text-amber-500/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>
            </div>

            {/* India Link */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg transition-all duration-300 text-base mx-4 mb-2",
                pathname === '/'
                  ? "bg-amber-500/10 text-amber-500 font-medium"
                  : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
              )}
            >
              India
            </Link>

            {/* Category Links */}
            <div className="grid grid-cols-2 gap-2 mx-4 mb-4">
              {[
                { href: '/apps', label: 'Apps' },
                { href: '/games', label: 'Games' },
                { href: '/software', label: 'Software' },
                { href: '/vpn', label: 'VPN' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 rounded-lg transition-all duration-300 text-sm text-center",
                    pathname === item.href
                      ? "bg-amber-500/10 text-amber-500 font-medium"
                      : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Cities List */}
            <div className="max-h-96 overflow-y-auto px-4 space-y-1">
              {filteredCities.length > 0 ? (
                filteredCities.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 rounded-lg transition-all duration-300 text-sm",
                      pathname === item.href
                        ? "bg-amber-500/10 text-amber-500 font-medium"
                        : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                    )}
                  >
                    {item.label}
                  </Link>
                ))
              ) : (
                <p className="text-amber-500/50 text-sm text-center py-4">No cities found</p>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}