import { CardProps } from "../Components/Card/Card";
import { TestimonaiCardProp } from "../Components/TestimonialCard/TestimonialCard";
import images from "../assets/index";

export const skills = [
  {
    name: "Node Js",
    icon: images.node,
  },
  {
    name: "Redux",
    icon: images.redux,
  },
  {
    name: "React",
    icon: images.react,
  },
  {
    name: "Git",
    icon: images.git,
  },
  {
    name: "Sass",
    icon: images.sass,
  },
  {
    name: "HTMl",
    icon: images.html,
  },
  {
    name: "Material UI",
    icon: images.mu5,
  },
  {
    name: "Javascript",
    icon: images.javascript,
  },
  {
    name: "Typescript",
    icon: images.typescript,
  },
  {
    name: "C++",
    icon: images.cpp,
  },
  {
    name: "CSS",
    icon: images.css,
  },
  {
    name: "API",
    icon: images.api,
  },
];

export const experiences = [
  {
    year: "2023",
    works: [
      {
        name: "Mern Stack Developer",
        company: "Codefeast",
      },
      {
        name: "Web Developer",
        company: "Analy Assist",
      },
    ],
  },
];

export const projects: CardProps[] = [
  {
    name: "Modern Ecommerce Platform",
    description: "MERN Stack Complete Ecommerce Platform",
    imgUrl: images.about1,
    codeLink: "https://github.com/Hammad-4846/fog-react/tree/master",
    projectLink: "https://glutenstore.netlify.app",
    title: "Modern Ecommerce Shop",
    index: "1",
  },
  {
    name: "Social Media App",
    description: "MERN Stack Complete Social Media Platform",
    imgUrl: images.about2,
    codeLink: "https://github.com/Hammad-4846",
    projectLink:
      "https://drive.google.com/file/d/1w-7jgnBcIS4H55vK2e_SaO6L2LeaLHT6/view",
    title: "Social Media Platform",
    index: "2",
  },
  {
    name: "Todo App",
    description: "MERN Stack Complete TODO App",
    imgUrl: images.about3,
    codeLink: "https://github.com/Hammad-4846/TODO",
    projectLink:
      "https://www.loom.com/share/11456f2039044a40965a1fbe80ac18df?sid=14da5653-ea9c-4b40-aded-e7e2b46e970e",
    title: "Modern Mern Stack TODO",
    index: "3",
  },
  {
    name: "Real Time Crypto Data App",
    description: "MERN Stack Cryptocurrency App",
    imgUrl: images.about4,
    codeLink: "https://github.com/Hammad-4846/KOIN_Assignment",
    projectLink: "https://koinassignment.netlify.app/",
    title: "Real Time Crypto Data App",
    index: "4",
  },

  {
    name: "Course Selling  Website",
    description: "MERN Stack Course Selling Web App",
    imgUrl: images.about1,
    codeLink: "https://github.com/Hammad-4846",
    projectLink: "https://codefeast.in/",
    title: "MERN Stack Course Selling Web App",
    index: "5",
  },

  {
    name: "Modern Ui Education Web",
    description: "Modern Design Education Website",
    imgUrl: images.about3,
    codeLink: "https://github.com/Hammad-4846",
    projectLink: "https://cuezleseducation.netlify.app",
    title: "Modern Design Education Website",
    index: "6",
  },
];

export const testimonialData: TestimonaiCardProp[] = [
  {
    name: "Arhant",
    description:
      "Hammad was an exceptional hackathon partner, bringing innovative ideas and a strong work ethic to every project. His dedication to teamwork and problem-solving skills were invaluable.",
    owner: "Hackathon Partner",
  },
  {
    name: "Anushka",
    description:
      "Hammad is a highly skilled colleague with a keen eye for detail and a passion for delivering top-notch results. His collaborative nature and commitment to excellence make him a valuable asset to any team.",
    owner: "Web-Developer At Analy Assist",
  },
  {
    name: "Deepak Aggarwal",
    description:
      "As the Head of Web at Analy Assist, I had the pleasure of working closely with Hammad. His leadership abilities, technical expertise, and strong communication skills were essential to the success of our web development projects.",
    owner: "Head At Analy Assist",
  },
  {
    name: "Abhishek Yadav",
    description:
      "Hammad's contributions as a developer at Codefeast were instrumental in driving our startup's growth. His dedication, creativity, and problem-solving abilities consistently exceeded expectations.",
    owner: "Co-Founder of Codefeast",
  },
  {
    name: "Aniket",
    description:
      "I had the privilege of partnering with Hammad during a hackathon, and I was thoroughly impressed by his technical prowess and collaborative spirit. He demonstrated exceptional skills in problem-solving and project execution.",
    owner: "Hackathon Partner",
  },
];
