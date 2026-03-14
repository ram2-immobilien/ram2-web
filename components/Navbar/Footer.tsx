import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/i18n/navigation";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        
        <div className="footer-column">
          <h3>Redes sociales</h3>
          <ul>
            <li><FontAwesomeIcon icon={faFacebook} /> <a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><FontAwesomeIcon icon={faInstagram} /> <a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><FontAwesomeIcon icon={faYoutube} /> <a href="https://youtube.com" target="_blank">Youtube</a></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3>Contactanos</h3>
          <ul>
            <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+4369917121430">+43 699 17 12 14 30</a></li>
            <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:office@ram2immobilien.com">office@ram2immobilien.com</a></li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 
              <a href="https://www.google.com/maps/place/Am+Anningerpark+5%2F3+1,+2351+Wiener+Neudorf,+Austria/@48.0783961,16.3053614,17z/data=!3m1!4b1!4m5!3m4!1s0x476daeff15c281db:0x2ad8c2d6e2aa33cc!8m2!3d48.0783925!4d16.3079417?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">2351 Wiener Neudorf, Am Anningerpark 5/3/1</a>
            </li>
          </ul>
        </div>

        
        <div className="footer-branding">
          <Image 
            src="/images/logo.png" 
            alt="Ram2 Logo" 
            width={60} 
            height={40} 
            className="footer-logo"
          />
          <div className="branding-text">
          <p className="footer-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <p className="footer-ceo">- Antonio Ramirez Ramia, CEO</p>
          </div>
        </div>
      </div>

      
      <div className="footer-legal-bar">
        <div className="footer-legal-content">
          <span>Ram² Immobilien © 2026</span>
          <div className="legal-links">
            <Link href="/terms">Terminos y condiciones</Link>
            <span>|</span>
            <Link href="/privacy">Politica de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
 //
export default Footer;