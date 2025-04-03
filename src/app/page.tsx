"use client";
import { useEffect, useState } from "react";
import { type LeadResponseOrUndefined, postLead } from "@/api/leads";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { GoogleTagManager } from "@next/third-parties/google";
import aos from "aos";
import Header from "@/components/common/header/header";
import HeroSection from "@/components/sections/hero-section/hero-section";
import OnBoardSection from "@/components/sections/onboard-section/onboard-section";
import ProfessionalsSection from "@/components/sections/professionals-section/professionals-section";
import AboutUsSection from "@/components/sections/about-us-section/about-us-section";
import ImageCarouselSection from "@/components/sections/image-carousel-section/image-carousel-section";
import ServicesSection from "@/components/sections/services-section/services-section";
import PlantsSection from "@/components/sections/plants-section/plants-section";
import CommonAreasSection from "@/components/sections/common-areas-section/common-areas-section";
import ContactModal from "@/components/ui/contact-modal";
import GastronomySection from "@/components/sections/gastronomy-section/gastronomy-section";
import LocationSection from "@/components/sections/location-section/location-section";
import EventSection from "@/components/sections/event-section/event-section";
import ContactEventsSection from "@/components/sections/contact-events-section/contact-events-section";
import Contact from "@/components/common/contact/contact";
import Footer from "@/components/common/footer/footer";
import "aos/dist/aos.css";

type InputForm = {
  name: string;
  email: string;
  fone: string;
  message: string;
};

const InputFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  fone: z.string(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export default function Home() {
  const [showEventOnly, setShowEventOnly] = useState(false);
  const [readPolicy, setReadPolicy] = useState(false);
  const [eventData, setEventData] = useState<{
    name: string;
    email: string;
    fone: string;
    date: string;
    time: string;
    title: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InputForm>({
    resolver: zodResolver(InputFormSchema),
  });

  const onSubmit = async (data: InputForm) => {
    try {
      const response: LeadResponseOrUndefined = await postLead(data);

      if (response) {
        console.log("enviado");
      }
    } catch (error: unknown) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Error while fetch data"
      );
    }
  };

  const handleEventData = (data: {
    name: string;
    email: string;
    fone: string;
    date: string;
    time: string;
    title: string;
  }) => {
    setEventData(data);
  };

  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined") {
        if (
          window.location.hash === "#event-section" ||
          window.location.hash === "#contact-events-section"
        ) {
          setShowEventOnly(true);
        } else {
          setShowEventOnly(false);
        }
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    if (showEventOnly) {
      setTimeout(() => {
        document
          .getElementById(window.location.hash.substring(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [showEventOnly]);

  useEffect(() => {
    if (!showEventOnly) {
      setTimeout(() => {
        const currentHash = window.location.hash;

        if (currentHash) {
          document
            .getElementById(currentHash.substring(1))
            ?.scrollIntoView({ behavior: "smooth" });

          setValue("name", "");
          setValue("email", "");
          setValue("fone", "");
          setValue("message", "");
        }
        setTimeout(() => {
          setValue("name", "");
          setValue("email", "");
          setValue("fone", "");
          setValue("message", "");
        }, 700);
      }, 500);
    }
  }, [showEventOnly]);

  useEffect(() => {
    if (eventData) {
      setTimeout(() => {
        setValue("name", eventData.name);
        setValue("email", eventData.email);
        setValue("fone", eventData.fone);

        if (
          window.location.hash === "#event-section" ||
          window.location.hash === "#contact-events-section" ||
          typeof window !== "undefined"
        ) {
          setValue(
            "message",
            `Agendamento realizado: ${eventData.title}. Data: ${eventData.date}, hora: ${eventData.time}. Local: Avenida Roque Petroni Júnior, 130 (Stand Haus Mitre Station Brooklin)`
          );
        }
      }, 200);
    } else {
      setValue("name", "");
      setValue("email", "");
      setValue("fone", "");
      setValue("message", "");
    }
  }, [eventData, setValue]);

  return (
    <>
      <GoogleTagManager gtmId="GTM-WH8G73M8" />
      <ContactModal />
      <Header />

      {showEventOnly ? (
        <>
          <EventSection onEventSelect={handleEventData} />
          <ContactEventsSection
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            readPolicy={readPolicy}
            setReadPolicy={setReadPolicy}
          />
        </>
      ) : (
        <>
          <HeroSection />
          <OnBoardSection />
          <ProfessionalsSection />
          <AboutUsSection />
          <ImageCarouselSection />
          <ServicesSection />
          <CommonAreasSection />
          <PlantsSection />
          <LocationSection />
          <GastronomySection />
          <Contact
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            readPolicy={readPolicy}
            setReadPolicy={setReadPolicy}
          />
        </>
      )}
      <Footer />
    </>
  );
}
