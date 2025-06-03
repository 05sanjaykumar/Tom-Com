'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Make sure path is correct

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/try-it-out', label: 'Try It Out' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const baseLink =
      'relative text-sm font-medium text-black dark:text-white transition-all duration-200 hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-[1.05] active:scale-[0.97] transform';


  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl
                 bg-white/60 dark:bg-zinc-900/50
                 border border-zinc-200 dark:border-zinc-700
                 backdrop-blur-md rounded-2xl shadow-xl px-6 py-3"
    >



        <div className="hidden md:flex gap-x-6 items-center justify-around">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-primary">
            Tom Com
            </Link>
            {/* Desktop nav */}
            <div className='flex justify-around min-w-60'>
                {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className={baseLink}>
                    {label}
                    </Link>
                ))}
            </div>

            <div className='flex justify-around min-w-72'>
                {/* Auth Buttons */}
                <Button asChild variant="ghost">
                    <Link href="/signin">Sign In</Link>
                </Button>
                <Button asChild>
                    <Link href="/login">Log In</Link>
                </Button>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
                    >
                    {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-yellow-400" />
                    ) : (
                        <Moon className="h-5 w-5 text-blue-600" />
                    )}
                </button>
            </div>
        </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center gap-x-2">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
                >
                    {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                    ) : (
                    <Moon className="h-5 w-5 text-blue-600" />
                    )}
                </button>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 rounded-full bg-zinc-100/60 dark:bg-zinc-800/60"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 space-y-3"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-4 py-2 bg-zinc-100/70 dark:bg-zinc-800/70 text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
              >
                {label}
              </Link>
            ))}

            <hr className="border-zinc-300 dark:border-zinc-700 my-2" />

            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
              onClick={() => setMenuOpen(false)}
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button
              className="w-full justify-start"
              asChild
              onClick={() => setMenuOpen(false)}
            >
              <Link href="/log-in">Log In</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
