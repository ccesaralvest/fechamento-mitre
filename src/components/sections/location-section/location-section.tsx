"use client";
import React from "react";

const LocationSection = () => {
  return (
    <section
      id="location-section"
      className="relative md:min-h-full sm:pt-[30px] lg:pt-[16px] bg-[url(/imgs/common/image-background-texture.jpg)] bg-contain"
    >
      <div className="absolute bottom-0 left-0 w-full h-full bg-[url(/imgs/TEX-CIMENTO.png)] bg-cover bg-bottom z-[-0]" />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="relative pt-[14px] w-full -mt-[1rem] min-h-[130px] pb-[18px] font-unineue text-black xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex flex-row flex-nowrap items-end"
      >
        <div className="mt-8 md:mt-0 w-full">
          <div className="flex items-start lg:flex-row">
            <div className="relative w-[42px] h-[100px] lg:w-[52px] lg:h-[134px] 2xl:w-[200px] 2xl:h-[175px] mr-6">
              <div className="absolute top-0 right-0 w-[2px] h-[120%] bg-[#803A2B]" />
              <div className="absolute bottom-0 left-0 w-[200px] lg:w-[350px] xl:w-[250px] 2xl:w-[480px] h-[2px] bg-[#803A2B]" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="flex flex-wrap order-2 lg:order-1 flex-1"
            >
              <div className="relative md:w-[100%] lg:w-[31vw] 2xl:w-full font-unineue text-black mt-[2.5rem] lg:mt-[3.5rem] 2xl:mt-[4.5rem]">
                <div className="relative">
                  <div className="flex flex-col font-adero text-black text-[14px] lg:text-[16px] 2xl:text-[32px] lg:leading-[28px] 2xl:leading-[39px] uppercase">
                    <h2>O maior eixo de</h2>
                    <h2>crescimento da cidade</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="mx-auto lg:w-[95vw] 2xl:w-[80vw] h-full w-full flex items-center justify-center"
      >
        <div className="w-full max-w-8xl flex flex-col md:flex-row z-10">
          <div className="w-full order-2 md:order-1 md:w-[30%] lg:w-[22%] md:pl-[22px] lg:pl-0">
            <div className="lg:pl-[6%] uppercase mt-8 mb-16 md:mt-12 leading-[2.5] text-[11px] md:text-[13px] grid grid-cols-2 md:grid-cols-1 justify-items-center md:justify-items-start">
              <div className="text-black font-unineue gap-y-1">
                <p>01. Estação Brooklin do metrô</p>
                <p>02. Shopping Morumbi</p>
                <p>03. Ponte Estaiada</p>
                <p>04. Vicolo Nostro</p>
                <p>05. Portucho Brooklin</p>
                <p>06. Shopping Market Place</p>
                <p>07. Parque Bruno Covas</p>
                <p>08. Parque do Povo</p>
              </div>
              <div className="text-black font-unineue gap-y-1">
                <p>09. Hípica Paulista</p>
                <p>10. Carrefour</p>
                <p>11. Pão de Açúcar</p>
                <p>12. Maremonti</p>
                <p>13. Pobre Juan</p>
                <p>14. Hospital Santa Paula</p>
                <p>15. Colégio Elvira Brandão</p>
                <p>16. Pueri Domus</p>
              </div>
            </div>
          </div>
          <div className="w-full order-1 md:order-2 md:w-[70%] lg:w-[78%] mt-4 md:mt-0 md:flex md:items-end lg:flex lg:items-center">
            <img
              src="/imgs/location-section/image-map.png"
              alt="Mapa ilustrado da cidade"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <p className="adress-box">AV. ROQUE PETRONI JÚNIOR, 130 - BROOKLIN</p>
    </section>
  );
};

export default LocationSection;
