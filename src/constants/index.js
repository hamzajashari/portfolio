import {
  backend,
  bi,
  azure,
  devops,
  web,
  dso,
  evnonline,
  fsm,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  evn,
  qinshift,
  coding,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const introduction =
  "I'm a Software Engineer with over five years of experience working with .NET, Angular, and Azure DevOps. Throughout my career, I've set up CI/CD pipelines for every application I support, making builds, testing, artifact creation, and deployments to multiple environments seamless and automated. My work includes designing and building web applications, integrating APIs, automating data processes, and creating responsive user interfaces with frameworks like React, Angular, and Blazor. I also use Terraform to create and manage Azure services, ensuring cloud infrastructure is both scalable and repeatable. By bringing together DevOps automation, cloud infrastructure expertise, and hands-on development skills, I strive to deliver solutions that are reliable, efficient, and truly impactful.";

  export const services = [
  {
    title: "Full Stack Developer",
    icon: web,
    description:
      "Designing and building web applications with .NET Core, Angular, React, and Blazor, delivering scalable and responsive solutions.",
  },
  {
    title: "DevOps Engineer",
    icon: devops,
    description:
      "Configuring CI/CD pipelines, automated testing, artifact creation, and multi-environment deployments using Azure DevOps.",
  },
  {
    title: "Cloud & Infrastructure Engineer",
    icon: azure,
    description:
      "Creating and managing Azure services using Terraform, ensuring secure, scalable, and repeatable cloud infrastructure.",
  },
];


export const technologies = [
  {
    name: "ASP.NET Core",
    icon: backend, 
  },
  {
    name: "TS",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "SQL Server",
    icon: sql, 
  },
  {
    name: "GitHub",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "EVN",
    icon: evn,
    iconBg: "#ffffff",
    date: "March 2022 - Present",
    points: [
      "Developed and maintained .NET Core and Angular applications, ensuring high performance and clean architecture.",
      "Configured CI/CD pipelines for all applications using Azure DevOps, enabling automated builds, testing, and multi-environment deployments.",
      "Created and managed self-hosted build agents and deployed apps via Docker, Nginx, and IIS with environment-specific configurations.",
      "Implemented Azure AD OAuth 2.0 authentication, secure API access, and event-driven background processing with Azure Functions and Service Bus.",
      "Provisioned Azure infrastructure using Terraform, ensuring scalable, repeatable, and secure cloud environments.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    icon: coding,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Designed and developed responsive web applications using React.js, HTML5, CSS3, and JavaScript/TypeScript.",
      "Collaborated with clients to deliver custom solutions, ensuring cross-browser compatibility and responsive design.",
      "Implemented dynamic front-end features using React Hooks, React Query, and state management patterns.",
      "Participated in code reviews, troubleshooting, and optimization for client projects.",
    ],
  },
  {
    title: "Application Developer Intern",
    company_name: "Qinshift",
    icon: qinshift,
    iconBg: "#ffffff",
    date: "Feb 2022 - Mar 2022",
    points: [
      "Assisted in front-end development using HTML5, CSS3, Sass, and JavaScript, gaining hands-on experience with modern web technologies.",
      "Learned team workflows and contributed to real-world application features under mentorship.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "Field Service Management",
    description:
      "The software includes preparing work orders and sending technicians, monitoring hours and jobs, and invoicing the completed jobs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "net10.0",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fsm,
  },
  {
    name: "EVN Online",
    description:
      "Integrated online service for EVN Home users, designed to simplify receiving and paying electricity bills.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "net core",
        color: "green-text-gradient",
      },
    ],
    image: evnonline,
    source_code_link: "https://evnonline.mk/index/evnhome",
  },
  {
    name: "Customer Portal",
    description:
      "Web application for electricity service requests: Created a seamless interface for users to request services online.",
    tags: [
      {
        name: "blazor",
        color: "blue-text-gradient",
      },
      {
        name: "net10.0",
        color: "green-text-gradient",
      },
    ],
    image: dso,
    source_code_link: "https://online.elektrodistribucija.mk/",
  },
  {
    name: "Inspection",
    description:
      "Project that manages assets, creating work orders for inspections and generating Power BI reports based on field feedback.",
    tags: [
      {
        name: "blazor",
        color: "blue-text-gradient",
      },
      {
        name: "net10.0",
        color: "green-text-gradient",
      },
      {
        name: "mudblazor",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: null,
  },
  {
    name: "Outages",
    description:
      "Statistics across various areas in Macedonia. Providing critical insights for improving infrastructure and response strategies.",
    tags: [
      {
        name: "blazor",
        color: "blue-text-gradient",
      },
      {
        name: "net10.0",
        color: "green-text-gradient",
      },
    ],
    image: null,
    source_code_link: null,
  },
  {
    name: "Library Management System",
    description:
      "Managing library resources, including cataloging, borrowing, and returning books, with user management and reporting features.",
    tags: [
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
    ],
    image: null,
    source_code_link: null,
  },
];

