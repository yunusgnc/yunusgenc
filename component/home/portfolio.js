import React from "react";
import { useSpring, animated } from "react-spring";

const imageArray = [
  {
    id: "ginger-beer",
    title: "Ginger beer",
    category: "User Research",
    imageUrl:
      "https://uploads-ssl.webflow.com/632795fd71dcac32452510f1/632795fd71dcac1c54251116_mae-mu-lOcmd4iJjpM-unsplash.jpg",
  },
  {
    id: "square",
    title: "Square",
    category: "Product design",
    imageUrl:
      "https://uploads-ssl.webflow.com/632795fd71dcac32452510f1/632795fd71dcac28ec251112_cierra-henderson-LWIQp-0_b98-unsplash.jpg",
  },
  {
    id: "focus",
    title: "Focus",
    category: "Digital design",
    imageUrl:
      "https://uploads-ssl.webflow.com/632795fd71dcac32452510f1/632795fd71dcac4e8725110e_team-fredi-oEICMnQk9TM-unsplash.jpg",
  },
  {
    id: "air-palm",
    title: "Air palm",
    category: "Visual Identity",
    imageUrl:
      "https://uploads-ssl.webflow.com/632795fd71dcac32452510f1/632795fd71dcac1ffb25110a_autri-taheri-k4CvkfS5CtA-unsplash.jpg",
  },
  {
    id: "fruitica",
    title: "Fruitica",
    category: "Product design",
    imageUrl:
      "https://uploads-ssl.webflow.com/632795fd71dcac32452510f1/632795fd71dcacf71c251104_davisuko-5E5N49RWtbA-unsplash.jpg",
  },
  {
    id: "re-think",
    title: "Re-think",
    category: "UX design",
    imageUrl:
      "https://uploads-ssl.webflow.com/632795fd71dcac32452510f1/632795fd71dcac0650251102_daniel-korpai-bOKIptPzdPk-unsplash.jpg",
  },
];

export default function Portfolio() {
  const imageSprings = imageArray.map((image) => {
    const [hovered, setHovered] = React.useState(false);
    const imageSpring = useSpring({
      transform: `scale(${hovered ? 1.1 : 1})`,
    });

    return (
      <div key={image.id} className='portfolio-item w-dyn-item'>
        <a
          href={`/portfolio/${image.id}`}
          className='portfolio-link w-inline-block'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <animated.img
            src={image.imageUrl}
            loading='lazy'
            alt={image.title}
            sizes='(max-width: 479px) 96vw, 48vw'
            srcSet={`${image.imageUrl} 500w, ${image.imageUrl} 800w, ${image.imageUrl} 1080w, ${image.imageUrl} 1600w, ${image.imageUrl} 1920w`}
            className='portfolio-image'
            style={imageSpring}
          />
          <div className='portfolio-content'>
            <h3 className='portfolio-heading'>{image.title}</h3>
            <div className='portfolio-subheading'>{image.category}</div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div>
      <div className='section'>
        <div className='container-large w-container'>
          <div id='portfolio' className='heading-wrapper'>
            <h2>portfolio</h2>
          </div>
          <div className='portfolio-wrapper w-dyn-list'>
            <div role='list' className='portfolio-grid w-dyn-items'>
              {imageSprings}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
