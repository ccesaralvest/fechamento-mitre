"use client";
import React, { useState } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const apartmentTypes = [
  {
    size: "63 M²",
    type: "2 DORM.",
    details: "2 DORMS. • SUITE • VAGA OPÇÃO LIVING AMPLIADO",
    finalText:
      "Ilustração artística da planta de 63m2, final 20 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    image: "imgs/plants-section/image-plant-01.png",
  },
  {
    size: "63 M²",
    type: "2 DORM. LIVING AMPLIADO",
    details: "2 DORMS. • SUITE • VAGA OPÇÃO LIVING AMPLIADO",
    finalText:
      "Ilustração artística da planta de 63m2, final 20 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    image: "imgs/plants-section/image-plant-amplified-01.png",
  },
  {
    size: "43 M²",
    type: "1 DORM.",
    finalText:
      "Ilustração artística da planta de 43m2, final 21 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    details: "1 DORM. • SUITE • VAGA",
    image: "imgs/plants-section/image-plant-02.png",
  },
  {
    size: "43 M²",
    type: "1 DORM. LIVING AMPLIADO",
    finalText:
      "Ilustração artística da planta de 43m2, final 21 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    details: "1 DORM. • SUITE • VAGA",
    image: "imgs/plants-section/image-plant-amplified-02.png",
  },
  {
    size: "31 M²",
    type: "1 DORM.",
    finalText:
      "Ilustração artística da planta de 31m2, final 12 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. *Opção especifica da unidade residencial. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    details: "1 DORM. •",
    image: "imgs/plants-section/image-plant-03.png",
  },
  {
    size: "26 M²",
    type: "STUDIO",
    finalText:
      "Ilustração artística da planta de 26m2, final 05 com sugestão de decoração. Os móveis e utensílios são de dimensões comerciais e não fazem parte do contrato de compra e venda do imóvel. As medidas são de face a face das paredes. *Opção especifica da unidade residencial. A planta apresentada é ilustrativa e contém sugestão de decoração.",
    details: "STUDIO •",
    image: "imgs/plants-section/image-plant-04.png",
  },
];

const apartmentFeatures = [
  [
    "Infraestrutura para ar-condicionado na sala de estar e dormitórios",
    "Infraestrutura para aquecedor de passagem a gás",
    "Ponto de água quente na cozinha e banhos",
    "Bacia com válvula dual flux",
    "Bancadas da cozinha e banheiro entregues",
    "Ponto para máquina de lavar louça na cozinha",
    "Ponto elétrico para instalação de churrasqueira elétrica no terraço social",
    "Laje nivelada entre terraço social e sala de estar",
    "Unidade entregue com piso laminado nos dormitórios e revestimento nas áreas molhadas",
    "Espaço independente de área técnica para condensadora de ar-condicionado",
    "Personal Home by Mitre - Oferta de acabamentos e equipamentos para a personalização da unidade",
  ],
  [
    "Infraestrutura para ar-condicionado na sala de estar e dormitórios",
    "Infraestrutura para aquecedor de passagem a gás",
    "Ponto de água quente na cozinha e banhos",
    "Bacia com válvula dual flux",
    "Bancadas da cozinha e banheiro entregues",
    "Ponto para máquina de lavar louça na cozinha",
    "Ponto elétrico para instalação de churrasqueira elétrica no terraço social",
    "Laje nivelada entre terraço social e sala de estar",
    "Unidade entregue com piso laminado nos dormitórios e revestimento nas áreas molhadas",
    "Espaço independente de área técnica para condensadora de ar-condicionado",
    "Personal Home by Mitre - Oferta de acabamentos e equipamentos para a personalização da unidade",
  ],
  [
    "Infraestrutura para ar-condicionado na sala de estar e suíte",
    "Lavabo",
    "Ponto de água quente na cozinha e banho",
    "Ponto para máquina de lavar louça na cozinha",
    "Bacia com válvula dual flux",
    "Bancadas da cozinha e banheiro entregues",
    "Ponto elétrico para grill elétrico no terraço social",
    "Infraestrutura para aquecedor de passagem a gás",
    "Laje nivelada entre terraço social e sala de estar",
    "Janela da suíte com persiana de enrolar",
    "Unidade entregue com piso laminado no dormitório e revestimento nas áreas molhadas",
    "Espaço independente de área técnica para condensadora de ar-condicionado",
    "Personal Home by Mitre - Oferta de acabamentos e equipamentos para a personalização da unidade",
  ],
  [
    "Infraestrutura para ar-condicionado na sala de estar e suíte",
    "Lavabo",
    "Ponto de água quente na cozinha e banho",
    "Ponto para máquina de lavar louça na cozinha",
    "Bacia com válvula dual flux",
    "Bancadas da cozinha e banheiro entregues",
    "Ponto elétrico para grill elétrico no terraço social",
    "Infraestrutura para aquecedor de passagem a gás",
    "Laje nivelada entre terraço social e sala de estar",
    "Janela da suíte com persiana de enrolar",
    "Unidade entregue com piso laminado no dormitório e revestimento nas áreas molhadas",
    "Espaço independente de área técnica para condensadora de ar-condicionado",
    "Personal Home by Mitre - Oferta de acabamentos e equipamentos para a personalização da unidade",
  ],
  [
    "INFRAESTRUTURA PARA AR-CONDICIONADO NA SALA DE ESTAR",
    "PONTO DE ÁGUA QUENTE NA COZINHA E BANHO",
    "PONTO PARA MÁQUINA DE LAVAR LOUÇA NA COZINHA",
    "BACIA COM VÁLVULA DUAL FLUX",
    "BANCADAS DA COZINHA E BANHEIRO ENTREGUES",
    "PONTO ELÉTRICO PARA GRILL ELÉTRICO NO TERRAÇO SOCIAL",
    "LAJE NIVELADA ENTRE TERRAÇO SOCIAL E SALA DE ESTAR",
    "JANELA COM PERSIANA DE ENROLAR",
    "UNIDADE ENTREGUE COM PISO LAMINADO E REVESTIMENTO NAS ÁREAS MOLHADAS",
    "ESPAÇO INDEPENDENTE DE ÁREA TÉCNICA PARA CONDENSADORA DE AR-CONDICIONADO",
    "PERSONAL HOME BY MITRE - OFERTA DE ACABAMENTOS E EQUIPAMENTOS PARA A PERSONALIZAÇÃO DA UNIDADE",
  ],
  [
    "INFRAESTRUTURA PARA AR-CONDICIONADO",
    "PONTO DE ÁGUA QUENTE NA COZINHA E BANHO",
    "PONTO PARA MÁQUINA DE LAVAR LOUÇA NA COZINHA",
    "BACIA COM VÁLVULA DUAL FLUX",
    "BANCADAS DA COZINHA E BANHEIRO ENTREGUES",
    "LAJE NIVELADA ENTRE TERRAÇO E SALA",
    "JANELA COM PERSIANA DE ENROLAR",
    "UNIDADE ENTREGUE COM PISO LAMINADO E REVESTIMENTO NAS ÁREAS MOLHADAS",
    "ESPAÇO INDEPENDENTE DE ÁREA TÉCNICA PARA CONDENSADORA DE AR-CONDICIONADO",
    "PERSONAL HOME BY MITRE - OFERTA DE ACABAMENTOS E EQUIPAMENTOS PARA A PERSONALIZAÇÃO DA UNIDADE",
  ],
];

function PlantasResidenciais() {
  const [selectedType, setSelectedType] = useState<number>(0);
  const [showFeatures, setShowFeatures] = useState<boolean>(false);

  const handlePrevious = () => {
    setSelectedType((prev) =>
      prev === 0 ? apartmentTypes.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedType((prev) =>
      prev === apartmentTypes.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="plants-section"
      className="relative bg-white text-black"
    >
      <div className="w-full h-[120px] bg-[url(/imgs/common/image-background-texture.jpg)] bg-cover" />
      <div className="lg:pt-8 w-full">
          <div className="flex items-start lg:flex-row">
            <div className="relative w-[42px] h-[100px] lg:w-[52px] lg:h-[124px] 2xl:w-[200px] 2xl:h-[155px] mr-6">
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
              <div className="relative md:w-[100%] lg:w-[31vw] 2xl:w-full font-unineue text-black mt-[4rem] lg:mt-[5rem] 2xl:mt-[6rem]">
                <div className="relative">
                  <div className="flex flex-col font-adero text-black text-[14px] lg:text-[16px] 2xl:text-[34px] xl:leading-[40px] uppercase">
                    <h2>
                      Plantas
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="relative w-full">
        <div id="imagem-plantas" className="lg:mt-6 mx-auto lg:w-[95vw] 2xl:w-[80vw] px-4 py-8 lg:pb-20">
            <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-mirror="true"
            data-aos-once="false"
            className="mt-5 flex flex-col lg:flex-row"
            >
            <div className="lg:w-1/2 lg:pr-12 md:min-h-[350px]">
                <div className="hidden md:grid md:grid-cols-4 md:gap-2 mb-6">
                {apartmentTypes.map((apt, index) => (
                    <button
                    key={index}
                    className={`min-h-16 py-3 px-2 border border-black transition-colors text-xs ${
                        selectedType === index
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setSelectedType(index)}
                    >
                    {apt.size} | {apt.type}
                    </button>
                ))}
                </div>
                <div className="grid grid-cols-1 gap-2 mb-6 md:hidden">
                {apartmentTypes.map((apt, index) => (
                    <a
                    href="#plantas-title"
                    key={index}
                    onClick={() => setSelectedType(index)}
                    className={` text-center py-3 px-4 border border-black transition-colors ${
                        selectedType === index
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    >
                    {apt.size} | {apt.type}
                    </a>
                ))}
                </div>
                <div className="mb-6 hidden lg:block">
                <h3 className="text-[12px] font-normal mb-4">
                    {apartmentTypes[selectedType].details}
                </h3>
                </div>
                <div className="hidden md:block ml-4">
                <div className="grid grid-cols-1 gap-y-2">
                    {apartmentFeatures[selectedType].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-black flex-shrink-0 mt-1"></div>
                        <span className="font-unineue text-[13px] font-medium uppercase">
                        {feature}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
                {showFeatures && (
                <div className="md:hidden mt-4 ml-2">
                    {apartmentFeatures[selectedType].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 mb-2">
                        <div className="w-1 h-1 rounded-full bg-black flex-shrink-0 mt-1"></div>
                        <span className="text-[12px] uppercase">{feature}</span>
                    </div>
                    ))}
                </div>
                )}
            </div>
            <div className="relative mt-2 lg:mt-0 lg:w-1/2">
                <p className="text-xs text-center mt-2 md:hidden">
                *IMAGEM PRELIMINAR
                </p>
                <div className="relative flex items-center justify-center mb-4 md:mb-2 lg:hidden">
                <button
                    className="flex h-[52px] w-[46px] md:hidden items-center justify-center text-black"
                    onClick={handlePrevious}
                >
                    <ChevronLeft size={52} strokeWidth={1} />
                </button>
                <span className="text-[12px] lg:hidden w-[50%] text-center">
                    {apartmentTypes[selectedType].details}
                </span>
                <button
                    className="flex h-[52px] w-[46px] md:hidden items-center justify-center text-black"
                    onClick={handleNext}
                >
                    <ChevronRight size={52} strokeWidth={1} />
                </button>
                <a
                    href="#imagem-plantas"
                    className="md:hidden absolute right-0 w-10 h-10 bg-black flex items-center justify-center"
                    onClick={() => setShowFeatures(!showFeatures)}
                >
                    <Plus className="text-white" size={16} strokeWidth={3} />
                </a>
                </div>
                <div className="relative flex items-center">
                <button
                    className="md:block absolute left-0 lg:top-1/3 z-10 w-10 h-10 md:w-[52px] md:h-26 flex items-center justify-center text-foreground hover:text-gray-800 "
                    onClick={handlePrevious}
                    aria-label="Apartamento anterior"
                >
                    <ChevronLeft size={62} strokeWidth={1.5} />
                </button>
                <div className="relative w-full">
                    <div className="relative w-full mx-auto min-h-[300px] md:w-[80%]">
                    <img
                        src={apartmentTypes[selectedType].image}
                        alt={`Planta do apartamento ${apartmentTypes[selectedType].size}`}
                        className="w-full h-full object-cover  "
                    />
                    </div>
                    <p className="text-xs text-left mt-2 hidden md:block mx-auto lg:w-[80%]">
                    *IMAGEM PRELIMINAR
                    </p>
                </div>
                <button
                    className="md:block absolute right-2 lg:top-1/3 z-10 w-10 h-10 md:w-[52px] md:h-26 flex items-center justify-center text-foreground hover:text-gray-800 "
                    onClick={handleNext}
                    aria-label="Próximo apartamento"
                >
                    <ChevronRight size={62} strokeWidth={1.5} />
                </button>
                </div>
                <p className="text-[10px] mt-4 text-gray-600 mx-auto lg:w-[80%]">
                ILUSTRAÇÃO ARTÍSTICA DA PLANTA DE{" "}
                {apartmentTypes[selectedType].size}. FINAL 21 COM SUGESTÃO DE
                DECORAÇÃO. OS MÓVEIS E UTENSÍLIOS SÃO DE DIMENSÕES COMERCIAIS E
                NÃO FAZEM PARTE DO CONTRATO DE COMPRA E VENDA DO IMÓVEL. AS
                MEDIDAS, ÁREAS, FACES DAS PAREDES. A PLANTA APRESENTADA É
                ILUSTRATIVA E CONTÉM SUGESTÃO DE DECORAÇÃO.
                </p>
            </div>
            </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-[50%] translate-y-[-50%] w-5 lg:w-12 h-[500px] lg:h-[650px] xl:h-[80%] bg-[#803A2B]" />
      </div>
    </section>
  );
}

export default PlantasResidenciais;
