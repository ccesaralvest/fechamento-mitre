"use client";
import React from "react";
import LocationItem from "@/components/ui/location-pin";

const GastronomySection = () => {
  return (
    <section
      id="gastronomy-section"
      className="relative bg-white md:p-0 lg:pb-[74px]"
    >
      <div className="hidden xl:block absolute right-0 top-[60%] translate-y-[-60%] w-5 lg:w-12 h-[500px] lg:h-[650px] xl:h-[50%] bg-[#803A2B]" />
      <div className="relative h-full w-full flex flex-col xl:flex-row justify-center px-0 md:px-0 md:pb-0">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="false"
          className="hidden md:block w-full h-full z-10 left-0 top-[-32px] md:top-0"
        >
          <img
            src="/imgs/gastronomy-section/image-gastronomy-desktop.png"
            alt="Gastronomy image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-mirror="true"
          data-aos-once="false"
          className="mx-auto w-full max-w-7xl md:w-[92%] lg:w-[90%] xl:w-full flex flex-col md:flex-row z-10"
        >
          <div className="w-full md:hidden md:w-[41%] pt-[24px] md:pt-0 md:pr-0">
            <img
              src="/imgs/gastronomy-section/image-gastronomy-mobile.png"
              alt="Gastronomy image"
              className="w-full h-auto object-cover md:hidden"
            />
          </div>
          <div className="w-full p-4 md:px-0 mt-4 md:flex md:items-end lg:flex lg:items-center md:mt-[6px] lg:mt-[6rem] 2xl:mt-[11rem] xl:translate-x-[-108px] 2xl:translate-x-[-170px]">
            <div className="mx-auto md:text-[12px] font-unineue text-black lg:text-sm">
              <div className="mb-14 relative flex flex-col">
                <p className="text-sm md:text-[16px] md:leading-[28px] mb-6 ">
                  Poucas regiões na cidade reúnem uma cena cultural tão vibrante
                  que inclui galerias de arte, teatros e livrarias com diversas
                  atividades para todas as faixas etárias. O Brooklin também
                  abriga um excelente número de instituições renomadas de ensino
                  médio e fundamental, além da proximidade de grandes faculdades
                  e universidades.
                </p>
                <div className="mt-3 w-[103px] h-[2px] bg-[#803A2C]" />
              </div>
              <div className="grid grid-cols-1 uppercase md:grid-cols-2 md:gap-x-4 gap-y-0 md:gap-y-8 md:text-[10px] lg:text-sm">
                <div>
                  <div className="mb-8 lg:mb-16">
                    <h3 className="font-bold mb-2 text-sm lg:text-[14px] lg:leading-[23px]">
                      GASTRONOMIA
                    </h3>
                    <div className="space-y-1 md:text-[14px] xl:text-sm text-[12px] lg:text-[14px] lg:leading-[23px]">
                      <LocationItem name="Vicolo Nostro" minutes={3} />
                      <LocationItem name="Portucho" minutes={3} />
                      <LocationItem name="Pizzaria A Esperança" minutes={3} />
                      <LocationItem name="Natory Sushi" minutes={7} />
                      <LocationItem name="Jucalemão " minutes={5} />
                      <LocationItem name="Bar do Juarez" minutes={6} />
                      <LocationItem name="Lolla Osteria" minutes={7} />
                      <LocationItem name="Manga bar" minutes={6} />
                    </div>
                  </div>
                  <div className="mb-8 lg:mb-16">
                    <h3 className="font-bold mb-2 text-sm lg:text-[14px] lg:leading-[23px]">
                      SERVIÇOS E LAZER
                    </h3>
                    <div className="space-y-1 md:text-[14px] xl:text-sm text-[12px] lg:text-[14px] lg:leading-[23px]">
                      <LocationItem name="CIA Athletica" minutes={6} />
                      <LocationItem name="Buddha Spa Av Morumbi" minutes={3} />
                      <LocationItem name="Shopping Market Place" minutes={5} />
                      <LocationItem name="Shopping Morumbi" minutes={6} />
                      <LocationItem name="Shopping Ibirapuera" minutes={7} />
                      <LocationItem name="Bluefit" minutes={2} />
                      <LocationItem
                        name="Padaria Pássaros e Flores"
                        minutes={4}
                      />
                      <LocationItem name="Carrefour" minutes={5} />
                      <LocationItem name="Parque do Povo" minutes={7} />
                      <LocationItem name="Smart Fit" minutes={7} />
                      <LocationItem name="Parque Ibirapuera" minutes={12} />
                      <LocationItem name="Parque Bruno Covas" minutes={12} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-8 lg:mb-16">
                    <h3 className="font-bold text-sm mb-2">MOBILIDADE</h3>
                    <div className="space-y-1 md:text-[14px] xl:text-sm text-[12px] lg:text-[14px] lg:leading-[23px]">
                      <LocationItem name="Av. Morumbi" minutes={2} />
                      <LocationItem name="Av. Nações Unidas" minutes={3} />
                      <LocationItem name="Estação Brooklin" minutes={3} />
                      <LocationItem name="Av. Santo Amaro" minutes={3} />
                      <LocationItem
                        name="Av. Vereador José Diniz"
                        minutes={4}
                      />
                      <LocationItem name="Ponte Estaiada" minutes={6} />
                      <LocationItem name="Av. Bandeirantes" minutes={7} />
                      <LocationItem
                        name="Av. Luis Carlos Berrini"
                        minutes={10}
                      />
                      <LocationItem name="Av. Faria Lima" minutes={11} />
                    </div>
                  </div>
                  <div className="mb-8 lg:mb-16">
                    <h3 className="font-bold text-sm mb-2">SAÚDE</h3>
                    <div className="space-y-1 md:text-[14px] xl:text-sm text-[12px] lg:text-[14px] lg:leading-[23px]">
                      <LocationItem
                        name="Hospital Israelita A. Einstein"
                        minutes={10}
                      />
                      <LocationItem
                        name="Hospital São Luiz Itaim"
                        minutes={12}
                      />
                      <LocationItem name="Droga Raia" minutes={4} />
                      <LocationItem name="Lavoisier Santo Amaro" minutes={4} />
                    </div>
                  </div>
                  <div className="mb-8 lg:mb-16">
                    <h3 className="font-bold text-sm mb-2">ENSINO</h3>
                    <div className="space-y-1 md:text-[14px] xl:text-sm text-[12px] lg:text-[14px] lg:leading-[23px]">
                      <LocationItem
                        name="Unip Chacara Santo Antônio"
                        minutes={4}
                      />
                      <LocationItem
                        name="Cultura Inglesa Santo Amaro"
                        minutes={6}
                      />
                      <LocationItem
                        name="Faculdade Estácio Campo Belo"
                        minutes={7}
                      />
                      <LocationItem name="CNA Santo Amaro" minutes={7} />
                    </div>
                  </div>
                  <div className="mb-8 lg:mb-16">
                    <h3 className="font-bold text-sm mb-2">CULTURA</h3>
                    <div className="space-y-1 md:text-[14px] xl:text-sm text-[12px] lg:text-[14px] lg:leading-[23px]">
                      <LocationItem name="Teatro Vivo" minutes={3} />
                      <LocationItem
                        name="Casa de Vidro Lina Bo Bardi"
                        minutes={6}
                      />
                      <LocationItem
                        name="Teatro Multiplan Morumbi Shopping"
                        minutes={6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GastronomySection;
