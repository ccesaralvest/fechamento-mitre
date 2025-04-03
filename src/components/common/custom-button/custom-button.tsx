import { cn } from "@/lib/utils";
import { Button } from "src/components/ui/button";

interface CustomButtonProps {
  text: string;
  className?: string
};

const CustomButton = ({ className, text }: CustomButtonProps) => (
  <Button className={cn(`${className} flex justify-center items-center border-none rounded-none font-adero font-normal uppercase text-white bg-black`)}>
    {text}
  </Button>
);

export default CustomButton;
