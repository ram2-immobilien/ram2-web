"use client"

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLanguage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslations, useLocale } from "next-intl";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import "./Navbar.css"
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const currentLocale: string = useLocale();
    const currentPage: string = usePathname();
    const t = useTranslations("layout.navbar");

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }
    
    function switchLanguage() {
        const locales = routing.locales;
        const nextLocale = locales[(locales.indexOf(currentLocale as typeof locales[number]) + 1) % locales.length];
        router.replace(currentPage, { locale: nextLocale });
    }

    return (
        <div className="navbar">
            <div className="menu">
                <button className="menu-sidebar-toggle" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <Link className="menu-logo" href="/">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={69}
                        height={50}
                        priority
                    />
                </Link>
                <div className="menu-items">
                    <Link
                        className={currentPage == "/properties" ? "current": ""}
                        href="/properties"
                        onClick={(e) => e.preventDefault()}>
                        {t("properties")}
                    </Link>

                    <Link
                        className={currentPage == "/about_us" ? "current": ""}
                        href="/about_us"
                        onClick={(e) => e.preventDefault()}>
                        {t("about_us")}
                    </Link>

                    <Link
                        className={currentPage == "/contact" ? "current": ""}
                        href="/contact"
                        onClick={(e) => e.preventDefault()}>
                        {t("contact")}
                    </Link>
                </div>
                <button className="menu-language-switcher" onClick={switchLanguage}>
                    <p>{currentLocale.toUpperCase()}</p>
                    <FontAwesomeIcon icon={faLanguage}/>
                </button>
            </div>
            <div className={`backdrop ${isSidebarOpen ? "open": "closed"}`} onClick={toggleSidebar}></div>
            <div className={`sidebar ${isSidebarOpen ? "open": "closed"}`}>
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className="sidebar-items">
                    <Link
                        className={currentPage == "/properties" ? "current": ""}
                        href="#"
                        onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
                        {t("properties")}
                    </Link>
    
                    <Link
                        className={currentPage == "/about_us" ? "current": ""}
                        href="#"
                        onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
                        {t("about_us")}
                    </Link>

                    <Link
                        className={currentPage == "/contact" ? "current": ""}
                        href="#"
                        onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
                        {t("contact")}
                    </Link>
                </div>
            </div>
        </div>
    );
}
