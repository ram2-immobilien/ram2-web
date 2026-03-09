"use client"

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import "./Navbar.css"

export default function Navbar() {
    const currentPage: string = usePathname()

    return (
        <div className="navbar">
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={69}
                    height={50}
                />         
            </Link>
            <div className="navbar-items">
                <Link
                    className={`navbar-item ${currentPage == "/properties" ? "current": ""}`} 
                    href="/properties">
                    Properties
                </Link>

                <Link
                    className={`navbar-item ${currentPage == "/about_us" ? "current": ""}`} 
                    href="/about_us">
                    About us
                </Link>

                <Link
                    className={`navbar-item ${currentPage == "/contact" ? "current": ""}`} 
                    href="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
}
