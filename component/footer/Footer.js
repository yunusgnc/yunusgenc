import React from "react";

export default function Footer() {
  return (
    <div>
      <div className='footer wf-section'>
        <div className='container-large w-container'>
          <div className='w-layout-grid footer-grid'>
            <div
              id='w-node-_3f5e80f9-0725-93a6-b240-20ce89098d7e-89098d7b'
              className='footer-content-wrapper'>
              <p className='paragraph-small'>
                Designed by
                <a href='https://www.olaweb.design/' target='_blank'>
                  {" "}
                  Olajide Fakorede
                </a>
                . <br />
                Powered by
                <a href='http://www.webflow.com' target='_blank'>
                  Auba
                </a>
              </p>
            </div>
            <div
              id='w-node-_3f5e80f9-0725-93a6-b240-20ce89098d8b-89098d7b'
              className='footer-content-wrapper'>
              <a href='/' className='footer-text-link'>
                work
              </a>
              <a
                href='/about'
                aria-current='page'
                className='footer-text-link w--current'>
                about
              </a>
              <a href='/contact' className='footer-text-link'>
                contact
              </a>
            </div>
            <div
              id='w-node-_3f5e80f9-0725-93a6-b240-20ce89098d92-89098d7b'
              className='footer-content-wrapper'>
              <a href='/template/style-guide' className='footer-text-link'>
                style guide
              </a>
              <a href='/template/licenses' className='footer-text-link'>
                Licenses
              </a>
              <a href='/template/changelog' className='footer-text-link'>
                changelog
              </a>
              <a href='/404' className='footer-text-link'>
                404
              </a>
              <a href='/401' className='footer-text-link'>
                password
              </a>
            </div>
            <div
              id='w-node-_3f5e80f9-0725-93a6-b240-20ce89098d9d-89098d7b'
              className='footer-content-wrapper'>
              <a
                href='http://www.facebook.com'
                target='_blank'
                className='footer-text-link'>
                facebook
              </a>
              <a
                href='http://www.instagram.com'
                target='_blank'
                className='footer-text-link'>
                instagram
              </a>
              <a
                href='http://www.twitter.com'
                target='_blank'
                className='footer-text-link'>
                twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
