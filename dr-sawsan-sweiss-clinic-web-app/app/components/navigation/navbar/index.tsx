"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Bars4Icon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <>   
      {/* Primary Expanding Navigation Bar */}
      <div className={`overflow-x-hidden w-full bg-bg_secondary transition-all duration-500 ease-in-out sticky top-0 ${isExpanded ? 'h-[100vh]' : 'h-[72px]'}`}>
        
        {/* Logo + Left Expanding Content */}
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="inline-block absolute top-0 left-4 z-20 cursor-pointer" onClick={isExpanded ? toggleNavbar : undefined}>
            <Logo />
          </div>
          
          <div className={`absolute inset-0 flex items-center transition-transform ease-in-out ${isExpanded ? 'translate-x-20 duration-1000' : '-translate-x-full duration-200'}`}>
            <ul className="font-roboto text-link_primary font-bold text-5xl space-y-10">
              <li className="hover:translate-x-4 duration-300"><Link href="/about" className="cursor-pointer" onClick={toggleNavbar}>Meet the Dentist</Link></li>
              <li className="hover:translate-x-4 duration-300"><Link href="/services" className="cursor-pointer" onClick={toggleNavbar}>Services</Link></li>
              <li className="hover:translate-x-4 duration-300"><Link href="/gallery" className="cursor-pointer" onClick={toggleNavbar}>Gallery</Link></li>
              <li className="hover:translate-x-4 duration-300"><Link href="/appointments" className="cursor-pointer" onClick={toggleNavbar}>Book Appointment</Link></li>
              <Link href="/contact"><p className={`hover:translate-x-2 duration-300 font-roboto text-link_primary text-xl absolute bottom-8 flex`}> Contact </p></Link>
            </ul>
          </div> 
        </div>

        {/* Right Expanding Content */}
        <div className={`absolute top-0 right-0 bg-bg_primary transition-all duration-500 ease-in-out ${isExpanded ? 'w-[40vw]' : 'w-0'} h-full`}>
          <ul className={`flex flex-col ml-14 justify-center h-full font-roboto text-base text-link_primary font-bold text-5xl space-y-10 ${isExpanded ? 'opacity-100 duration-1000' : 'opacity-0 duration-200'}`}>
            <li>Featured from Blog</li>

            <li>
              <Image src="/images/placeholder.png" alt="placeholder" width={250} height={250} className="relative" />
            </li>

            <li>
              <Image src="/images/placeholder.png" alt="placeholder" width={250} height={250} className="relative" />
            </li>

            <li>
              <Link href="/gallery" className= "inline-flex group">
                <span className="flex items-center transition-transform duration-300 transform group-hover:translate-x-2">
                  See Gallery
                  <ChevronRightIcon className="h-5 stroke-current ml-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                </span>
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Bar / X Icon */}
        <div className="inline-block fixed top-0 right-6 p-4 z-10">
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