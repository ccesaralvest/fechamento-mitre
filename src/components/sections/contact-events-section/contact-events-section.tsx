"use client";
import FormContact from "src/components/form-contact";
import { SubmitHandler, UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  fone: string;
  message: string;
};

interface ContactProps {
  handleSubmit: UseFormHandleSubmit<FormValues>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  readPolicy: boolean;
  setReadPolicy: (value: boolean) => void;
}

const ContactEvents = ({
  handleSubmit,
  register,
  errors,
  onSubmit,
  readPolicy,
  setReadPolicy,
}: ContactProps) => {
  return (
    <section id="contact-events-section">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false" className="flex flex-col items-center w-full pt-[67px]"
      >
        <div className="w-full">
          <div className="flex items-start lg:flex-row">
            <div className="relative w-[42px] h-[140px] lg:w-[52px] lg:h-[134px] 2xl:w-[400px] 2xl:h-[250px] mr-6">
              <div className="absolute top-0 right-0 w-[2px] h-[100%] bg-[#803A2B]" />
              <div className="absolute bottom-[14px] lg:bottom-20 left-0 w-[258px] lg:w-[250px] h-[2px] bg-[#803A2B]" />
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
              <div className="relative md:w-[100%] lg:w-[31vw] 2xl:w-full font-unineue text-black">
                <div className="relative">
                  <div className="flex flex-col font-adero text-black text-[18px] lg:text-[16px] 2xl:text-[32px] xl:leading-[40px] uppercase">
                    <h5>
                        Fale com nossos
                    </h5>
                    <h5>
                        especialistas
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:w-[90%] lg:mt-[3rem] lg:w-[940px]">
          <FormContact
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            readPolicy={readPolicy}
            setReadPolicy={setReadPolicy}
          />
        </div>
        <div className="relative w-full h-[11.3rem] bg-[#803A2C]">
          <div className="absolute -top-32 bg-[#803A2C] h-full w-full" />
        </div>
      </div>
    </section>
  );
}

export default ContactEvents;
