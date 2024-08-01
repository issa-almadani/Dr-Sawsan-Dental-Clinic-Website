"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { redirect } from 'next/navigation'

export default function Home() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
  };

  const updateDimensions = () => {
    const newHeight = window.innerHeight;
    const newWidth = window.innerWidth;
    setHeight(newHeight);
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-roboto">
      <div className="relative w-full h-full">
        <video 
          ref={videoRef} 
          height={height} 
          muted 
          autoPlay
          onEnded={handleVideoEnded}
          onError={handleVideoEnded}
          className={`z-20 w-full h-full object-cover transition-all duration-1000 ${isVideoEnded ? 'blur' : ''}`}>
          <source src="/videos/introduction.mp4" type="video/mp4" />
          <img 
            src="/images/heroimg.png" 
            alt="hero image of clinic" 
            style={{ width: '100%', height: 'auto' }}
            className={`blur`} />
        </video>

        <div className={`absolute inset-0 bg-slate-800 transition-all duration-1000 ${isVideoEnded ? 'opacity-50' : ' opacity-0'}`}></div>
        
        <div className={`absolute text-text_alternate 
                        transition-opacity duration-1000 ease-in-out 
                        ${isVideoEnded ? 'top-1/3 right-16 opacity-100' : 'opacity-0 hidden'}`}>
          <p className="font-bold text-6xl ">Make Your Dream Smile<br /> a Reality</p>
          <div className="flex text-base">
            <Link href="/services" className="inline-block mt-4 mb-4"><button className="p-3 pr-8 pl-8 border border-black bg-black">Learn About our Services</button></Link>
            <Link href="/appointments" className="inline-block mt-4 ml-4 mb-4"><button className="p-3 pr-8 pl-8 border border-white">Book Appointment</button></Link>
          </div>
        </div>

        <div className={`absolute text-lg text-text_alternate transition-opacity duration-1000 ${isVideoEnded ? 'bottom-1/4 left-24 opacity-100' : 'opacity-0 hidden'}`}>
          <p>From whitening to veneers, our cosmetic treatments are designed<br />to give you the smile of your dreams. Start your transformation<br />today.</p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between text-text_primary pl-[15dvw] pr-[15dvw] pt-[15dvh] pb-[20dvh]">
        <div><p className="text-xl">Bringing Smiles to Life: Discover Our Comprehensive Dental Care Services</p></div>
        <div><p className="font-bold text-6xl">Top Services Offered at the Clinic</p></div>
        <div className="flex items-center justify-between space-x-10">
          <div className="flex flex-col items-center space-y-8 p-4">
            <Image src="/images/placeholder.png" alt="placeholder" width={400} height={250} className="relative" />
            <p className="font-bold text-3xl">Veneers</p>
            <p className="text-base">A veneer is a thin layer of porcelain placed over the front surface of a tooth, to help to reallign or lengthen short teeth, close gaps, or improve color of teeth.</p>
          </div>
          <div className="flex flex-col items-center space-y-8 p-4">
            <Image src="/images/placeholder.png" alt="placeholder" width={400} height={250} className="relative" />
            <p className="font-bold text-3xl">Zirconia Crowns</p>
            <p className="text-base">Zirconia crowns and bridges are highly modifiable, extraordinarily tough, similar to natural teeth, and use no metal fuse. They are a great option for anyone needing to replace teeth.</p>
          </div>
          <div className="flex flex-col items-center space-y-8 p-4">
            <Image src="/images/placeholder.png" alt="placeholder" width={400} height={250} className="relative" />
            <p className="font-bold text-3xl">Whitening</p>
            <p className="text-base">Teeth whitening involves the bleaching of teeth with special agents to lighten teeth color by several shades.</p>
          </div>
          <div>
            <Link href="services" className="inline-block"><ArrowRightCircleIcon className="h-24 stroke-1 stroke-border_alternate ml-1"/></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
