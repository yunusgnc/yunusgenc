import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`navbar-no-shadow ${isMenuOpen ? "menu-open" : ""}`}>
        <div
          data-animation='default'
          data-collapse='medium'
          data-duration={400}
          data-easing='ease'
          data-easing2='ease'
          role='banner'
          className='navbar-no-shadow-container w-nav'>
          <div className='container-regular'>
            <div className='navbar-wrapper'>
              <Link
                href='/'
                className='navbar-brand w-nav-brand'
                aria-label='home'>
                <img
                  src='../../images/logo.png'
                  loading='lazy'
                  alt=''
                  className='logo'
                  width={50}
                  height={50}
                />
              </Link>
              <nav role='navigation' className={`nav-menu-wrapper w-nav-menu `}>
                <ul role='list' className='nav-menu w-list-unstyled'>
                  <li>
                    <Link
                      href='/'
                      className={`nav-link ${pathname === '/' ? 'w--current' : ''}`}
                      aria-label='home'>
                      work
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href='/about' 
                      className={`nav-link ${pathname.startsWith('/about') ? 'w--current' : ''}`}>
                      about
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href='/contact' 
                      className={`nav-link ${pathname.startsWith('/contact') ? 'w--current' : ''}`}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className='menu-button w-nav-button'
                style={{ WebkitUserSelect: "text" }}
                aria-label='menu'
                role='button'
                tabIndex={0}
                aria-controls='w-nav-overlay-0'
                aria-haspopup='menu'
                aria-expanded='false'
                onClick={toggleMenu}>
                <div className='w-icon-nav-menu' />
              </div>
            </div>
          </div>
          <div
            className={`w-nav-overlay  ${isMenuOpen ? "menu-open" : ""}`}
            data-wf-ignore=''
            id='w-nav-overlay-0'>
            <nav
              role='navigation'
              className={`nav-menu-wrapper  ${isMenuOpen ? "" : "w-nav-menu"}`}>
              <ul
                role='list'
                className='nav-menu w-list-unstyled d-none-mobile'>
                <li>
                  <Link
                    href='/'
                    className={`nav-link ${pathname === '/' ? 'w--current' : ''}`}
                    aria-label='home'>
                    work
                  </Link>
                </li>
                <li>
                  <Link 
                    href='/about' 
                    className={`nav-link ${pathname.startsWith('/about') ? 'w--current' : ''}`}>
                    about
                  </Link>
                </li>
                <li>
                  <Link 
                    href='/contact' 
                    className={`nav-link ${pathname.startsWith('/contact') ? 'w--current' : ''}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
