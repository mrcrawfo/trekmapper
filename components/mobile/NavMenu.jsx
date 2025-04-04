'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation'

import NavLink from '@/components/NavLink';

const NavMenu = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        closeMenu();
    }, [setIsExpanded, pathname]);

    const closeMenu = () => {
        const menu = document.getElementById('mobile-menu');
        setIsExpanded(false);
        menu?.classList.add('hidden');
    };
    
    const openMenu = () => {
        const menu = document.getElementById('mobile-menu');
        setIsExpanded(true);
        menu?.classList.remove('hidden');
    };

    return (
        <>
            <button 
            className="mobile-menu-button p-2"
            onClick={() => {
                if (isExpanded) {
                    closeMenu();
                } else {
                    openMenu();
                }
            }}
            >
                <svg className="w-6 h-6 stroke-active-contrast" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <ul id="mobile-menu" className="hidden absolute left-0 right-0 bg-background border-b px-0  mt-2">
                <li className="py-2 pl-8 bg-background-secondary w-screen">
                    <NavLink href="/">
                    Home
                    </NavLink>
                </li>
                <li className="py-2 pl-8 bg-background-secondary w-screen">
                    <NavLink href="/about">
                    About
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavMenu;
