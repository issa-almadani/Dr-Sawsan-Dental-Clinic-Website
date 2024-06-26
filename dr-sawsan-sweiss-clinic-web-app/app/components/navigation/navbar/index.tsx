import React from "react";
import Link from "next/link";
import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  /* hover over text should make height larger, show relevant tab */
  return (
    <>
      <div className="w-full h-12 bg-slate-950/75 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          {/* <div>
            <Logo />
          </div> */}
          <div className="flex justify-end items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white text-sm">
              <li>
                <Link href="/about">
                  <p>Meet the Dentist!</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contact Us</p>
                </Link>
              </li>
              <li>
                <Link href="/appointments">
                  <p>Schedule Appointment</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;