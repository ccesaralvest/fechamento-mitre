"use client";
import CustomButton from "src/components/common/custom-button/custom-button";
import React from "react";

const HeroSection = () => {
  return (
    <section id="hero-section" className="w-full flex flex-col">
      <div className="w-full flex justify-between self-center mt-[67px] md:mt-[75px] relative">
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[url(/imgs/TEX-CIMENTO.png)] bg-cover bg-bottom z-[-1]"></div>
        <div className="relative flex flex-col  flex-1 justify-end">
          <div className="relative">
            <div className="relative z-20">
              <img
                src="/imgs/fachada-topo.png"
                alt="House Mitre Station Brooklin Apartment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:py-20 flex flex-col flex-1 justify-around lg:justify-between items-center">
          <div className="z-10 w-[50%]">
            <img
              src="/imgs/logo-station.svg"
              alt="House Mitre Station Brooklin Logo"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col items-end justify-center gap-2 sm:mr-10 md:mr-8 md:gap-4 lg:mr-5 lg:max-w-[68%] h-[50%] pr-3 md:pr-0">
            <div className="flex items-start justify-end lg:justify-center gap-2 xl:gap-8">
              <img
                src="/imgs/medida_topo.png"
                alt="Euture"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-[7px] leading-[10px] md:leading-[1.2rem] sm:text-[0.55rem] md:text-[0.75rem] lg:text-[0.85rem] xl:text-[1rem] text-black uppercase font-adero text-end self-end max-w-[100%]">
                Viva com <strong>praticidade</strong> e{" "}
                <strong>conecte-se</strong> <br />
                com o <strong>melhor de São Paulo</strong>.
              </p>
            </div>
            <div>
              <a href="#contact-section" className="block">
                <CustomButton
                  text="Fale com o especialista"
                  className="text-[7px] leading-[11px] md:text-[15px] h-5 lg:h-12 md:h-[35px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
