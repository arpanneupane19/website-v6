export interface Project {
  title: string;
  desc: string;
  technologiesUsed: Array<string>;
  image: string;
  projectLink: string;
  gitLink: string;
  alt: string;
  width: number;
  height: number;
}

export const completedProjects: Project[] = [
  {
    title: "Bloggy",
    desc: "Bloggy is a blog-posting platform built using Python, Flask, HTML/CSS, and JavaScript. Users can login, create & manage posts, like posts, search & follow users, and also message users! Messaging is possible with Socket.io.",
    technologiesUsed: ["Python", "Socket.io", "SQL"],
    image: "/projectImgs/bloggy.png",
    projectLink: "",
    gitLink: "https://github.com/arpanneupane19/bloggy-webapp",
    alt: "Bloggy",
    width: 250,
    height: 230,
  },
  {
    title: "Chattr",
    desc: "Chattr is a team communication platform built using Python, Flask, and UIkit. Users can login/register, create & manage teams, invite others, and message each other! Messaging is possible with Socket.io.",
    technologiesUsed: ["Python", "Socket.io", "UIkit"],
    image: "/projectImgs/chattr.png",
    projectLink: "",
    gitLink: "https://github.com/arpanneupane19/Chattr",
    alt: "Chattr",
    width: 250,
    height: 230,
  },
  {
    title: "PodMaster",
    desc: "PodMaster is a podcast-hosting platform. It can be used to upload and promote podcasts! It was built using Python, Flask, and React. Users can login, create & manage podcasts, follow users, and like & comment on podcasts!",
    technologiesUsed: ["Python", "React", "Tailwind"],
    image: "/projectImgs/podmaster.png",
    projectLink: "",
    gitLink: "https://github.com/arpanneupane19/PodMaster",
    alt: "PodMaster",
    width: 250,
    height: 230,
  },
  {
    title: "Elkins Newswire",
    desc: "Elkins Newswire is a platform I developed for my school newspaper. This application enables the students at my school to view the latest news and updates regarding our school, as well as any opportunities that may benefit students.",
    technologiesUsed: ["Python", "React", "Tailwind"],
    image: "/projectImgs/newswire.svg",
    projectLink: "https://knightsnewswire.onrender.com/",
    gitLink: "",
    alt: "Elkins Newswire",
    width: 250,
    height: 250,
  },
  {
    title: "NodeLink",
    desc: "NodeLink is a way for users to connect to audiences with one link. Built using Node.js and React, users can simply register and have a website created for them. Users can customize their site and add links for their audiences.",
    technologiesUsed: ["React", "Node", "Tailwind"],
    image: "/projectImgs/nodelink.png",
    projectLink: "",
    gitLink: "https://github.com/arpanneupane19/NodeLink",
    alt: "NodeLink",
    width: 250,
    height: 230,
  },
  {
    title: "SecuroChat",
    desc: "SecuroChat is a private messaging platform created using React and Node.js. Users can create chat rooms and invite friends to join and chat with them. Pop-up notifications appear for certain events as well. Messaging is possible with Socket.io.",
    technologiesUsed: ["React", "Node", "Socket.io"],
    image: "/projectImgs/securochat.png",
    projectLink: "",
    gitLink: "https://github.com/arpanneupane19/SecuroChat-v3",
    alt: "SecuroChat",
    width: 250,
    height: 230,
  },
  {
    title: "Weather Wizard",
    desc: "Weather Wizard is a weather app created using React and React Native for web and mobile versions, respectively. Users may search any city, and the app will instantly display the weather information for that city.",
    technologiesUsed: ["React", "React Native", "Expo"],
    image: "/projectImgs/weatherwiz.png",
    projectLink: "https://weatherwizard.vercel.app/",
    gitLink: "https://github.com/arpanneupane19/Weather-Wizard-Web",
    alt: "Weather Wizard",
    width: 250,
    height: 230,
  },
  {
    title: "This Website",
    desc: "This is my personal portfolio website. I built this website using Next.js (React) and Tailwind CSS.",
    technologiesUsed: ["React", "Next.js", "Tailwind"],
    image: "/projectImgs/website.png",
    projectLink: "",
    gitLink: "https://github.com/arpanneupane19/website-v6",
    alt: "This Website",
    width: 250,
    height: 230,
  },
];
