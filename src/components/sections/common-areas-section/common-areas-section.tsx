"use client";
import React from "react";
import useDeviceType from "src/hooks/useDeviceType";

interface AreaItem {
  id: string;
  title: string;
}

const CommonAreasSection: React.FC = () => {
  const deviceType = useDeviceType()

  const internalAreas: AreaItem[] = [
    { id: "01", title: "LOBBY" },
    { id: "02", title: "FITNESS CENTER" },
    { id: "03", title: "SAUNA" },
    { id: "04", title: "MASSAGEM" },
    { id: "05", title: "DESCANSO" },
    { id: "06", title: "BEAUTY CARE" },
    { id: "07", title: "LAUNDRY" },
    { id: "08", title: "COWORKING" },
    { id: "09", title: "GAME LOUNGE" },
    { id: "10", title: "STEAK BAR" },
    { id: "11", title: "CELEBRATION HALL" },
    { id: "12", title: "PRIVATE TERRACE" },
    { id: "13", title: "KIDS LOUNGE" },
  ];

  const externalAreas: AreaItem[] = [
    { id: "14", title: "PISCINA ADULTO COM RAIA 25M" },
    { id: "15", title: "PISCINA INFANTIL" },
    { id: "16", title: "SOLARIUM" },
    { id: "17", title: "SPA" },
    { id: "18", title: "PLAYGROUND" },
    { id: "19", title: "SQUARE" },
    { id: "20", title: "SPORTS ARENA" },
    { id: "21", title: "PET CARE (1º PAVIMENTO)" },
  ];

  return (
    <section
      id="common-areas-section"
      className="relative mb-[16px] sm:mb-[0] md:py-[54px] lg:pt-[42px]"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="relative w-full -mt-[1rem] min-h-[130px] pb-[18px] font-unineue text-black xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex flex-row flex-nowrap items-end"
      >
        <div className="mt-16 md:mt-0 w-full">
          <div className="flex items-start lg:flex-row">
            <div className="relative w-[42px] h-[100px] lg:w-[52px] lg:h-[134px] 2xl:w-[200px] 2xl:h-[255px] mr-6">
              <div className="absolute top-0 right-0 w-[2px] h-[120%] bg-[#803A2B]" />
              <div className="absolute bottom-0 left-0 w-[200px] lg:w-[350px] xl:w-[250px]  2xl:w-[480px] h-[2px] bg-[#803A2B]" />
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
              <div className="relative md:w-[100%] lg:w-[31vw] 2xl:w-full font-unineue text-black mt-[2.5rem] lg:mt-[5rem] xl:mt-[6rem] 2xl:mt-[12rem]">
                <div className="relative">
                  <div className="flex flex-col font-adero text-black text-[14px] lg:text-[16px] 2xl:text-[32px] xl:leading-[32px] uppercase">
                    {deviceType === "mobile" || deviceType === "tablet" ? (
                      <>
                        <h2>
                          Implantação das
                        </h2>
                        <h2>
                          <strong> áreas comuns</strong>
                        </h2>
                      </>
                    ) : (
                      <h2>
                        Implantação das<strong> áreas comuns</strong>
                      </h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="hidden lg:block absolute left-0 bottom-0 w-5 lg:w-12 h-[500px] lg:h-[580px] xl:h-[95%] bg-[#803A2B]" />
        <div className="mt-10 md:mt-12 mx-auto lg:w-[95vw] 2xl:w-[80vw]">
            <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-mirror="true"
            data-aos-once="false"
            className="hidden lg:flex gap-8"
            >
            <div className="w-1/4 md:pl-[2%] lg:pl-[7%] xl:pl-[5%]">
                <div>
                <h2 className="text-base font-bold mb-2 uppercase text-black">
                    Áreas Internas
                </h2>
                <ul className="space-y-1 mb-6">
                    {internalAreas.map((area) => (
                    <li key={area.id} className="font-unineue font-normal flex items-start lg:text-[13px] lg:leading-[20px] text-black">
                        <span className="font-medium mr-1">{area.id}.</span>
                        <span>{area.title}</span>
                    </li>
                    ))}
                </ul>
                </div>
                <div>
                <h2 className="text-base font-bold mb-2 uppercase text-black">
                    Áreas Externas
                </h2>
                <ul className="space-y-1">
                    {externalAreas.map((area) => (
                    <li key={area.id} className="font-unineue font-normal flex items-start lg:text-[13px] lg:leading-[20px] text-black">
                        <span className="font-medium mr-1">{area.id}.</span>
                        <span>{area.title}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            <div className="lg:mt-8 w-3/4">
                <div className="relative">
                    <img
                        src="/imgs/common-areas-section/image-house-plan.png"
                        alt="Floor Plan"
                        className="w-full h-auto"
                        style={{ aspectRatio: "2616/1096" }}
                    />
                </div>
            </div>
            </div>
            <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-mirror="true"
            data-aos-once="false"
            className="lg:hidden"
            >
            <div className="mb-6 mx-auto w-[90%]">
                <div className="relative">
                <img
                    src="/imgs/common-areas-section/image-house-plan.png"
                    alt="Floor Plan"
                    className="w-full h-auto"
                    style={{ aspectRatio: "2616/1096" }}
                />
                </div>
            </div>
            <div className="border-t border-[#8B3A2A] my-6 w-1/2 mx-auto" />
            <div className="grid grid-cols-2 gap-4 justify-items-center">
                <div>
                <h2 className="text-base font-bold mb-2 uppercase text-black">
                    Áreas Internas
                </h2>
                <ul className="space-y-1">
                    {internalAreas.slice(0, 7).map((area) => (
                    <li key={area.id} className="flex items-start text-xs text-black">
                        <span className="font-medium mr-1">{area.id}.</span>
                        <span className="whitespace-nowrap truncate max-w-[120px]">
                        {area.title}
                        </span>
                    </li>
                    ))}
                </ul>
                </div>
                <div>
                <h2 className="text-base font-bold mb-2 opacity-0">
                    Áreas Internas
                </h2>
                <ul className="space-y-1">
                    {internalAreas.slice(7).map((area) => (
                    <li key={area.id} className="flex items-start text-xs text-black">
                        <span className="font-medium mr-1">{area.id}.</span>
                        <span>{area.title}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 justify-items-center">
                <div>
                <h2 className="text-base font-bold mb-2 uppercase text-black">
                    Áreas Externas
                </h2>
                <ul className="space-y-1">
                    {externalAreas.map((area) => (
                    <li key={area.id} className="flex items-start text-xs text-black">
                        <span className="font-medium mr-1">{area.id}.</span>
                        <span className="whitespace-nowrap max-w-[116px]">
                        {area.title}
                        </span>
                    </li>
                    ))}
                </ul>
                </div>
                <div />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CommonAreasSection;
