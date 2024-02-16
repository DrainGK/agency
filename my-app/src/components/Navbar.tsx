"use client"

import React from 'react'
import { motion, useViewportScroll, useScroll } from "framer-motion";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi"

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBeyondThreshold, setIsBeyondThreshold] = useState(false);
  const { scrollY } = useViewportScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateNavState = () => {
      const currentScrollY = scrollY.get();
      const scrollingUp = currentScrollY < lastScrollY;
      const beyondThreshold = currentScrollY > 100;

      // Determine if navbar should be shown
      if (scrollingUp) {
        setShowNav(true);
      } else if (!scrollingUp && currentScrollY > lastScrollY) {
        setShowNav(false);
      }

      // Update whether the scroll is beyond the initial 250px threshold
      setIsBeyondThreshold(beyondThreshold);

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.onChange(updateNavState);

    return () => unsubscribe();
  }, [lastScrollY, scrollY]);

  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 ease-in-out 
      ${showNav ? "translate-y-0" : "-translate-y-full"} 
      ${isBeyondThreshold ? "bg-[#364044]" : "bg-transparent"} z-10`}>
        <div className="w-[100vw] md:w-[78vw] p-6 flex items-center justify-between mx-auto">
            <div className="text-2xl hover:text-[#FFA41B] cursor-pointer">
                Guillaume Dev
            </div>
            <NavLeft setIsOpen={setIsOpen} />
            <NavMenu isOpen={isOpen} />
        </div>
      </nav>
    );
};

export default Navbar
  
  const NavLeft = ({
    setIsOpen,
  }: {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
    return (
      <div className="flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block lg:hidden white text-2xl"
          onClick={() => setIsOpen((pv) => !pv)}
        >
          <FiMenu />
        </motion.button>
        <NavLink text="Home" />
        <NavLink text="Project" />
        <NavLink text="Services" />
        <NavLink text="Contact" />
      </div>
    );
  };
  
  const NavLink = ({ text }: { text: string }) => {
    return (
      <a
        href="#"
        rel="nofollow"
        className="hidden lg:block h-[30px] overflow-hidden font-medium"
      >
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-sm">{text}</span>
          <span className="flex items-center h-[30px] text-[#FFA41B]">
            {text}
          </span>
        </motion.div>
      </a>
    );
  };
  
  const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
    return (
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="absolute p-4 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 bg-[#404C51]"
      >
        <MenuLink text="Home" />
        <MenuLink text="Project" />
        <MenuLink text="Services" />
        <MenuLink text="Contact" />
      </motion.div>
    );
  };
  
  const MenuLink = ({ text }: { text: string }) => {
    return (
      <motion.a
        variants={menuLinkVariants}
        rel="nofollow"
        href="#"
        className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
      >
        <motion.span variants={menuLinkArrowVariants}>
          <FiArrowRight className="h-[30px] text-[#FFA41B] opacity-50" />
        </motion.span>
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] ">{text}</span>
          <span className="flex items-center h-[30px] text-[#FFA41B]">
            {text}
          </span>
        </motion.div>
      </motion.a>
    );
  };
  
  const menuVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const menuLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -10,
      opacity: 0,
    },
  };
  
  const menuLinkArrowVariants = {
    open: {
      x: 0,
    },
    closed: {
      x: -4,
    },
  };