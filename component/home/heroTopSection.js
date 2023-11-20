import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { useSpring, animated } from "react-spring";

export default function HeroTopSection() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const imageSpring = useSpring({
    transform: `translate3d(${mousePosition.x / 10}px, ${
      mousePosition.y / 10
    }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
  });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const scrollToPortfolio = () => {
    scroll.scrollTo("#portfolio", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <div className='hero-section' onMouseMove={handleMouseMove}>
        <div className='container-large w-container'>
          <div className='w-layout-grid hero-grid'>
            <div className='hero-content'>
              <div className='hero-text-wrapper'>
                <h1 className='heading'>
                  HI, I’M YUNUS,
                  <br />
                  Frontend Developer
                </h1>
              </div>
              <div className='hero-buttons'>
                <a
                  href='#portfolio'
                  className='main-button w-inline-block'
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}>
                  <div className='button-line' />
                  <div className='button-text'>view portfolio</div>
                </a>
                <a
                  href='/contact'
                  className='main-button margin w-inline-block'
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}>
                  <div className='button-line' />
                  <div className='button-text'>contact me</div>
                </a>
              </div>
            </div>

            <div className='hero-content'>
              <animated.div
                className='circle-background'
                style={{
                  willChange: "transform",
                  ...imageSpring,
                }}>
                <img
                  src='../../images/hero-image.jpg'
                  loading='lazy'
                  srcSet='../../images/hero-image.jpg 500w, ../../images/hero-image.jpg 800w, ../../images/hero-image.jpg 1080w, ../../images/hero-image.jpg 1600w'
                  sizes='(max-width: 479px) 99vw, (max-width: 767px) 86vw, (max-width: 991px) 87vw, 450.0000305175781px'
                  alt=''
                  className='hero-image'
                />
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
