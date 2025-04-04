'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`hover:text-active-contrast transition-colors ${pathname === href ? 'text-active-contrast font-bold md:underline' : 'text-foreground-contrast'}`}>
            {children}
        </Link>
    );
};

export default NavLink;