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
  inspection,
  outage,
  library,
  insuranceApi,
  portfolio,
  inxhi,
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
  "I am a results-driven Software Engineer with over five years of experience specializing in .NET, Angular, and Azure DevOps. I am passionate about streamlining software delivery through robust CI/CD pipelines, ensuring seamless builds, testing, and deployments. My expertise spans building scalable web applications, integrating complex APIs, and designing intuitive user interfaces using React, Angular, and Blazor. Additionally, I leverage Terraform for Infrastructure as Code (IaC) to manage secure and scalable Azure environments. I thrive at the intersection of DevOps and development, building reliable, high-performance solutions that drive real-world impact.";

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
    title: "Software Engineer",

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

export const projects = [
  {
    name: "Field Service Management System",

    description:
      "Enterprise platform for managing field technicians, work orders, and invoicing. Built with Angular and .NET 8, integrated with Azure Service Bus, Azure Functions, and Azure AD for secure, scalable operations with centralized monitoring.",

    tags: [
      { name: "Angular 17", color: "angular-text-gradient" },
      { name: ".NET 8", color: "dotnet-text-gradient" },
      { name: "Azure Service Bus", color: "azure-servicebus-text-gradient" },
      { name: "Azure AD", color: "azure-text-gradient" },
    ],

    image: fsm,
  },

  {
    name: "EVN Online",

    description:
      "Customer web platform for electricity bill management, payments, and service requests, built with Angular and .NET 8 REST APIs.",

    tags: [
      { name: "Angular 17", color: "angular-text-gradient" },
      { name: ".NET 8", color: "dotnet-text-gradient" },
      { name: "SQL Server", color: "sqlserver-text-gradient" },
    ],

    image: evnonline,
    source_code_link: "https://evnonline.mk/index/evnhome",
  },

  {
    name: "Customer Service Portal",

    description:
      "Blazor WebAssembly portal for managing electricity service requests with Azure AD authentication and structured backend workflows.",

    tags: [
      { name: "Blazor WebAssembly", color: "blazor-text-gradient" },
      { name: ".NET 8", color: "dotnet-text-gradient" },
      { name: "Azure AD", color: "azure-text-gradient" },
    ],

    image: dso,
    source_code_link: "https://online.elektrodistribucija.mk/",
  },

  {
    name: "Inspection & Asset Management",

    description:
      "Internal system for managing infrastructure assets and inspections, integrated with Power BI dashboards for operational insights.",

    tags: [
      { name: "Blazor Server", color: "blazor-text-gradient" },
      { name: "MudBlazor", color: "pink-text-gradient" },
      { name: "Power BI", color: "powerbi-text-gradient" },
    ],

    image: inspection,
  },

  {
    name: "Outage Analytics Platform",

    description:
      "Analytics platform providing statistical insights on electricity outages to support planning and faster incident response.",

    tags: [
      { name: "Blazor", color: "blazor-text-gradient" },
      { name: ".NET 8", color: "dotnet-text-gradient" },
      { name: "Data Visualization", color: "pink-text-gradient" },
    ],

    image: outage,
  },

  {
    name: "Library Management System",

    description:
      "Full-stack academic project for managing books, users, and borrowing workflows with role-based access control.",

    tags: [
      { name: "Spring Boot 3", color: "spring-text-gradient" },
      { name: "Angular 17", color: "angular-text-gradient" },
      { name: "PostgreSQL", color: "postgresql-text-gradient" },
    ],

    image: library,
    source_code_link: "https://github.com/mkjasha/Library-Management-System",
  },
  { name: "Personal Portfolio", description: "My personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies, responsive design, and interactive UI components to highlight my work effectively.", tags: [{ name: "React.js", color: "blue-text-gradient" }, { name: "Tailwind CSS", color: "pink-text-gradient" }, { name: "TypeScript", color: "orange-text-gradient" }, { name: "GSAP", color: "green-text-gradient" },], image: portfolio, source_code_link: "https://github.com/hamzajashari/portfolio", },
  {
    name: "Inxhi Çejz",

    description:
      "E-commerce platform for Albanian heritage products (çejz), built with Astro 5 and React 19. Features a headless CMS via Contentful, full Albanian localization targeting the Skopje market.",

    tags: [
      { name: "Astro 5", color: "orange-text-gradient" },
      { name: "React 19", color: "blue-text-gradient" },
      { name: "Contentful CMS", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
    ],

    image: inxhi,
    source_code_link: "https://inxhi.com/",
  },

  {
    name: "Insurance Claims Management API",

    description:
      "ASP.NET Core Web API built with Clean Architecture for managing insurance claims, featuring background processing with Azure Service Bus.",

    tags: [
      { name: "ASP.NET Core", color: "dotnet-text-gradient" },
      { name: "Azure Service Bus", color: "azure-servicebus-text-gradient" },
      { name: "Clean Architecture", color: "architecture-text-gradient" },
    ],

    image: insuranceApi,
    source_code_link: "https://github.com/hamzajashari/Insurance",
  },
];