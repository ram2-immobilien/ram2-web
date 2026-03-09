"use client"

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useTranslations, useLocale } from "next-intl";

import { Link, usePathname, useRouter } from "@/i18n/navigation";

import "./Navbar.css"



export default function Navbar() {
    const router = useRouter();
    const currentLocale: string = useLocale();
    const currentPage: string = usePathname();
    const t = useTranslations("layout.navbar");
    
    function switchLanguage() {
        let newLocale: string = currentLocale;
    
        switch(currentLocale) {
            case "en": {
                newLocale = "de";
                break;
            }
            case "de": {
                newLocale = "es";
                break;
            }
            default: {
                newLocale = "en";
                break;
            }
        }

        router.replace(currentPage, { locale: newLocale })
    }

    return (
        <div className="navbar">
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={69}
                    height={50}
                    priority
                />         
            </Link>
            <div className="navbar-items">
                <Link
                    className={`navbar-item ${currentPage == "/properties" ? "current": ""}`} 
                    href="/properties">
                    {t("properties")}
                </Link>

                <Link
                    className={`navbar-item ${currentPage == "/about_us" ? "current": ""}`} 
                    href="/about_us">
                    {t("about_us")}
                </Link>

                <Link
                    className={`navbar-item ${currentPage == "/contact" ? "current": ""}`} 
                    href="/contact">
                    {t("contact")}
                </Link>
            </div>
            <div className="navbar-language-toggle" onClick={switchLanguage}>
                <p>{currentLocale.toUpperCase()}</p>
                <FontAwesomeIcon className="navbar-language-toggle-icon" icon={faLanguage}/>
            </div>
        </div>
    );
}
