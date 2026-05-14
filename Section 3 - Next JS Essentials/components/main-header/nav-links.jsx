"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-links.module.css"

const NavLinks = ({ href, children }) => {
    const path = usePathname()

    return (
        <Link href={href} className={`${classes.link} ${path.startsWith(href) ? classes.active : undefined}`}>{children}</Link>
    );
};

export default NavLinks