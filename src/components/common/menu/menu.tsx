"use client";
import React, { useState } from "react";
import { Menu as MenuIcon, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "src/components/ui/dropdown-menu";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const menuItems = [
    { text: "HOME", href: "#hero-section" },
    { text: "PROFISSIONAIS", href: "#professionals-section" },
    { text: "GALERIA", href: "#image-carousel-section" },
    { text: "PARCEIROS", href: "#services-section" },
    { text: "ÁREAS COMUNS", href: "#common-areas-section" },
    { text: "PLANTAS", href: "#plants-section" },
    { text: "LOCALIZAÇÃO", href: "#location-section" },
    { text: "GASTRONOMIA", href: "#gastronomy-section" },
    { text: "EVENTOS", href: "#event-section" },
    { text: "CONTATO", href: "#contact-section" },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    if (window.location.hash === "#event-section" || window.location.hash === "#contact-events-section") {
      setTimeout(() => {
        history.replaceState(null, "", window.location.pathname);
        setTimeout(() => {
          window.location.hash = href;
          document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }, 500);
    } else {
      window.location.hash = href;
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div>
        <ul className="hidden lg:flex justify-center items-center font-unineue text-black uppercase header-ul-primary">
          {menuItems.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`group relative text-sm sm:text-[.550em] md:text-[.700em] lg:text-[.8em] xl:text-[.875em] px-[0.8rem] cursor-pointer transition-transform duration-300 hover:scale-[1.04] before:w-0 hover:before:content-[''] hover:before:absolute hover:before:-bottom-1 hover:before:left-1/2 hover:before:-translate-x-1/2 before:border-b-[2px] before:border-transparent before:transition-all before:duration-500 hover:before:w-[90%] hover:before:border-b-[#8B3A2A]`}
              >
                <a href={menu.href} className="flex justify-center items-center" onClick={(event) => handleMenuClick(event, menu.href)}>
                  {menu.text}
                </a>
              </li>
              {index < menuItems.length - 1 && <span className={`text-black`}>|</span>}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="lg:hidden mt-4">
        <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
          <DropdownMenuTrigger asChild className="bg-foreground p-[2px] mr-4">
            {open ? <ChevronDown className="text-white w-[40px] h-[32px]" /> : <MenuIcon className="text-white w-[40px] h-[32px]" />}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            {menuItems.map((menu, index) => (
              <React.Fragment key={index}>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <a href={menu.href} className="flex items-center uppercase" onClick={(event) => handleMenuClick(event, menu.href)}>
                      {menu.text}
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {index !== menuItems.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Menu;
