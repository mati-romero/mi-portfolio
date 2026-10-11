import gama from "../../assets/images/jobs/gama.jpeg";
import ucc from "../../assets/images/jobs/ucc.jpeg";
import traychi from "../../assets/images/jobs/traychi.jpg";
import vicentina from "../../assets/images/jobs/vicentina.png";

const jobs = [
  {
    company: "GAMA S.A.",
    position: "Full Stack Developer",
    startDate: "Aug. 2025",
    endDate: "Set. 2026",
    description:
      "Developed end-to-end features using React, Next.js, Java, Spring Boot, and ASP.NET Core. Developed and integrated APIs and backend services using Hexagonal Architecture, Ports and Adapters, and SOLID principles. Built reusable React components and interfaces and integrated them with backend services. Implemented tests, conducted code reviews, resolved issues, and refactored code. Participated in deployment processes and worked within the Scrum methodology.",
    image: gama,
  },
  {
    company: "Traychi",
    position: "Full Stack Developer",
    startDate: "Nov. 2024",
    endDate: "Aug. 2025",
    description:
      "Developed web interfaces with React and JavaScript using reusable, scalable components. Contributed to migrating applications to Next.js, improving performance and search engine visibility. Integrated APIs and collaborated with the backend team using Spring Boot. Worked with Scrum, using Git for version control and Jira to manage development.",
    image: traychi,
  },
  {
    company: "Universidad Católica de Córdoba",
    position: "Full Stack Developer",
    startDate: "Jun. 2022",
    endDate: "May 2025",
    description:
      "Developed internal applications using React, PHP, Laravel, and Symfony, integrating APIs. Participated in the full development lifecycle, from analysis and planning to testing and production deployments. Implemented tests and documented APIs using Postman. Participated in code reviews and issue resolution. Helped digitize and optimize administrative processes through web solutions.",
    image: ucc,
  },
  {
    company: "Fundación Vicentina",
    position: "Web Developer",
    startDate: "Dec. 2020",
    endDate: "Mar. 2024",
    description:
      "Developed and maintained the institutional website using HTML, CSS, Bootstrap, JavaScript, and jQuery. Implemented responsive interfaces and optimized performance to improve accessibility and loading times. Managed hosting, domains, and deployments using Hostinger.",
    image: vicentina,
  },
];

export default jobs;
