'use client';

import { useState } from 'react';
import { Wine, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'India' },
    { href: '/mumbai', label: 'Mumbai' },
    { href: '/bangalore', label: 'Bangalore' },
    { href: '/up', label: 'UP' },
    { href: '/kolkata', label: 'Kolkata' },
    { href: '/pune', label: 'Pune' },
    { href: '/hyderabad', label: 'Hyderabad' },
  ];

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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm",
                  pathname === item.href
                    ? "bg-amber-500/10 text-amber-500 font-medium"
                    : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                )}
              >
                {item.label}
              </Link>
            ))}
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
          <nav className="md:hidden border-t border-amber-900/20 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg transition-all duration-300 text-base",
                  pathname === item.href
                    ? "bg-amber-500/10 text-amber-500 font-medium"
                    : "text-amber-500/70 hover:text-amber-500 hover:bg-amber-500/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}