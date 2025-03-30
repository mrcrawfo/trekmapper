'use client'

const Header = () => {
  return (
    <header className="h-[80px] flex items-center px-6 bg-background-secondary">
        <nav className="w-full">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 items-center">
                <li>
                    <a href="/" className="hover:text-foreground/80 transition-colors">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" className="hover:text-foreground/80 transition-colors">
                        About
                    </a>
                </li>
                <li>
                    <a href="/services" className="hover:text-foreground/80 transition-colors">
                        Services
                    </a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-foreground/80 transition-colors">
                        Contact
                    </a>
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

                <ul id="mobile-menu" className="hidden absolute left-0 right-0 bg-background border-b border-foreground/10 px-6 py-4 mt-2">
                    <li className="py-2">
                        <a href="/" className="block hover:text-foreground/80 transition-colors">
                        Home
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="/about" className="block hover:text-foreground/80 transition-colors">
                        About
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="/services" className="block hover:text-foreground/80 transition-colors">
                        Services
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="/contact" className="block hover:text-foreground/80 transition-colors">
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;