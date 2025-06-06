import React from "react";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer wf-section bg-gray-900 text-gray-200 pt-8 pb-4">
      <div className="container-large w-container mx-auto px-4">
        <div className="w-layout-grid footer-grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
          <div className="footer-content-wrapper mb-6 md:mb-0">
            <p className="paragraph-small font-semibold mb-2 text-white">Contact Me</p>
            <a href="mailto:yunus0261@gmail.com" className="footer-text-link block mb-1 hover:text-blue-400 transition-colors">yunus0261@gmail.com</a>
            <a href="tel:+905377810459" className="footer-text-link block hover:text-blue-400 transition-colors">0537-781-04-59</a>
          </div>
          <div className="footer-content-wrapper mb-6 md:mb-0">
            <Link href="/" className="footer-text-link block mb-1 hover:text-blue-400 transition-colors">work</Link>
            <Link href="/about" className="footer-text-link block mb-1 hover:text-blue-400 transition-colors">about</Link>
            <Link href="/contact" className="footer-text-link block hover:text-blue-400 transition-colors">contact</Link>
          </div>
          <div className="footer-content-wrapper mb-6 md:mb-0">
            <p className="text-white font-semibold mb-2">Skills</p>
            <p className="text-sm text-gray-300 mb-1">Frontend: React.js, Next.js, Vue.js, React Native</p>
            <p className="text-sm text-gray-300 mb-1">State: Redux, Redux Toolkit, Vuex</p>
            <p className="text-sm text-gray-300">UI/UX: Tailwind CSS, Bootstrap, HTML5, CSS</p>
          </div>
          <div className="footer-content-wrapper">
            <a href="https://www.linkedin.com/in/yunus-genc/" target="_blank" rel="noopener noreferrer" className="footer-text-link block mb-1 hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/yunusgnc" target="_blank" rel="noopener noreferrer" className="footer-text-link block hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Yunus Genç. All rights reserved.
        </div>
      </div>
    </div>
  );
}
