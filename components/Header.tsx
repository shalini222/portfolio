import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useDimensions } from "../hooks/useDimensions";
import MenuToggle from "./header/MenuToggle";
import { Navigation } from "./header/Navigation";
import Logo from "./Logo";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

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

  return (
    <nav
      className={`px-8 md:px-24 fixed bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full top-0 z-50 md:flex justify-between items-center ${
        handleShow ? "shadow-2xl" : "md:py-3"
      }`}
    >
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        href="intro"
      >
        <Logo className="cursor-pointer" />
      </Link>

      <motion.nav
        className="absolute left-0 w-full top-0 md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <ol className="hidden space-x-8 md:flex">
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
      </ol>
    </nav>
  );
};

export default Header;
