import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-row space-x-4">
      <a
        href="https://www.facebook.com/profile.php?id=61571316427909"
        target="_blank"
      >
        <Facebook color="white" size={29} className="pt-1 mt-0.5" />
      </a>
      <a href="https://www.instagram.com/the2025challenge" target="_blank">
        <Instagram color="white" size={30} className="pt-1 mt-0.5" />
      </a>
      <a href="https://www.tiktok.com/@the.2025.challeng" target="_blank">
        <Image src={"/images/tiktok.png"} width={39} height={39} alt="tiktok" />
      </a>
    </footer>
  );
};

export default Footer;
