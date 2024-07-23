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
      {/* Primary Expanding Tab */}
      <div className={`w-full bg-bg_primary transition-all duration-500 ease-in-out sticky top-0 ${isExpanded ? 'h-[100vh]' : 'h-[72px]'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="inline-block absolute top-0 left-4 z-10 cursor-pointer" onClick={isExpanded ? toggleNavbar : undefined}>
            <Logo />
          </div>
          
          <div className={`absolute inset-0 flex items-center transition-transform ease-in-out ${isExpanded ? 'translate-x-20 duration-1000' : '-translate-x-full duration-200'}`}>
            {isExpanded && (
              <ul className="font-roboto text-link_primary font-bold text-5xl space-y-10">
                <li><Link href="/about" className="cursor-pointer" onClick={toggleNavbar}>Meet the Dentist</Link></li>
                <li><Link href="/services" className="cursor-pointer" onClick={toggleNavbar}>Services</Link></li>
                <li><Link href="/gallery" className="cursor-pointer" onClick={toggleNavbar}>Gallery</Link></li>
                <li><Link href="/appointments" className="cursor-pointer" onClick={toggleNavbar}>Book Appointment</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* Expanding Content */}
        <div className={`absolute top-0 right-0 bg-bg_secondary transition-all duration-500 ease-in-out ${isExpanded ? 'w-[40vw]' : 'w-0'} h-full flex items-center justify-center`}>
          {/* {isExpanded && (
            <ul className="font-roboto text-link_primary font-bold text-5xl space-y-10">
              <li><Link href="#">Meet the Dentist</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Gallery</Link></li>
              <li><Link href="#">Book Appointment</Link></li>
            </ul>
          )} */}
        </div>

        {/* Bar / X Icon */}
        <div className="inline-block fixed top-0 right-6 p-4">
          {!isExpanded 
            ? <Bars4Icon className="h-10 w-10 text-border_primary cursor-pointer" onClick={toggleNavbar}/>
            : <XMarkIcon className="h-10 w-10 text-border_primary cursor-pointer" onClick={toggleNavbar}/>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;