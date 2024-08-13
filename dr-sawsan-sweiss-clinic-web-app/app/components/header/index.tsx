"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../logo";
import { Bars4Icon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHeader = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <>   
      {/* Primary Expanding Navigation Bar */}
      <div className={`overflow-x-hidden z-50 overflow-y-hidden w-full bg-bg_primary transition-all duration-500 ease-in-out backdrop-blur-lg sticky top-0 ${isExpanded ? 'opacity-100 h-[100dvh]' : 'opacity-90 h-[72px]'}`}>
        
        {/* Logo + Left Expanding Content */}
        <div className="container mx-auto px-4 h-full flex items-center justify-between opacity-100">
          <div className="inline-block absolute top-0 left-4 z-20 cursor-pointer" onClick={isExpanded ? toggleHeader : undefined}>
            <Logo />
          </div>
          
          <div className={`absolute inset-0 flex items-center transition-transform ease-in-out ${isExpanded ? 'translate-x-20 duration-1000' : '-translate-x-full duration-200'}`}>
            <ul className="font-roboto text-link_primary font-bold text-5xl space-y-10">
              <li><Link href="/home" className="cursor-pointer inline-block hover:translate-x-4 duration-300" onClick={toggleHeader}>Home</Link></li>
              <li><Link href="/about" className="cursor-pointer inline-block hover:translate-x-4 duration-300" onClick={toggleHeader}>Meet the Dentist</Link></li>
              <li><Link href="/services" className="cursor-pointer inline-block hover:translate-x-4 duration-300" onClick={toggleHeader}>Services</Link></li>
              <li><Link href="/gallery" className="cursor-pointer inline-block hover:translate-x-4 duration-300" onClick={toggleHeader}>Gallery</Link></li>
              <li><Link href="/appointments" className="cursor-pointer inline-block hover:translate-x-4 duration-300" onClick={toggleHeader}>Book Appointment</Link></li>
              <Link href="/contact"><p className={`hover:translate-x-2 duration-300 font-roboto text-link_primary text-xl absolute bottom-8 flex`}> Contact </p></Link>
            </ul>
          </div> 
        </div>

        {/* Right Expanding Content */}
        <div className={`opacity-100 absolute top-0 right-0 bg-bg_secondary transition-transform duration-500 ease-in-out ${isExpanded ? 'translate-x-0' : 'translate-x-full'} h-full w-[40vw]`}>
          <div className={`flex flex-col justify-center h-full font-roboto text-base text-link_primary space-y-10 ${isExpanded ? 'opacity-100 duration-1000' : 'opacity-0 duration-200'}`}>
            <ul className="ml-14 space-y-10">
              <li className="font-bold">Featured from Blog</li>

              <li>
                <Image src="/images/placeholder.png" alt="placeholder" width={250} height={250} className="relative" />
              </li>

              <li>
                <Image src="/images/placeholder.png" alt="placeholder" width={250} height={250} className="relative" />
              </li>

              <li>
                <Link href="/blog" className="inline-flex group" onClick={toggleHeader}>
                  <span className="flex items-center transition-transform duration-300 transform group-hover:translate-x-2">
                    See all Articles
                    <ChevronRightIcon className="h-5 stroke-current ml-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                  </span>
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-4 absolute bottom-8 right-16">
              <Link href="https://www.facebook.com/Dr.SawsanSweiss" target="_blank" className="text-black hover:text-blue-800">
                <i className="fab fa-facebook-f fa-lg"></i>
              </Link>
              <Link href="https://www.instagram.com/sweisssawsan/" target="_blank" className="text-black hover:text-pink-700">
                <i className="fab fa-instagram fa-lg"></i>
              </Link>
              <Link href="https://linkedin.com/in/sawsan-sweiss-72259916b" target="_blank" className="text-black hover:text-blue-900">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>


        {/* Bar / X Icon */}
        <div className="opacity-100 inline-block fixed top-0 right-6 p-4 z-10">
          {!isExpanded 
            ? <Bars4Icon className="h-10 w-10 text-border_primary cursor-pointer" onClick={toggleHeader}/>
            : <XMarkIcon className="h-10 w-10 text-border_primary cursor-pointer" onClick={toggleHeader}/>
          }
        </div>
      </div>
    </>
  );
};

export default Header;