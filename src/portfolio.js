/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Yonieq Praba Saputra",
  title: "Hi all, I'm Yonieq",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs /Flutter / Laravel and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Gq3z8J2u6g-hQ8pLNUdt0vpWZn0aO0Fc/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yonieq",
  linkedin: "https://www.linkedin.com/in/yonieq-praba-saputra-335351170/",
  gmail: "yonieqpraba@gmail.com",
  whatsapp: "https://wa.me/6282323689258",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13858368/yonieq-praba",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A FULL STACK DEVELOPER THAT HURTS FOR SCIENCE WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Laravel", //Insert stack or technology you have experience in
      progressPercentage: "100%", //Insert relative proficiency in percentage
    },
    {
      Stack: "ReactJS",
      progressPercentage: "90%",
    },
    {
      Stack: "VueJS",
      progressPercentage: "96%",
    },
    {
      Stack: "Flutter",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Implementator System",
      company: "CV. Karya Surya Gemilang",
      companylogo: require("./assets/images/company.png"),
      date: "March 2018 – June 2018",
      desc: "System implementation to user to user.",
      descBullets: [
        "Edukasi Sistem SIMRS",
        "Coaching",
        "Maintenance",
        "Error Handling",
      ],
    },
    {
      role: "Backend Developer",
      company: "PT. Surya Rahayu Indonesia",
      companylogo: require("./assets/images/company.png"),
      date: "August 2019 – June 2021",
      desc: "I am a software developer building an API for the social assistance SIMRS application.",
    },
    {
      role: "Software Engineer",
      company: "PT. Hebros",
      companylogo: require("./assets/images/company.png"),
      date: "December 2021 – December 2022",
      desc: "I build an application from scratch using Laravel and VueJS",
      descBullets: [
        "CREATE AND DESIGN AN APPLICATION FOR CCTV RECORDING MANAGEMENT",
        "CREATING AND DESIGNING APPLICATION APPLICATIONS, SUBMISSIONS FOR PURCHASE OF GOODS",
        "MAKE A CLIENT TICKETING APPLICATION",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "PT. Yubi Tecknologi",
      companylogo: require("./assets/images/company.png"),
      date: "January 2022 – Until Now",
      desc: "I develop and create an ERP (Enterprise Resource Planning) application, POS sales, and others. Using Laravel, VueJS and Flutter.",
      descBullets: [
        "CREATE A CRM SYSTEM APPLICATION",
        "CREATING ERP SYSTEM APPLICATIONS",
        "CREATING QUEUE SYSTEM APPLICATION FOR RESTAURANT",
        "MAKE A POINT OF SALES SYSTEM APPLICATION",
        "CREATE A ERP SYSTEM APPLICATION",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Experiences Project",
  subtitle: "This is a project that I have designed and made.",
  projects: [
    {
      image: require("./assets/images/catering.png"),
      projectName: "E-catering Bintang Rasa",
      projectDesc: "Pemesanan Makanan Online Catering",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bintangrasacatering.herokuapp.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/klinik.png"),
      projectName: "E-Klinik Pratama",
      projectDesc:
        "Sistem Management Klinik Pratama Politeknik Harapan Bersama Tegal",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://niqklinik.herokuapp.com/",
        },
      ],
    },
    {
      image: require("./assets/images/ebantuan.png"),
      projectName: "Sambang Bansos",
      projectDesc: "Sistem Management Bantuan Sosial",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ebantuan.herokuapp.com/",
        },
      ],
    },
    {
      image: require("./assets/images/golapak.png"),
      projectName: "GoLapak",
      projectDesc: "Sistem Pemesanan Lapak daerah Kab. Tegal",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://golapak.store/",
        },
      ],
    },
    {
      image: require("./assets/images/pcb.png"),
      projectName: "S-ERP System",
      projectDesc:
        "System Enterprise Resource Planning (ERP) for speacialist for sales and marketing",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://golapak.store/",
        },
      ],
    },
    {
      image: require("./assets/images/p-erp.png"),
      projectName: "P-ERP System",
      projectDesc:
        "System Enterprise Resource Planning (ERP) for speacialist for production",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://golapak.store/",
        },
      ],
    },
    {
      image: require("./assets/images/pos.png"),
      projectName: "POS System",
      projectDesc:
        "Point of Sales System for Restaurant, Cafe, Mini Market, etc",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://golapak.store/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Project",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  projects: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(0823) 2368 9258",
  email_address: "yonieqpraba@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
