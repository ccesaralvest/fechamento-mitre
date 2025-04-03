"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "src/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "src/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/imgs/image-carousel-section/image-sport-arena.jpg",
    description: "Perspectiva ilustrada da EMBASAMENTOJUNIOR",
  },
  {
    src: "/imgs/image-carousel-section/image-beauty-care.jpg",
    description: "Perspectiva ilustrada da BEATYCARE",
  },
  {
    src: "/imgs/image-carousel-section/image-celebration-hall.jpg",
    description: "Uma outra CELEBRATION HALL",
  },
  {
    src: "/imgs/image-carousel-section/image-coworking.jpg",
    description: "Perspectiva ilustrada da COWORKING",
  },
  {
    src: "/imgs/image-carousel-section/image-embasement.jpg",
    description: "Perspectiva ilustrada da EMBASAMENTOJUNIOR",
  },
];

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);

    return () => void api.off("select", handleSelect);
  }, [api]);

  return (
    <section
      id="image-carousel-section"
      className="relative pb-6 flex flex-col justify-evenly items-center"
    >
      <div className="absolute z-10 bg-[url(/imgs/TEX-CIMENTO.png)] bg-cover bg-center bg-no-repeat bottom-0 h-[35%] w-full" />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="w-full flex mb-10"
      >
        <div className="mt-0 md:mt-0 w-full">
          <div className="flex items-start lg:flex-row">
            <div className="relative w-[42px] h-[100px] md:h-[125px] lg:w-[52px] lg:h-[184px] xl:h-[154px] 2xl:w-[200px] 2xl:h-[255px] mr-6">
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
              <div className="relative flex flex-col md:flex-row items-baseline md:items-center w-full lg:w-[82vw] 2xl:w-[78vw] font-unineue text-black mt-[1.2rem] lg:mt-[3.5rem] xl:mt-[2rem] 2xl:mt-[5.5rem]">
                <div className="flex-1 relative">
                  <div className="flex flex-col font-adero text-black text-[14px] font-normal lg:text-[16px] 2xl:text-[32px] lg:leading-[32px] 2xl:leading-[48px] uppercase">
                    <h4>
                      <strong className="font-extrabold">Celebre com estilo</strong>
                    </h4>
                    <h4>
                      em espaços versáteis
                    </h4>
                    <h4>
                      e sofisticados
                    </h4>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 lg:translate-y-[40px] 2xl:translate-y-0 w-full md:w-auto min-h-[88px] md:min-h-[120px] font-unineue text-black sm:items-center md:items-start xl:max-h-[210px] lg:max-h-[180px] md:max-h-[160px] flex items-end">
                  <div className="relative uppercase w-[95%] flex flex-col items-end text-end text-[2.4rem] leading-[1.8rem] font-gotham-black font-bold sm:w-[65%] sm:mx-auto sm:text-[3.4rem] sm:leading-[2.5rem] md:mt-[-16px] md:text-[4.4rem] md:leading-[3.5rem]">
                    <strong className="text-black tracking-[-0.13em] lg:text-[100px] 2xl:text-[120px] lg:leading-[62px] 2xl:leading-[82px]">EXCLU</strong>
                    <strong className="text-black tracking-[-0.13em] lg:text-[100px] 2xl:text-[120px] lg:leading-[62px] 2xl:leading-[82px]">SIVIDADE</strong>
                    <div className="inset-0">
                      <div className="absolute h-full top-[-12px] right-[-5px] border-l-[2px] border-[#803A2B]   border-1 md:right-[-7px]" />
                      <div className="absolute w-full max-w-[12rem] top-0 md:top-[2px] -right-[0.875rem] sm:max-w-[6rem] md:-right-[1rem] border-t-[2px] border-[#803A2B]   md:border-1 md:w-[13rem] xl:w-[18rem]" />
                    </div>
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
        className="relative flex justify-center items-center z-10 w-full"
      >
        <ChevronRight
          className="absolute z-20 cursor-pointer right-0 sm:right-10 sm:top-1/2 transform -translate-y-1/2"
          color="white"
          size={80}
          onClick={() => api?.scrollNext()}
          strokeWidth={1}
        />
        <ChevronLeft
          className="absolute z-20 cursor-pointer left-0 sm:left-10 sm:top-1/2 transform -translate-y-1/2"
          color="white"
          size={80}
          onClick={() => api?.scrollPrev()}
          strokeWidth={1}
        />
        <Carousel
          setApi={setApi}
          className="relative w-full md:my-[2rem] lg:my-[4rem] xl:my-[7rem]"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="py-3 flex">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className="relative h-[280px] sm:h-[320px] md:h-[400px] xl:h-[520px]  basis-full sm:basis-1/2 px-2"
              >
                <div
                  className="p-1 w-full h-full flex flex-col justify-center items-center shadow-2xl transition-transform duration-500"
                  style={{
                    transform: current === index ? "scale(1.1)" : "scale(0.9)",
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
                    <Dialog>
                      <DialogTrigger>
                        <Image
                          src={img.src}
                          alt={img.description}
                          fill
                          className="object-cover cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="w-full h-[56vw] xl:max-h-[800px] max-w-[80vw] p-2 flex items-center justify-center">
                        <DialogTitle className="sr-only hidden">
                          {img.description}
                        </DialogTitle>
                        <div className="relative w-full h-full">
                          <Image
                            src={img.src}
                            alt={img.description}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div
                    className={`bg-[#803A2C] h-12 w-full flex justify-center items-center font-unineue text-[10px] lg:text-[16px] xl:text-[18px] font-medium leading-[28px] text-white`}
                    style={{
                      marginBottom: current === index ? "8px" : "",
                    }}
                  >
                    {img.description}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
