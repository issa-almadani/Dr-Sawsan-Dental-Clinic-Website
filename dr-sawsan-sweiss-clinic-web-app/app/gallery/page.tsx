"use client"
import React, { useState, useEffect } from "react";
import useSWR from "swr"
import fetcher from "@/utils/fetcher"
import { GalleryImage } from "@/types/galleryImage"
import { MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from "@heroicons/react/24/solid";

const Gallery = () => {
  const { data, error } = useSWR<GalleryImage[]>('/api/gallery?raw', fetcher)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedImage, setExpandedImage] = useState<GalleryImage | null>(null);
  const [height, setHeight] = useState("h-[0dvh]");

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const expandImage = (img: GalleryImage) => {
    setExpandedImage(img)
  }

  const closeImage = () => {
    setHeight("h-[0dvh]")
    setExpandedImage(null)
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-roboto text-text_primary">
      <p className="text-center font-bold text-6xl mt-10">Gallery</p>

      {expandedImage && 
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="relative">
            <div className="absolute top-0 w-full bg-black opacity-70 h-[6dvh]">
              <p className="text-white text-lg truncate w-[80%] p-[1.5dvh]">{expandedImage.alt}</p>
              <XMarkIcon 
                className="h-8 stroke-2 stroke-white mt-1 absolute top-0 right-0 mt-[1.2dvh] mr-[1.2dvw] hover:cursor-pointer"
                onClick={closeImage}
              />
            </div>
            <img 
              src={expandedImage.path} 
              alt={expandedImage.alt} 
              className={`w-auto ${height} transition-all`}
              onLoad={() => setHeight("h-[80dvh]")}
            />
          </div>
        </div>
      }

      <div className="flex flex-wrap w-full h-full px-[15dvw] mb-[20dvh]">
        {data.map(img => (
          <div 
            className={`inline-block w-auto h-[22dvh] mr-10 mt-20 relative z-10`}
            onMouseEnter={() => handleMouseEnter(img.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={img.path} 
              alt={img.alt} 
              className={`w-auto h-[22dvh] transition-all`}
            />

            <div 
              className={`flex absolute left-0 bottom-0 w-full bg-black opacity-70 
                ${hoveredIndex == img.id ? "h-[4dvh]" : "hidden"}
                ${expandedImage && expandedImage.id == img.id && "hidden"}`}
            >
              <p className="text-white truncate w-[80%] p-2">{img.alt}</p>
              <MagnifyingGlassPlusIcon 
                className="h-8 stroke-2 stroke-white mt-1 absolute right-1 hover:cursor-pointer" 
                onClick={() => expandImage(img)}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
};

export default Gallery;