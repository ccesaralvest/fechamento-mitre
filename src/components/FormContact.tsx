"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, FieldErrors } from "react-hook-form";
import { useState } from "react";

interface ContactFormProps {
  handleSubmit: UseFormHandleSubmit<FormValues>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  readPolicy: boolean;
  setReadPolicy: (checked: boolean) => void;
}

interface FormValues {
  name: string;
  email: string;
  fone: string;
  message: string;
}

export default function ContactForm({
  handleSubmit,
  register,
  errors,
  onSubmit,
  readPolicy,
  setReadPolicy,
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Dados enviados:", data);
    onSubmit(data);
    setIsSubmitted(true);
  };

  const formatPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    event.target.value = value;
  };

  return (
    <div className="mt-8 p-3 w-full relative z-10">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
        <Card className="w-full shadow-black shadow-2xl rounded-sm p-5">
          {isSubmitted ? (
            <div className="text-center text-black-500 font-bold py-5">
              Obrigado pelo envio!
            </div>
          ) : (
            <CardContent className="space-y-5">
              <div>
                <Input id="name" {...register("name")} placeholder="NOME *" className="mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Input id="email" type="email" {...register("email")} placeholder="EMAIL *" className="mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Input id="fone" {...register("fone")} placeholder="TELEFONE *" className="mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none" onInput={formatPhone} />
                {errors.fone && <p className="text-red-500 text-xs mt-1">{errors.fone.message}</p>}
              </div>

              <div>
                <Textarea id="message" {...register("message")} placeholder="MENSAGEM *" className="input-message-form mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none" />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={readPolicy} onCheckedChange={(checked) => setReadPolicy(Boolean(checked))} className="border-foreground border-2 rounded-none" />
                <label htmlFor="terms" className="text-[0.69rem] font-unineue font-medium uppercase leading-none">
                  Li e concordo com as políticas de privacidade
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={!readPolicy}>ENVIAR</Button>
            </CardContent>
          )}
        </Card>
      </form>
    </div>
  );
}