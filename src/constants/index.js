import {
  backend,
  creator,
  mobile,
  web,
  css,
  project2,
  project1,
  project4,
  project5,
  project6,
  project7,
  adobe,
  figma,
  framer,
  wireframe,
  miro,
  photoshop,
  illustrator,
  premiere_pro,
  Bootstrap_logo,
  git,
  html,
  javascript,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,

} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "UI/UX Designer", icon: web },
  { title: "Graphics Designer", icon: mobile },
  { title: "Video Editer", icon: backend },
  { title: "Frontend Developer", icon: creator },
];

const technologies = [


  { name: "figma", icon: figma, percentage: 70 },
  { name: "adobe", icon: adobe, percentage: 70 },
  { name: "framer", icon: framer, percentage: 70 },
  { name: "wireframe CC", icon: wireframe, percentage: 70 },
  { name: "miro", icon: miro, percentage: 70 },
  { name: "photoshop", icon: photoshop, percentage: 70 },
  { name: "illustrator", icon: illustrator, percentage: 70 },
  { name: "premiere_pro", icon: premiere_pro, percentage: 70 },
  { name: "HTML 5", icon: html, percentage: 94 },
  { name: "CSS 3", icon: css, percentage: 84 },
  { name: "JavaScript", icon: javascript, percentage: 76 },
  { name: "Bootstrap_logo", icon: Bootstrap_logo, percentage: 84 },
  { name: "git", icon: git, percentage: 82 },
];

const projects = [
  {
    name: "Phyzo Mobile App",
    description:
      "The Phyzo mobile app makes it easy and trustworthy to buy lab equipment,offering a wide variety of products with secure payments and fast delivery. ",
    tags: [
      { name: "Figma", color: "blue-text-gradient" },
      { name: "Adobe XD", color: "white-text-gradient" },
      { name: "Photoshop", color: "pink-text-gradient" },
      { name: "WireframeCC", color: "green-text-gradient" },
      { name: "Miro", color: "orange-text-gradient" }, 
    ],
    image: project1,
    live_link:
      "https://www.behance.net/gallery/189962259/PHYZO-Mobile-application",
  },
  {
    name: "Careeze Mobile App",
    description:
      "Guidance for career choices is provided through exports (calls & chats) along with a clear, structured map for career and skills development. ",
    tags: [
      { name: "Figma", color: "blue-text-gradient" },
      { name: "Adobe XD", color: "white-text-gradient" },
      { name: "Photoshop", color: "pink-text-gradient" },
      { name: "Miro", color: "orange-text-gradient" }, // Optional: if using JWT
    ],
    image: project2,
    live_link: "https://www.behance.net/gallery/187465825/Careerze-mobile-app",
  },
  {
    name: "Calmyou Mobile App",
    description:
      "Calm You is a mobile app designed to help people relax, reduce stress, and improve sleep through guided meditation, calming music, and breathing exercises. ",
    tags: [
      { name: "Figma", color: "blue-text-gradient" },
      { name: "Premiere Pro", color: "orange-text-gradient" },
      { name: "Photoshop", color: "pink-text-gradient" },
      { name: "Illustrator", color: "orange-text-gradient" }, // Optional: if using JWT
    ],
    image: project4,
    live_link:
      "https://www.behance.net/gallery/227971749/Skyappz-Assessment-(Calm-You-)",
  },

  {
    name: "LearnHub - Website",
    description:
      "Learn Hub is an online platform that uses AI to help students learn faster and better. It gives smart course suggestions based on your learning style. The design is clean and easy to use for all age groups.",
    tags: [
      { name: "Figma", color: "blue-text-gradient" },
      { name: "Adobe XD", color: "orange-text-gradient" },
      { name: "Photoshop", color: "pink-text-gradient" },
      { name: "Illustrator", color: "white-text-gradient" },
    ],
    image: project5,
    live_link:
      "https://www.behance.net/gallery/197228047/LearnHub-E-leaning-Page",
  },
  {
    name: "Admin Panel",
    description:
      "I designed an admin panel for a car service and repair shop. It helps staff manage bookings, customer details, and service updates easily. The layout is clean and simple, so everything is easy to find",
    tags: [
      { name: "Figma", color: "blue-text-gradient" },
      { name: "Adobe XD", color: "white-text-gradient" },
      { name: "Photoshop", color: "pink-text-gradient" },
      { name: "Canva", color: "green-text-gradient" },
      { name: "Miro", color: "orange-text-gradient" },
    ],
    image: project6,
    live_link: "https://www.behance.net/gallery/203399527/Dashboard",
  },
  {
    name: "Italian Cuisine",
    description:
      "I designed a landing page for 'Foodourt', an Italian food website. The page shows delicious dishes like pasta and pizza with big, tasty images. I used warm colors and easy buttons so users can explore and order food easily.",
    tags: [
      { name: "Figma", color: "blue-text-gradient" },
      { name: "Adobe XD", color: "white-text-gradient" },
      { name: "Photoshop", color: "pink-text-gradient" },
    ],
    image: project7,
    live_link: "https://www.behance.net/gallery/187046559/Italian-Cuisine",
  },
];

const graphic = [
  {
    name: "International Medical graduates",
    image: image1,
  },
   {
    name: "Resume Verified Profile App Promote",
    image: image2,
  },
   {
    name: "Degital Admission Poster",
    image: image3,
  },
   {
    name: "Build Your Brand",
    image: image4,
  },
   {
    name: "Aafiya Hotel Promote",
    image: image5,
  },
  {
    name: "Newlife Abroad Graduates",
    image: image6,
  },
  {
    name: "Thin tank Branding ",
    image: image7,
  },
  {
    name: "Calmyou App Promote",
    image: image8,
  },
  {
    name: "Swaragh IT Service",
    image: image9,
  },
];

export { services, technologies, projects, graphic };
