"use client";

//gsap
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = "/logo.svg"

  //gsap 
  useGSAP(() => {
    gsap.from(".navbar .top ", {
      y: -100,
      opacity: 0,
      stagger: 0.10,
      duration:0.50,
     toggleActions: "play none none none",
 
    });
  }, {})


  return (
    <header className="main-header">
      {/* FIX: The <nav> is no longer the container. 
        This lets the background image go edge-to-edge.
      */}
      <nav className="navbar navbar-expand-lg navbar-dark py-3">
        {/* FIX: The .container is now INSIDE the nav.
          This holds your content and provides the correct
          padding on all screen sizes, fixing the mobile gap issue.
        */}
        <div className="container">

          {/* --- LEFT SIDE (Logo) --- */}
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center text-decoration-none p-0"
          >
            <img
              src={logo}
              alt="AGC Logistics Logo"
              width={250}
              height={50}
            />

          </Link>

          {/* --- MOBILE TOGGLER BUTTON --- */}
          <button
            className="navbar-toggler top"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* --- RIGHT SIDE (Nav Links + Button) --- */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="mainNavbar"
          >
            <ul className="nav-links navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item top">
                <Link
                  href="/"
                  className={`nav-link ${currentRoute === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item top">
                <Link
                  href="/aboutus"
                  className={`nav-link ${currentRoute === '/aboutus' ? 'active' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item  top">
                <Link
                  href="/impact"
                  className={`nav-link ${currentRoute === '/impact' ? 'active' : ''}`}
                >
                  Impact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  href="/careers"
                  className={`nav-link ${currentRoute === '/careers' ? 'active' : ''}`}
                >
                  Careers
                </Link>
              </li> */}
              <li className="nav-item  top">
                <Link
                  href="/services"
                  className={`nav-link ${currentRoute === '/services' ? 'active' : ''}`}
                >
                  Services
                </Link>
              </li>
            </ul>
            
            <li className='top'>
              <Link href="/contact" className="contact-btn   ms-lg-3">
                Contact
              </Link>
            </li>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;