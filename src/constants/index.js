import {
    mobile,
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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    evn,
    qinshift,
    coding,
    sql,
    carrent,
    jobit,
    tripguide,
    threejs,
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
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: devops,
    },
    {
      title: "Cloud Solutions Architect",
      icon: azure, 
    },
    {
      title: "Business Intelligence Developer",
      icon: bi,
    }
  ];
  
  const technologies = [
    {
      name: "ASP.NET Core",
      icon: backend, // Assuming this represents backend technologies.
    },
    {
      name: "TS",
      icon: typescript, // Assuming you don't have a specific C# icon, using a related icon.
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
      name: "Power BI",
      icon: bi,
    },
    {
      name: "SQL Server",
      icon: sql, // Placeholder for database-related technologies.
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
  
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "EVN",
      icon: evn,
      iconBg: "#ffffff",
      date: "March 2022 - Present",
      points: [
        "Developed and implemented JSON data integration from source application to external API for employee use, ensuring accurate asset management and real-time outages.",
        "Integrated Mailjet email delivery and tracking for electricity service requests, ensuring clients and employees benefit from a seamless process for request management and status tracking.",
        "Automated data processing, modeling, and visualization tasks by integrating Excel macros with Power Query and Power BI REST API, facilitating seamless report generation.",
        "Enhanced frontend development efficiency with React, utilizing custom hooks, React Query, and Axios for seamless data fetching and state management.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelancer",
      icon: coding,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Application Developer Intern",
      company_name: "Qinshift",
      icon: qinshift, 
      iconBg: "#ffffff",
      date: "Feb 2022 - Mar 2022",
      points: [
        "Implemented modern web design techniques with HTML5, CSS3, Sass, and JavaScript/jQuery for dynamic functionality.",
      ],
    },
  ];
  const education = [
    {
      school: "University of Saints Cyril and Methodius",
      degree: "Bachelor of Science in Computer Engineering",
      date: "Oct 2018 - Sep 2022",
    },
    {
      school: "EVN Austria Academy",
      certification: "Certified in Requirements Engineering and Project Management",
      date: "Jan 2023",
    },
  ];
  
  const volunteer = [
    {
      role: "Volunteer",
      organization: "Shkupi Chess Club",
      description: "Actively participated as a player and volunteered to teach chess to youngsters, promoting strategic thinking and teamwork skills.",
    },
  ];
  
  const testimonials = [
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
  
  const projects = [
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
          name: "net8.0",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: fsm,
      source_code_link: "https://github.com/hamzajashari",
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
          name: "net6.0",
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
          name: "net6.0",
          color: "green-text-gradient",
        },
        {
          name: "mudblazor",
          color: "pink-text-gradient",
        },
        {
          name: "power-bi",
          color: "yellow-text-gradient",
        },
      ],
      image: null,
      source_code_link: null
    },
    {
      name: "Outages",
      description: "Statistics across various areas in Macedonia. Providing critical insights for improving infrastructure and response strategies.",
      tags: [
        {
          name: "blazor",
          color: "blue-text-gradient",
        },
        {
          name: "net6.0",
          color: "green-text-gradient",
        },
        {
          name: "power-bi",
          color: "yellow-text-gradient",
        },
      ],
      image: null,
      source_code_link: null
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
        }
      ],  
      image: null,
      source_code_link: null
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };