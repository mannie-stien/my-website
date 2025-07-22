
export const PORTFOLIO_DATA = {
  "personalInfo": {
    "name": "Emmanuel Asiedu Agyare",
    "title": "Full-stack Software Engineer",
    "roles": [
      "Full-stack Engineer",
      "Data Analyst",
      "Technical Project Manager",
      "AI Integration Expert"
    ],
    "email": "asieduagyare@outlook.com",
    "phone": "(208) 970-5045",
    "location": "Pocatello, ID",
    "linkedin": "https://linkedin.com/in/emmanuel-agyare-946a62139",
    "github": "https://github.com/emmanuelagyare",
    "portfolio": "https://emmanuelagyare.dev",
    "profileImage": "https://em-portfolio-tau.vercel.app/static/media/IMG_9673.fe6b515c29d1da9be3bf.jpg"
  },
"summary": "Full-stack engineer specializing in performant, scalable applications with React, Node.js, and Python. With 5+ years of experience, I architect systems that combine technical excellence with business impact - having delivered features that increased user engagement by 35% while maintaining 99.9% uptime. My solutions reduce development time by 50% through clean architectures and modern tooling. Beyond code, I mentor teams to elevate both technical quality and delivery velocity.",  "keyMetrics": [
    {
      "value": "5+",
      "label": "Years Experience",
      "icon": "Briefcase"
    },
    {
      "value": "3k+",
      "label": "Users Served",
      "icon": "Users"
    },
    {
      "value": "35%",
      "label": "Engagement Boost",
      "icon": "TrendingUp"
    },
    {
      "value": "99.9%",
      "label": "System Uptime",
      "icon": "Zap"
    },
    {
      "value": "10+",
      "label": "Projects Delivered",
      "icon": "Award"
    }
  ],
  "skills": {
    "Frontend": {
      "technologies": [
        "React", "Next.js", "TypeScript", "JavaScript", "React Native",
        "Expo", "Angular", "HTML5", "CSS3", "TailwindCSS", "Redux"
      ],
      "proficiency": 95,
      "icon": "Frontend"
    },
    "Backend": {
      "technologies": [
        "Python", "Django", "Node.js", "Express.js", "RESTful APIs", "GraphQL"
      ],
      "proficiency": 90,
      "icon": "Backend"
    },
    "Data, AI & PM": {
      "technologies": [
        "PostgreSQL", "MySQL", "Supabase", "MongoDB", "OpenAI API", "Agile", "Scrum", "Jira"
      ],
      "proficiency": 85,
      "icon": "DataAI"
    },
    "Testing & DevOps": {
      "technologies": [
        "Jest", "Cypress", "TDD", "Docker", "Git", "CI/CD", "AWS", "Cloud Architecture"
      ],
      "proficiency": 88,
      "icon": "PMTools"
    }
  },
  "experience": [
    {
      "id": 1,
      "title": "Software Engineer, Data Analyst, AI Integration Expert",
      "company": "25:2 Solutions LLC",
      "location": "Pocatello, ID",
      "date": "Sep 2021 - Jul 2025",
      "achievements": [
        "Architected and deployed full-stack applications using React, Node.js, and Django, successfully scaling to serve over 3,000 active users",
        "Engineered AI-powered features with the OpenAI API, leading to a 35% increase in user engagement",
        "Developed a cross-platform mobile application with React Native and Expo, accelerating development time by 50%",
        "Optimized RESTful APIs in Node.js, reducing data latency by 20% and improving overall system performance",
        "Containerized the application stack using Docker, which streamlined the deployment process and ensured environmental consistency",
        "Mentored 3 junior engineers in software design patterns and Agile methodologies, boosting team efficiency and code quality"
      ],
      "metrics": {
        "usersServed": 3000,
        "engagementIncrease": 35,
        "developmentTimeReduction": 50,
        "latencyReduction": 20,
        "loadTimeImprovement": 25,
        "teamMentored": 3
      }
    },
    {
      "id": 2,
      "title": "Software Developer",
      "company": "SafeStreets LLC",
      "location": "Rexburg, ID",
      "date": "Jul 2019 - Jan 2021",
      "achievements": [
        "Engineered responsive web applications with Angular and TypeScript, integrating real-time data from Java Spring Boot APIs",
        "Improved page load speeds by 22% by implementing code splitting and lazy loading techniques",
        "Developed a library of reusable frontend and backend components, cutting development time on new features by 15%",
        "Achieved a 99.8% defect-free deployment rate by conducting comprehensive unit testing and debugging"
      ],
      "metrics": {
        "pageLoadImprovement": 22,
        "developmentTimeReduction": 15,
        "defectFreeRate": 99.8
      }
    },
    {
      "id": 3,
      "title": "Software Developer Intern",
      "company": "Alder Holdings LLC",
      "location": "Orem, UT",
      "date": "Jan 2019 - Apr 2019",
      "achievements": [
        "Enhanced application performance by 20% through targeted bug fixes and UI optimizations",
        "Developed internal tools that improved the operational efficiency of client-facing applications",
        "Collaborated with a cross-functional team to translate business requirements into technical solutions"
      ],
      "metrics": {
        "performanceImprovement": 20
      }
    }
  ],
  "projects": [

    {
      "id": 1,
      "title": "Wedding Photo Share",
      "description": "An elegant and intuitive photo-sharing platform designed for wedding guests to upload their moments effortlessly, featuring HEIC-to-JPEG conversion, responsive design, and glassmorphism UI.",
      "technologies": [
        "React",
        "TypeScript",
        "Amazon S3",
        "Tailwind CSS",
        "Framer Motion",
        "Axios",
        "heic2any",
        "uuid",
        "Node.js",
        "Formidable",
        "Vercel"
      ],
      "features": [
        "Multi-file drag-and-drop image upload",
        "HEIC/HEIF to JPEG conversion for compatibility",
        "Glassmorphism UI design with smooth animations",
        "Responsive layout for desktop and mobile",
        "File preview and progress tracking",
        "Toast notifications for upload feedback",
        "Accessible design with ARIA attributes",
        "Post-upload thank you confirmation"
      ],
      "category": "Event Tools",
      "links": {
        "liveDemo": "https://momentshared.vercel.app/",
        "sourceCode": "https://github.com/mannie-stien/MomentShared.git"
      },
      "image": "https://github.com/mannie-stien/em-portfolio/blob/master/src/assets/icons/logo.png?raw=true",
      "metrics": {
        "photosUploaded": 3200,
        "conversionSuccessRate": 99.9,
        "userSatisfaction": 97
      },
      "projectManagement": {
        "teamSize": 2,
        "duration": "4 weeks",
        "methodology": "Agile"
      }
    },
    {
      "id": 2,
      "title": "PickApp - Sports Coordination Platform",
      "description": "A full-stack sports coordination platform with real-time event scheduling, user authentication, and notifications.",
      "technologies": ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      "features": [
        "Real-time event scheduling",
        "User authentication system",
        "Push notifications",
        "Team management",
        "Event coordination"
      ],
      "category": "Full-stack SaaS",
      "links": {
        "live": "https://pickapp-mkpg.vercel.app/",
        "code": "https://github.com/mannie-stien/pickapp.git"
      },
      "image": "https://em-portfolio-tau.vercel.app/static/media/LOGO1.1d9221b4dbcef56f5a0c.jpeg",
      "metrics": {
        "registeredUsers": 50,
        "eventsCreated": 300
      }
    },
    {
      "id": 3,
      "title": "UniConvert",
      "description": "UniConvert is a powerful, all-in-one conversion tool designed to make your life easier. Whether you need to convert time zones, currencies, or units, UniConvert has you covered. It’s fast, intuitive, and works seamlessly across devices.",
      "technologies": ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      "features": [
        "Context-aware AI responses",
        "Seamless webpage integration",
        "Text analysis and translation",
        "Code assistance and debugging"
      ],
      "category": "Full-stack SaaS",
      "links": {
        "live": "https://uni-convert.vercel.app/",
        "code": "https://github.com/mannie-stien/uni-convert.git"
      },
      "image": "https://uni-convert-b3ws.vercel.app/static/media/logo.375c38b0fdb89fd9b432.png",
      "metrics": {
        "activeUsers": 500,
        "rating": 4.8
      }
    },
    {
      "id": 4,
      "title": "Helpi - AI Chrome Extension",
      "description": "An AI-powered Chrome extension for text analysis, translation, and code assistance, published on the Chrome Web Store with active users.",
      "technologies": ["JavaScript", "OpenAI", "HTML/CSS"],
      "features": [
        "Context-aware AI responses",
        "Seamless webpage integration",
        "Text analysis and translation",
        "Code assistance and debugging"
      ],
      "category": "AI/ML Extension",
      "links": {
        "live": "https://chromewebstore.google.com/detail/hajjfdlodcdoadelnabjpbkcniodkkfo?utm_source=item-share-cb",
        "code": "https://github.com/emmanuelagyare/helpi"
      },
      "image": "https://github.com/mannie-stien/helpi-extension/blob/version-0.1.1/assets/store/FINAL-1400.jpeg?raw=true",
      "metrics": {
        "activeUsers": 500,
        "rating": 4.8
      }
    }


  ],
  "education": {
    "degree": "Bachelor of Science in Computer Information Technology",
    "school": "Brigham Young University–Idaho",
    "location": "Rexburg, ID",
    "date": "2018 - 2021",
    "coursework": [
      "Software Engineering",
      "Database Design",
      "Web Development",
      "Data Structures & Algorithms",
      "Project Management"
    ]
  },
  "certifications": [
    {
      "name": "Learning SQL Programming",
      "issuer": "Lynda.com",
      "date": "2018",
      "url": "#"
    },
    {
      "name": "Branding",
      "issuer": "Lynda.com",
      "date": "2018",
      "url": "#"
    },
    // {
    //   "name": "Google Analytics Certified",
    //   "issuer": "Google",
    //   "date": "2023",
    //   "url": "#"
    // }
  ],
  "testimonials": [
    {
      "id": 1,
      "name": "Alex Whitlock",
      "role": "iOS Developer, Remmie Health",
      "content": "It's been awesome working with Emmanuel the past few months. He has been great at QA, as he is incredibly thorough and efficient testing our software, including iOS, frontend, and backend changes. Emmanuel has been able to keep up in a fast paced environment. If you need a fast learning team-player, I would recommend Emmanuel Agyare. ",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQH-GOLGqpav_A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706567018847?e=1755734400&v=beta&t=Sn64B3A_XEj8c-G-CdthtYfJmuO0oZK8mg5IhDdRhNQ"
    },
    {
      "id": 2,
      "name": "Opiriye Prayer Brown",
      "role": "Structural consultant Engineer, Abbibet Consultant, B.Trch,",
      "content": "I commend on the highly organised and well integrated attributes of Emmanuel Agyare having known him for over six years.He is a hard working, dedicated, committed and ready to take task and meet required goal person. Having worked under my watch, I had known him to be one having potentials of an absolute option for a task he is trained for. He has attribute of quick learning, humility and a desire of achievement.I recommend him for a position he herein is interested to service with a rest of assurance that he will deliver in his assigned responsibilities.",
      "image": "https://media.licdn.com/dms/image/v2/C4D03AQEyTiNXoyGTKg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1567112190566?e=1755734400&v=beta&t=OZDsX1rlbuB26xjw6TEGaC2EkRdau2rfs0gVrBPWlJQ"
    },
    {
      "id": 3,
      "name": "Lisa Rodriguez",
      "role": "CTO, Tech Innovations Inc.",
      "content": "Emmanuel's project management skills are outstanding. He successfully led our digital transformation initiative, improving our development velocity by 40% while maintaining excellent code quality.",
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=150&auto=format&fit=crop"
    }
  ],
  "achievements": [
    {
      "title": "Top Performer Award",
      "year": "2024",
      "description": "Recognized for exceptional contribution to company growth and technical innovation."
    },
    {
      "title": "Innovation Excellence",
      "year": "2023",
      "description": "Led development of AI-powered features that increased user engagement by 35%."
    },
    {
      "title": "Team Leadership Recognition",
      "year": "2022",
      "description": "Successfully mentored 3 junior developers, all receiving promotions within 12 months."
    }
  ],
  "hobbies": [
    {
      "name": "Soccer",
      "description": "Fueling teamwork, agility, and strategy through the world's most beloved sport. A high-energy way to stay sharp and connected.",
      "icon": "Soccer"
    },
    {
      "name": "Table Tennis",
      "description": "Fast-paced rallies and precision play — perfect for sharpening reflexes and clearing the mind between coding sprints.",
      "icon": "TableTennis"
    },
    {
      "name": "Movies",
      "description": "Exploring stories, cinematography, and human experiences through film. A relaxing escape and a source of creative inspiration.",
      "icon": "Movies"
    }
  ],

  "socialLinks": {
    "linkedin": "https://linkedin.com/in/emmanuel-agyare-946a62139",
    "github": "https://github.com/mannie-stien",
    "kaggle": "https://kaggle.com/emmanuelagyare"
  }
};
