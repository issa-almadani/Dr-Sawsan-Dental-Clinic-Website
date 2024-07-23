"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <>   
      <div className={`w-full bg-bg_primary transition-all duration-500 ease-in-out sticky top-0 ${isExpanded ? 'h-[100vh]' : 'h-[72px]'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="inline-block absolute top-0 left-4">
            <Logo />
          </div>
        </div>
      </div>
      <div className={`transition-all duration-500 ease-in-out absolute top-0 right-0 bg-bg_secondary ${isExpanded ? 'w-[40vw]' : 'w-0'} h-full`}></div>
      <div className="inline-block absolute top-0 right-6 p-4">
            {!isExpanded 
              ? <Bars4Icon className="h-10 w-10 text-border_primary cursor-pointer" onClick={toggleNavbar}/>
              : <XMarkIcon className="h-10 w-10 text-border_primary cursor-pointer" onClick={toggleNavbar}/>
            }
      </div>
    </>
  );
};

export default Navbar;

          {/* {isExpanded && (
            <div className="bg-bg_primary px-4 py-2 shadow-lg">
              <nav>
                <ul className="flex flex-col space-y-2">
                  <li><a href="#home" className="text-border_primary hover:text-secondary">Home</a></li>
                  <li><a href="#about" className="text-border_primary hover:text-secondary">About</a></li>
                  <li><a href="#services" className="text-border_primary hover:text-secondary">Services</a></li>
                  <li><a href="#contact" className="text-border_primary hover:text-secondary">Contact</a></li>
                </ul>
              </nav>
            </div>
          )} */}