import NavLink from '@/components/NavLink';
import NavMenu from '@/components/mobile/NavMenu';

const Header = () => {
  return (
    <header className="h-[80px] flex items-center px-6 bg-background-secondary sticky top-0 z-50">
        <nav className="w-full">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 items-center">
                <li>
                    <NavLink href="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/about">
                        About
                    </NavLink>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <NavMenu />
            </div>
        </nav>
    </header>
  )
}

export default Header;