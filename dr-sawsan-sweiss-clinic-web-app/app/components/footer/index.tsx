import React from "react";
import Logo from "../logo";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="overflow-x-hidden w-full bg-bg_primary transition-all duration-500 ease-in-out sticky top-0">
        <div className="container mx-auto px-4 border-t-2 border-b-2 border-border_alternate h-full flex items-center justify-between">
          <div className="ml-5">
						<div className="inline-block cursor-pointer mb-6 mt-14">
							<Logo />
						</div>
						<div className="font-roboto text-base text-text_primary mb-3">Join our newsletter to stay up to date on our services and releases.</div>
						<div className="mb-2">
							<input type="text" id="fname" name="fname" placeholder="Enter your email" className="p-3 mt-4 mb-4 border border-black w-96" />
							<button className="p-3 pr-6 pl-6 mt-4 mb-4 ml-4 border border-black text-text_primary" >Subscribe</button>
						</div>
						<div className="font-roboto text-xs text-text_primary mb-24">
							By subscribing you agree to with our <Link href="/privacypolicy" className="underline">Privacy Policy</Link> and provide consent to receive updates <br /> from our website.
						</div>
          </div>

          <div className="font-roboto text-base text-link_primary mt-14 mb-10 ml-36">
            <ul className="space-y-4">
              <li className="font-bold text-text_primary">Explore</li>
              <li><Link href="/home" className="cursor-pointer inline-block ">Home</Link></li>
              <li><Link href="/about" className="cursor-pointer inline-block ">Meet the Dentist</Link></li>
              <li><Link href="/services" className="cursor-pointer inline-block ">Services</Link></li>
              <li><Link href="/gallery" className="cursor-pointer inline-block ">Gallery</Link></li>
              <li><Link href="/appointments" className="cursor-pointer inline-block ">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="font-roboto text-base text-link_primary mr-60">
            <ul className="space-y-6"> 
              <li className="font-bold text-text_primary">Follow Us</li>
              <li>
                <Link href="https://www.facebook.com/Dr.SawsanSweiss" target="_blank" className="hover:text-blue-800">
                    <i className="fab fa-facebook-f fa-lg mr-2"></i>
										Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/sweisssawsan/" target="_blank" className="hover:text-pink-700">
                    <i className="fab fa-instagram fa-lg mr-2"></i>
										Instagram
                </Link>
              </li>  
              <li>
                <Link href="https://linkedin.com/in/sawsan-sweiss-72259916b" target="_blank" className="hover:text-blue-900">
                    <i className="fab fa-linkedin-in fa-lg mr-2"></i>
										Linkedin
                </Link>
              </li>  
            </ul>
          </div>
        </div>


        <div className="container mx-auto h-full flex items-center justify-between mb-24">
          <div className="mt-12 text-text_primary text text-base"><p>&copy; 2024 Dr. Sawsan Sweiss Clinic. All rights reserved.</p></div>
					<div className="mt-12 text-text_primary text text-base">
						<Link href="/" className="mr-6 underline">Privacy Policy</Link>
						<Link href="/" className="mr-6 underline">Terms of Service</Link>
						<Link href="/" className="mr-6 underline">Cookies Settings</Link>
					</div>
				</div>
      </div>
		</>
	);
};

export default Footer;