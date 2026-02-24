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
    id: "projects",

    title: "Projects",
  },

  {
    id: "contact",

    title: "Contact",
  },
];

export const introduction =
  "Hey there! I'm a software engineer who's spent the last five years getting my hands dirty with .NET, Angular, and Azure DevOps. I love taking the headache out of software delivery—so I set up CI/CD pipelines for every project I touch, making builds, testing, and deployments smooth and automatic. I'm always designing and building web apps, connecting APIs, automating data flows, and creating user interfaces that feel great to use, whether that's in React, Angular, or Blazor. I also roll up my sleeves with Terraform to set up Azure services, so cloud infrastructure is a breeze and can grow with your needs. My favorite part? Blending DevOps, cloud know-how, and development skills to build solutions that just work—reliably, efficiently, and in ways that make a real difference.";

export const services = [
  {
    title: "Software Engineer",

    icon: web,

    description:
      "Designing and building web applications with .NET Core, Angular, React, and Blazor, delivering scalable and responsive solutions.",
  },

  {
    title: "DevOps",

    icon: devops,

    description:
      "Configuring CI/CD pipelines, automated testing, artifact creation, and multi-environment deployments using Azure DevOps.",
  },

  {
    title: "Cloud & Infrastructure",

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
    name: "React JS",

    icon: reactjs,
  },
  {
    name: "TS",

    icon: typescript,
  },
  {
    name: "JavaScript",

    icon: javascript,
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
    name: "Field Service Management System",

    description:
      "Full-stack enterprise application for managing field technicians, work orders, time tracking, and automated invoicing. Designed to optimize operational workflows and reduce manual coordination between dispatchers and field staff.",

    tags: [
      { name: "Angular 17", color: "blue-text-gradient" },

      { name: ".NET 8 Web API", color: "green-text-gradient" },

      { name: "Tailwind CSS", color: "pink-text-gradient" },

      { name: "SQL Server", color: "orange-text-gradient" },
    ],

    image: fsm,
  },

  {
    name: "EVN Online",

    description:
      "Customer-facing web platform enabling electricity bill management, payment tracking, and service requests. Built to improve digital accessibility and streamline customer support processes.",

    tags: [
      { name: "Angular 17", color: "blue-text-gradient" },

      { name: ".NET 8", color: "green-text-gradient" },

      { name: "REST API", color: "pink-text-gradient" },
    ],

    image: evnonline,

    source_code_link: "https://evnonline.mk/index/evnhome",
  },

  {
    name: "Customer Service Portal",

    description:
      "Modern web portal for handling electricity service requests with real-time status tracking and structured backend workflows. Focused on performance, security, and clean architecture principles.",

    tags: [
      { name: "Blazor WebAssembly", color: "blue-text-gradient" },

      { name: ".NET 8", color: "green-text-gradient" },

      { name: "Entity Framework Core", color: "pink-text-gradient" },
    ],

    image: dso,

    source_code_link: "https://online.elektrodistribucija.mk/",
  },

  {
    name: "Inspection & Asset Management",

    description:
      "Internal system for managing infrastructure assets, inspection workflows, and field reporting. Integrated with Power BI dashboards to generate operational analytics and performance insights.",

    tags: [
      { name: "Blazor Server", color: "blue-text-gradient" },

      { name: ".NET 8", color: "green-text-gradient" },

      { name: "MudBlazor", color: "pink-text-gradient" },

      { name: "Power BI", color: "orange-text-gradient" },
    ],

    image: null,
  },

  {
    name: "Outage Analytics Platform",

    description:
      "Data-driven platform providing statistical insights on electricity outages across regions. Built to support infrastructure planning and faster incident response.",

    tags: [
      { name: "Blazor", color: "blue-text-gradient" },

      { name: ".NET 8", color: "green-text-gradient" },

      { name: "Data Visualization", color: "pink-text-gradient" },
    ],

    image: null,
  },

  {
    name: "Library Management System",

    description:
      "Full-stack academic project for managing books, user accounts, borrowing workflows, and reporting. Implemented role-based access control and relational database modeling.",

    tags: [
      { name: "Spring Boot 3", color: "green-text-gradient" },

      { name: "Angular 17", color: "pink-text-gradient" },

      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],

    image: null,
  },
];
