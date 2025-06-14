import React from "react";
import { useSpring, animated } from "react-spring";
import Link from 'next/link';

const portfolioItems = [
  {
    id: "dubertas-nsc",
    title: "Dubertas and NSC",
    category: "Senior Frontend Developer",
    period: "December 2023 - Present",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Leading frontend development for enterprise applications. Key achievements:",
    achievements: [
      "Implemented Atomic Design system for consistent UI components",
      "Reduced page load time by 40% through code optimization",
      "Mentored junior developers and conducted code reviews",
      "Integrated WebSocket for real-time data updates"
    ],
    technologies: ["React.js", "Next.js", "Redux Toolkit", "React Native", "Tailwind CSS"]
  },
  {
    id: "goost-software",
    title: "Goost Software",
    category: "Senior Frontend Developer",
    period: "September 2023 - December 2023",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description: "Spearheaded development of modern web applications. Key achievements:",
    achievements: [
      "Architected scalable frontend infrastructure",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Developed reusable component library",
      "Optimized API integration reducing data fetch time by 50%"
    ],
    technologies: ["Next.js", "React.js", "Redux", "TypeScript", "Jest"]
  },
  {
    id: "modalog",
    title: "MODALOG",
    category: "Frontend Developer",
    period: "September 2022 - September 2023",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Developed and maintained e-commerce platform. Key achievements:",
    achievements: [
      "Increased conversion rate by 25% through UI/UX improvements",
      "Implemented responsive design for all devices",
      "Reduced bundle size by 30% through code splitting",
      "Integrated payment gateway and shipping APIs"
    ],
    technologies: ["Vanilla JS", "jQuery", "Tailwind CSS", ".NET Core", "REST APIs"]
  },
  {
    id: "jarvıs",
    title: "JARVİS Yazılım A.Ş",
    category: "Senior Frontend Developer",
    period: "December 2024 - Present",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Leading frontend development for enterprise solutions. Key achievements:",
    achievements: [
      "Developed comprehensive CMS system",
      "Implemented advanced e-commerce features",
      "Reduced bug reports by 40% through improved testing",
      "Optimized performance for high-traffic applications"
    ],
    technologies: ["React.js", "Redux", "Formik", "Material-UI", "Jest"]
  },
  {
    id: "food-runners",
    title: "The Food Runners",
    category: "Frontend and API Developer",
    period: "July 2022 - April 2024",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Full-stack development for courier application. Key achievements:",
    achievements: [
      "Developed real-time tracking system",
      "Implemented PWA features for offline functionality",
      "Reduced API response time by 45%",
      "Integrated Google Maps API for route optimization"
    ],
    technologies: ["Vue.js", "Nuxt.js", "Vuex", "Node.js", "WebSocket"]
  },
  {
    id: "codonex",
    title: "Codonex",
    category: "Frontend Developer",
    period: "December 2020 - June 2022",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    description: "Developed e-commerce dashboard. Key achievements:",
    achievements: [
      "Implemented SSR for improved SEO",
      "Developed custom data visualization components",
      "Reduced initial load time by 35%",
      "Implemented automated testing reducing bugs by 50%"
    ],
    technologies: ["React.js", "Next.js", "Redux", "Chart.js", "Cypress"]
  }
];

export default function Portfolio() {
  const portfolioSprings = portfolioItems.map((item) => {
    const [hovered, setHovered] = React.useState(false);
    const spring = useSpring({
      transform: `scale(${hovered ? 1.05 : 1})`,
      config: { tension: 300, friction: 20 }
    });

    return (
      <div key={item.id} className='portfolio-item w-dyn-item'>
        <Link
          href={`/portfolio/${item.id}`}
          className='portfolio-link w-inline-block relative overflow-hidden rounded-lg shadow-lg transition-all duration-300'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <animated.div style={spring} className="relative">
            <img
              src={item.imageUrl}
              loading='lazy'
              alt={item.title}
              sizes='(max-width: 479px) 96vw, 48vw'
              srcSet={`${item.imageUrl} 500w, ${item.imageUrl} 800w, ${item.imageUrl} 1080w, ${item.imageUrl} 1600w, ${item.imageUrl} 1920w`}
              className='portfolio-image w-full h-[300px] object-cover transition-all duration-300'
            />
            <div className={`portfolio-content absolute inset-0 p-6 bg-gradient-to-t from-black/90 to-black/50 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className='portfolio-heading text-2xl font-bold mb-3 text-white'>{item.title}</h3>
              <div className='portfolio-subheading text-blue-300 font-semibold mb-2'>{item.category}</div>
              <div className='text-sm text-gray-300 mb-3'>{item.period}</div>
              <p className="portfolio-description mb-4 text-gray-200">{item.description}</p>
              <ul className="list-disc pl-4 mb-4 text-sm text-gray-200">
                {item.achievements.map((achievement, index) => (
                  <li key={index} className="mb-1">{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </animated.div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className='section'>
        <div className='container-large w-container'>
          <div id='portfolio' className='heading-wrapper'>
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          </div>
          <div className='portfolio-wrapper w-dyn-list'>
            <div role='list' className='portfolio-grid w-dyn-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {portfolioSprings}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
