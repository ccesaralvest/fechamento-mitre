"use client";
import { SubmitHandler, UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import FormContact from "src/components/form-contact";
 
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

const Contact = ({
  handleSubmit,
  register,
  errors,
  onSubmit,
  readPolicy,
  setReadPolicy,
}: ContactProps) => {
  return (
    <section id="contact-section">
      <div className="w-full h-[120px] bg-[url(/imgs/common/image-background-texture.jpg)] bg-cover" />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
        className="mt-8 xl:mt-14 flex flex-col items-center w-full md:pt-[30px] lg:pt-0 lg:mt-8"
      >
        <div className="w-full">
          <div className="flex items-start lg:flex-row">
            <div className="relative w-[42px] h-[140px] lg:w-[52px] lg:h-[217px] 2xl:w-[400px] 2xl:h-[250px] mr-6">
              <div className="absolute top-0 right-0 w-[2px] h-[100%] bg-[#803A2B]" />
              <div className="absolute bottom-[14px] lg:bottom-20 left-0 w-[258px] lg:w-[440px] xl:w-[250px] 2xl:w-[730px] h-[2px] bg-[#803A2B]" />
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
                  <div className="flex flex-col font-adero text-black text-[18px] lg:text-[16px] 2xl:text-[32px] xl:leading-[28px] 2xl:leading-[40px] uppercase">
                    <h5>
                        Fale com nossos
                    </h5>
                    <h5>
                        especialistas
                    </h5>
                  </div>
                  <div className="mt-2 font-adero text-[10px] leading-[23px] lg:text-[12px] font-normal lg:leading-[23px] uppercase text-black">
                    <p>
                        Para saber mais envie seus dados e 
                    </p>
                    <p>
                        entraremos em contato
                    </p>
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

export default Contact;
