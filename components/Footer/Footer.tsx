"use client"

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import "./Footer.css";

const Footer = () => {
  const t = useTranslations('layout.footer');

  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-columns">
          <div className="footer-column">
            <h3>{t('social_media')}</h3>
            <ul>
              <li><FontAwesomeIcon icon={faFacebook} /> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><FontAwesomeIcon icon={faInstagram} /> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><FontAwesomeIcon icon={faYoutube} /> <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
            </ul>
          </div>
            
          <div className="footer-column">
            <h3>{t('contact_us')}</h3>
              <ul>
                <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+4369917121430">+43 699 17 12 14 30</a></li>
                <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:office@ram2immobilien.com">office@ram2immobilien.com</a></li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <a href="https://www.google.com/maps/place/Am+Anningerpark+5%2F3+1,+2351+Wiener+Neudorf,+Austria/@48.0783961,16.3053614,17z/data=!3m1!4b1!4m5!3m4!1s0x476daeff15c281db:0x2ad8c2d6e2aa33cc!8m2!3d48.0783925!4d16.3079417?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    2351 Wiener Neudorf, Am Anningerpark 5/3/1
                  </a>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-branding">
          <Image
            src="/images/logo.png"
            alt="Ram2 Logo"
            width={69}
            height={50}
            className="footer-logo"
          />
          <div className="branding-text">
            <p className="footer-text">{t('ceo_quote')}</p>
            <p className="footer-ceo">{t('ceo_name')}</p>
          </div>
        </div>
      </div>

      <div className="footer-legal-bar">
        <p>{t('copyright')}</p>
        <div className="legal-links">
          <Link href="/terms"><p>{t('terms')}</p></Link>
          <span>|</span>
          <Link href="/privacy"><p>{t('privacy')}</p></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
