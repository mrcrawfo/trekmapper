'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`hover:text-foreground/80 transition-colors ${pathname === href ? 'text-active-contrast font-bold' : ''}`}>
            {children}
        </Link>
    );
};

export default NavLink;