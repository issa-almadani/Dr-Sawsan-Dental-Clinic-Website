"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
// import Button from "./Button";

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

  return (
    <>
        <Link href="/" style={{display:"block"}}>
            <Image src="/images/logo.png" alt="Logo" width={width < 1024 ? "150" : "250"}
                height={width < 1024 ? "45" : "74"} className="relative" />
        </Link>
    </>
  );
};

export default Logo;