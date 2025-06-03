import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';


export default function FloatingExploreButton(){
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null; // or a simple placeholder


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-16  z-50"
    >
      <Link href="/explore">
        <motion.button
            whileTap={{ scale: 0.97 }}
            className={`relative overflow-hidden group
                        px-5 py-3 rounded-full border font-semibold text-sm
                        transition-colors duration-300
                        ${isDark 
                            ? 'border-indigo-400 text-indigo-300' 
                            : 'border-indigo-600 text-indigo-600'
                        } 
                        bg-transparent backdrop-blur-md shadow-md`}
        >
            {/* Background fill animation */}
            <span
                className={`absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 ease-out 
                            ${isDark ? 'bg-indigo-500' : 'bg-indigo-600'}`}
                style={{ zIndex: 0 }}
            />
            
            {/* Button text on top */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Explore →
            </span>
        </motion.button>

      </Link>
    </motion.div>
  );
};