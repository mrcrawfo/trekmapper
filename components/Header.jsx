'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="h-[80px] flex items-center px-6 bg-background-secondary sticky top-0 z-50">
        <nav className="w-full">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 items-center">
                <li>
                    <Link href="/" className={`hover:text-foreground/80 transition-colors ${pathname === '/' ? 'text-active-contrast' : ''}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={`hover:text-foreground/80 transition-colors ${pathname === '/about' ? 'text-active-contrast' : ''}`}>
                        About
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <button 
                className="mobile-menu-button p-2"
                onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    menu?.classList.toggle('hidden');
                }}
                >
                    <svg className="w-6 h-6 stroke-active-contrast" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <ul id="mobile-menu" className="hidden absolute left-0 right-0 bg-background border-b border-foreground/10 px-0 py-4 mt-2">
                    <li className={`py-2 bg-background-secondary w-screen  ${pathname === '/' ? 'text-active-contrast bg-active-secondary' : ''}`}>
                        <Link href="/" className="block hover:text-foreground/80 transition-colors px-6">
                        Home
                        </Link>
                    </li>
                    <li className={`py-2 bg-background-secondary -screen  ${pathname === '/about' ? 'text-active-contrast bg-active-secondary' : ''}`}>
                        <Link href="/about" className="block hover:text-foreground/80 transition-colors px-6">
                        About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;