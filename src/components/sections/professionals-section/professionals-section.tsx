"use client";
import React from "react";

const professionals = [
  {
    name: "ALEXANDRE",
    surname: "MILLEU",
    role: "PROJETO ARQUITETÔNICO",
    description: "Tribeca e Brooklin se encontram em um estilo de vida sofisticado e dinâmico. A arquitetura une elegância e modernidade, inspirada na autenticidade industrial nova-iorquina, com design que equilibra funcionalidade e sofisticação. Os espaços de lazer foram projetados para oferecer experiências únicas, do relaxamento ao convívio social, trazendo a vibração cosmopolita de Tribeca com o charme acolhedor do Brooklin.",
    imageUrl: "/imgs/professionals-section/professional-alexandre-milleu.svg",
  },
  {
    name: "PAULA",
    surname: "AVEIRO",
    role: "PROJETO INTERIORES",
    description: "O projeto de interiores do Haus Mitre Station Brooklin foi inspirado em Tribeca, trazendo um conceito cosmopolita e contemporâneo com elementos da atmosfera nova-iorquina. Tons de terracota, concreto, cinza e caramelo, combinados com texturas de tijolos e couro, conferem elegância e personalidade. As áreas comuns foram projetadas para oferecer conforto e uma experiência diversificada de espaços, criando uma atmosfera que remete a Tribeca em cada detalhe.",
    imageUrl: "/imgs/professionals-section/professional-paula-aveiro.svg",
  },
  {
    name: "NÚCLEO ARQUITETURA",
    surname: "DA PAISAGEM",
    role: "PROJETO PAISAGÍSTICO",
    description: "O paisagismo do Haus Mitre Station Brooklin é glamouroso e aconchegante, com linhas poéticas que valorizam o verde dentro de uma estética cosmopolita. O projeto urbano traz referências de Tribeca, associando o bem-estar e a vanguarda. A presença do tijolo, seus tons terrosos, e a vegetação diversificada criam uma atmosfera vibrante e envolvente, proporcionando momentos de lazer e relaxamento conectados aos ambientes construídos.",
    imageUrl: "/imgs/professionals-section/professional-nucleo-arquitetura.svg",
  },
];

const ProfessionalsSection = () => {
  return (
    <section id="professionals-section" className="relative pb-24 mt-8 w-full">
      <div className="lg:pt-8 w-full">
        <div className="mt-8 lg:mt-0 w-full">
          <div className="flex items-start lg:flex-row h-[120px] md:h-[140px] lg:h-[160px] 2xl:h-[235px] bg-[url(/imgs/common/image-background-texture.jpg)] bg-cover">
            <div className="relative w-[42px] h-full lg:w-[52px] 2xl:w-[200px] pr-6">
              <div className="absolute top-0 right-0 w-[2px] h-[120%] bg-[#803A2B]" />
              <div className="absolute bottom-0 left-0 w-[200px] lg:w-[350px] xl:w-[250px] 2xl:w-[480px] h-[2px] bg-[#803A2B] z-[1]" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="flex flex-wrap order-2 lg:order-1 h-full"
            >
              <div className="relative md:w-[100%] lg:w-[31vw] 2xl:w-full font-unineue text-black bg-white px-6 pt-8 md:pt-14 lg:pt-10 2xl:pt-16">
                <div className="relative">
                  <div className="flex flex-col font-adero text-black text-[14px] font-normal lg:text-[16px] 2xl:text-[32px] lg:leading-[32px] 2xl:leading-[48px] uppercase">
                    <h2>
                      Um <strong className="font-extrabold">projeto</strong> assinado
                    </h2>
                    <h2>
                      pelos mais <strong className="font-extrabold">renomados</strong>
                    </h2>
                    <h2>
                      <strong className="font-extrabold">profissionais</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute left-0 bottom-0 w-5 lg:w-12 h-[500px] lg:h-[650px] xl:h-full bg-[#803A2B]" />
          <div className="mt-10 md:mt-28 mx-auto lg:w-[95vw] 2xl:w-[78vw]">
          <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-mirror="true"
              data-aos-once="false"
              className="px-5 grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-24 lg:pl-[58px] xl:pl-0"
          >
              {professionals.map((professional, index) => (
              <React.Fragment key={professional.name}>
                  <div className="pl-[28px] md:pl-[32px] lg:pl-[48px] 2xl:pl-0 flex flex-col xl:flex-row relative">
                  <div className="lg:mr-[66px] 2xl:mr-[90px]">
                      <div className="flex items-center xl:items-start xl:flex-col gap-6">
                      <div>
                          <img
                          src={professional.imageUrl}
                          alt={professional.name}
                          className="w-[125px] h-[180px] md:w-[300px] md:h-[360px] lg:w-[220px] lg:h-[280px] object-cover grayscale"
                          />
                      </div>
                      <div className="flex flex-col">
                          <div className="order-1 lg:order-2">
                          <h2 className="font-adero mt-6 text-[13px] lg:text-xl font-medium text-black">
                              {professional.name}
                          </h2>
                          <h2 className="font-adero text-[13px] lg:text-xl font-medium mb-4 text-black">
                              {professional.surname}
                          </h2>
                          </div>
                          <div className="mt-2 order-2 xl:order-1">
                          <p className="relative font-adero font-normal text-[11px] uppercase text-black mb-2 after:absolute after:left-0 after:-top-2 after:lg:top-6 after:w-[60px] after:h-[2px] after:bg-[#813A2C]">
                              {professional.role}
                          </p>
                          </div>
                      </div>
                      </div>
                      <div className="mt-5 xl:mt-0">
                      <p className="font-unineue text-[12px] md:text-[16px] md:leading-[28px] lg:text-[16px] font-normal leading-[20px] lg:leading-[28px] text-black">
                          {professional.description}
                      </p>
                      </div>
                  </div>
                  {index < professionals.length - 1 && (
                      <div className="mt-6 lg:mt-10 xl:mt-0 w-2/4 h-[2px] xl:absolute xl:right-0 xl:top-[40%] xl:translate-y-[-40%] xl:w-[2px] xl:h-[60%] bg-[#813A2C]" />
                  )}
                  </div>
              </React.Fragment>
              ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
