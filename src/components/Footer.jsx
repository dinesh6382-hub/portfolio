import React from "react";
import {FaXTwitter, FaLinkedin ,FaSquareBehance } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "",
    icon: <FaInstagramSquare size={24} />,
    color: "#E1306C",
  },
  {
    href: "https://www.linkedin.com/in/dinesh-k-641971259/",
    icon: <FaLinkedin size={24} />,
    color: "#0077B5",
  },
    {
    href: "https://www.behance.net/dineshkd1",
    icon: <FaSquareBehance size={24} />,
    color: "#2c48b8",
  },
    {
    href: "https://www.linkedin.com/in/vishnu6382",
    icon: <IoIosMail size={24} />,
    color: "#00ffb3",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      {socialLinks.map((link, idx) => (
        <motion.a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, color: link.color }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </footer>
  );
};

export default Footer;
