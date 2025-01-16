import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-row space-x-4">
      <Facebook color="white" size={29} className="pt-1 mt-0.5" />
      <Instagram color="white" size={30} className="pt-1 mt-0.5" />
      <Image src={"/images/tiktok.png"} width={39} height={39} alt="tiktok" />
    </footer>
  );
};

export default Footer;
