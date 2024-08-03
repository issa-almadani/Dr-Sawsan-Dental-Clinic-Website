import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-roboto">
      <div className="relative w-full h-full">
        <Image 
          src="/images/personal.png"
          width={0}
          height={0}
          sizes="100dvw"
          alt="hero image of clinic" 
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* put arrow to indicate scrolling down on page, plus make option to magnify image with caption */}

      <div className="relative min-h-screen w-full h-full text-text_primary px-[15dvw] py-[15dvh]">
        <div className="flex-col items-center">

          <p className="text-center font-bold text-6xl">Dr. Sawsan Sweiss</p>
          <div className="mt-20 flex items-center justify-between space-x-14 text-xl text-justify">

            <p>Dr. Sawsan Fahed Sweiss received her Bachelor’s of Dental Surgery in 1995 from the University of Jordan and has been  
            successfully running her very own dental practice in the heart of Fuheis ever since. <br /> <br />

            She is very active in the dental community and passionate about refreshing her knowledge and adding new treatment options for her patients. 
            She recently completed the program in Oral Implantology from the Univeristy of Jordan, the 3 Shape Workshop for using intraoral cameras in 
            getting impressions of teeth and jaw, and is trained in administiring Botox. She does this alongside many volunteer experiences in the local 
            community and running her own social media platforms and blogs.</p>

            <Image
              src="/images/closeup.jpeg"
              width={0}
              height={0}
              sizes="100dvw"
              alt="close up of doctor" 
              style={{ width: '27%', height: 'auto' }}
            />
          </div>

          <div className="mt-20 flex items-center justify-start text-xl text-justify space-x-20 snap-x snap-mandatory overflow-x-auto">
            <Image
              src="/gallery/botox.jpeg"
              width={0}
              height={0}
              sizes="100dvw"
              alt="close up of doctor getting diploma" 
              style={{ width: '30%', height: 'auto' }}
              className="snap-start"
            />
            <Image
              src="/gallery/botox.jpeg"
              width={0}
              height={0}
              sizes="100dvw"
              alt="close up of doctor getting diploma" 
              style={{ width: '30%', height: 'auto' }}
              className="snap-start"
            />
            <Image
              src="/gallery/botox.jpeg"
              width={0}
              height={0}
              sizes="100dvw"
              alt="close up of doctor getting diploma" 
              style={{ width: '30%', height: 'auto' }}
              className="snap-start"
            />
            <Image
              src="/gallery/botox.jpeg"
              width={0}
              height={0}
              sizes="100dvw"
              alt="close up of doctor getting diploma" 
              style={{ width: '30%', height: 'auto' }}
              className="snap-start"
            />
            <Image
              src="/gallery/botox.jpeg"
              width={0}
              height={0}
              sizes="100dvw"
              alt="close up of doctor getting diploma" 
              style={{ width: '30%', height: 'auto' }}
              className="snap-start"
            />
          </div>


          <div className="mt-[15dvh] flex flex-col items-center justify-center text-3xl text-center">
            <p>Check out Dr. Sawsan Sweiss’s interview on Roya!</p>
            <div className="w-full flex justify-center mt-6">
              <div className="relative w-[100%] pb-[50%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOsZNRmKXpg?si=11Aitj8gxBX6RCYL"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        
          <div className="mt-[15dvh] flex-col items-center justify-between text-xl text-justify">
            <p>Dr. Sawsan is also an avid artist, painter, and traveler. Check out some of her works and travels below or in the webpage’s gallery.</p>
            <div className="mt-10 flex items-center justify-start text-xl text-justify space-x-20 snap-x snap-mandatory overflow-x-auto">
              <Image
                src="/gallery/botox.jpeg"
                width={0}
                height={0}
                sizes="100dvw"
                alt="close up of doctor getting diploma" 
                style={{ width: '30%', height: 'auto' }}
                className="snap-start"
              />
              <Image
                src="/gallery/botox.jpeg"
                width={0}
                height={0}
                sizes="100dvw"
                alt="close up of doctor getting diploma" 
                style={{ width: '30%', height: 'auto' }}
                className="snap-start"
              />
              <Image
                src="/gallery/botox.jpeg"
                width={0}
                height={0}
                sizes="100dvw"
                alt="close up of doctor getting diploma" 
                style={{ width: '30%', height: 'auto' }}
                className="snap-start"
              />
              <Image
                src="/gallery/botox.jpeg"
                width={0}
                height={0}
                sizes="100dvw"
                alt="close up of doctor getting diploma" 
                style={{ width: '30%', height: 'auto' }}
                className="snap-start"
              />
              <Image
                src="/gallery/botox.jpeg"
                width={0}
                height={0}
                sizes="100dvw"
                alt="close up of doctor getting diploma" 
                style={{ width: '30%', height: 'auto' }}
                className="snap-start"
              />
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between text-xl text-justify">
            <p>We hope to welcome you in our Clinic soon! <br /><br />
              For professional inquiries, please reach out to Dr. Sawsan directly on her work email or by contacting her clinic.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
};

export default About;