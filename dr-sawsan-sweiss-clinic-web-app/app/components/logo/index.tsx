"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  const ratio = 2.916
  const w = 220

  return (
    <>
        <Link href="/" style={{display:"block"}}>
            <Image src="/images/logo.png" alt="Logo" width={width < 0 ? "150" : w}
                height={width < 1024 ? "250" : w / ratio} className="relative" />
        </Link>
    </>
  );
};

export default Logo;