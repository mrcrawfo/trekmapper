'use client';

import NavLink from '@/components/NavLink';

const NavMenu = () => {
    return (
        <>
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
                <li className="py-2 bg-background-secondary w-screen">
                    <NavLink href="/">
                    Home
                    </NavLink>
                </li>
                <li className="py-2 bg-background-secondary w-screen">
                    <NavLink href="/about">
                    About
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavMenu;
