import React from "react";
import { useRouter } from "next/router";

// Portfolyo verisini component/home/portfolio.js ile aynı şekilde buraya ekliyoruz
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

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;
  const item = portfolioItems.find((itm) => itm.id === id);

  if (!item) {
    return <div className="p-8 text-center text-red-500 font-bold">Proje bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center ">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-32 h-32 object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-6 flex-shrink-0 border border-gray-200"
        />
        <div className="flex-1 w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900">{item.title}</h1>
          <div className="text-blue-600 font-semibold mb-1 text-base md:text-lg">{item.category}</div>
          <div className="text-gray-500 text-xs md:text-sm mb-3">{item.period}</div>
          <p className="mb-3 text-gray-700 text-sm md:text-base leading-relaxed">{item.description}</p>
          <ul className="list-disc pl-5 mb-3 text-gray-700 text-sm md:text-base">
            {item.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 