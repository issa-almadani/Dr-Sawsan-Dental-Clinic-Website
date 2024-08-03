"use client"
import React, { useState } from "react";
import useSWR from "swr"
import fetcher from "@/utils/fetcher"
import { GalleryImage } from "@/types/galleryImage"
import { MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline'

const Gallery = () => {
  const { data, error } = useSWR<GalleryImage[]>('/api/gallery?raw', fetcher)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-roboto text-text_primary">
      <p className="text-center font-bold text-6xl mt-10">Gallery</p>
      <div className="flex flex-wrap w-full h-full px-[15dvw] mb-20">
        {data.map(img => (
          <div 
            className="inline-block w-auto h-[22dvh] mr-10 mt-20 relative"  
            onMouseEnter={() => handleMouseEnter(img.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img key={img.id} src={img.path} alt={img.alt} className="w-auto h-[22dvh]" />
            <div className={`flex absolute left-0 bottom-0 w-full bg-black opacity-70 ${hoveredIndex == img.id ? "h-[4dvh]" : "hidden"}`}>
              <p className="text-white truncate w-[80%] p-2">{img.alt}</p>
              <MagnifyingGlassPlusIcon 
                className="h-8 stroke-2 stroke-white mt-1 absolute right-1 hover:cursor-pointer" 
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
};

export default Gallery;