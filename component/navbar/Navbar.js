import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <a
                href='/'
                aria-current='page'
                className='navbar-brand w-nav-brand w--current'
                aria-label='home'>
                <img
                  src='https://uploads-ssl.webflow.com/632795fd71dcac94ab2510ed/632b6c449652bd4417912a49_Logo.webp'
                  loading='lazy'
                  alt=''
                  className='logo'
                />
              </a>
              <nav role='navigation' className={`nav-menu-wrapper w-nav-menu `}>
                <ul role='list' className='nav-menu w-list-unstyled'>
                  <li>
                    <a
                      href='/'
                      aria-current='page'
                      className='nav-link w--current'>
                      work
                    </a>
                  </li>
                  <li>
                    <a href='/about' className='nav-link'>
                      about
                    </a>
                  </li>
                  <li>
                    <a href='/contact' className='nav-link'>
                      Contact
                    </a>
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
                  <a
                    href='/'
                    aria-current='page'
                    className='nav-link w--current'>
                    work
                  </a>
                </li>
                <li>
                  <a href='/about' className='nav-link'>
                    about
                  </a>
                </li>
                <li>
                  <a href='/contact' className='nav-link'>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
