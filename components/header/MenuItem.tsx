import { motion } from "framer-motion";
import * as React from "react";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    zIndex: 50,
    display: "flex",
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    zIndex: 0,
    display: "none",
  },
};

const headerItems = [
  {
    name: "Testimonials",
    href: "testimonials",
    number: 1,
  },
  {
    name: "About",
    href: "about",
    number: 2,
  },
  {
    name: "Skills",
    href: "skills",
    number: 3,
  },
  {
    name: "Work",
    href: "work",
    number: 4,
  },
  {
    name: "Contact",
    href: "contact",
    number: 5,
  },
];

const MenuItem: React.FC = () => {
  return (
    <motion.ul
      className="list-none flex-col mb-5 pt-5 flex pl-10 bg-bgblue min-h-screen mt-0 -mr-10 space-y-5 backdrop-blur-md"
      variants={variants}
    >
      {headerItems.map((item, i) => (
        <li
          key={i}
          className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen"
        >
          <Link
            activeClass="active"
            to={item.href}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href={item.href}
          >
            <span className="text-neongreen">{item.number}. </span>
            {item.name}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default MenuItem;
