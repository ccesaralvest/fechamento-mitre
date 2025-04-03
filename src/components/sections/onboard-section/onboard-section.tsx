"use client";
import React from "react";
import useDeviceType from "src/hooks/useDeviceType"
import CustomButton from "src/components/common/custom-button/custom-button";

const OnBoardSection = () => {
  const deviceType = useDeviceType()

  return (
    <section id="onboard-section" className="relative mt-8 md:mt-0 w-full z-[1]">
      <div className="relative flex flex-col items-start xl:flex-row">
        <div className="hidden xl:block relative lg:w-[52px] lg:h-[134px] 2xl:w-[200px] 2xl:h-[234px] mr-6">
          <div className="absolute top-0 right-0 w-[2px] h-[120%] bg-[#803A2B]" />
          <div className="absolute bottom-0 left-0 w-[200px] lg:w-[250px] 2xl:w-[480px] h-[2px] bg-[#803A2B]" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="px-8 xl:px-0 relative flex items-center order-2 xl:order-1 flex-1 gap-10"
        >
          <div className="relative pl-[20px] md:pl-[26px] lg:pl-[75px] xl:pl-0 md:w-[100%] xl:w-[31vw] 2xl:w-full font-unineue text-black xl:mt-[3.5rem] 2xl:mt-[7.5rem]">
            <div className="relative mb-3 xl:mb-[5rem]">
              <span className="font-adero text-black text-[14px] lg:text-[16px] 2xl:text-[32px] lg:leading-[32px] 2xl:leading-[48px] uppercase">
                <h2>
                    <strong className="font-extrabold">On board:</strong> o melhor
                    <br />
                    de dois mundos.
                </h2>
              </span>
            </div>
            <div className="font-medium md:mr-2 space-y-2 md:text-[9px] w-full xl:text-[1rem] xl:space-y-4 xl:mt-[6rem]">
              <p className="w-full text-[12px] md:text-[16px] xl:text-[16px] leading-[20px] md:leading-[28px] lg:leading-[28px]">
                Tribeca e Brooklin se encontram em um estilo de vida sofisticado
                e dinâmico. A arquitetura une elegância e modernidade, inspirada
                na autenticidade industrial nova-iorquina, com design que
                equilibra funcionalidade e sofisticação. Os espaços de lazer
                foram projetados para oferecer experiências únicas, do
                relaxamento ao convívio social, trazendo a vibração cosmopolita
                de Tribeca com o charme acolhedor do Brooklin.
              </p>
            </div>
            <div className="mt-10">
              <a href="#contact" className="block">
                <CustomButton
                    text="SAIBA MAIS"
                    className="text-[7px] leading-[11px] md:text-[15px] h-5 lg:h-12 md:h-[35px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 grow xl:order-1 w-full xl:w-[36vw]">
          <div className="w-full">
            {deviceType === "mobile" || deviceType === "tablet" ? (
              <img
                src="/imgs/onboard-section/image-onboard-mobile.png"
                alt="On board: O melhor de dois mundos"
                className="w-full h-auto object-cover inset-0 z-10]"
              />
            ) : (
              <img
                src="/imgs/onboard-section/image-onboard-desktop.jpg"
                alt="On board: O melhor de dois mundos"
                className="w-full h-auto object-cover inset-0 z-10]"
              />
            )}
          </div>
        </div>
        <div className="absolute left-0 bottom-0 2xl:bottom-[72px] w-5 lg:w-12 h-64 bg-[#803A2B]" />
      </div>
    </section>
  );
};

export default OnBoardSection;
