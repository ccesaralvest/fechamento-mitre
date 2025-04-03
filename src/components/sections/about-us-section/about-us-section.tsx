"use client";
import React from "react";

const AboutUsSection = () => {
  return (
    <section
      id="aboutus-section"
      className="bg-foreground min-h-[90vw] md:min-h-[46vh] lg:min-h-[60vh] xl:min-h-[78vh] flex justify-center items-center px-4 py-12 sm:py-0"
    >
      <div className="w-full max-w-[1546px] flex justify-center">
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="false"
          className="hidden md:block relative inset-0"
        >
          <div className="absolute  w-[26rem] bottom-[107%] -left-[12rem] md:border-t-[2px] border-white" />
          <div className="absolute left-[-42px] top-[-167px] h-[30rem] border-r-[2px] border-white border-1.2" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="false"
          className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] bg-gray-100 rounded-lg shadow-lg overflow-hidden flex justify-center items-center aspect-video transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/F21F4A-KSsY?si=ZfwMwTulNJ2pBzN8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
