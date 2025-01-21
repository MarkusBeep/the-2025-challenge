"use client";

import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Formfull = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="flex items-center flex-row gap-5">
      <Input
        className="!text-3xl font-steelFish text-center  text-white rounded-none 
        placeholder:font-steelFish placeholder:text-3xl pb-8 pt-8  disabled:bg-white disabled:placeholder:text-black  transition-all duration-1500"
        placeholder={isAnonymous ? "Anonymous" : "Your Name"}
        disabled={isAnonymous}
      />
      <Button
        className=" border-e-slate-200  border-2 h-14 w-40 rounded-none transition-colors duration-300  hover:bg-white "
        id="anonymusbutton"
        onClick={() => setIsAnonymous(!isAnonymous)}
      >
        <img
          className="w-40 "
          src="/images/wanonymous.png"
          alt="anonymusblack"
          id="annonymusimg"
        />
      </Button>
      <Input
        placeholder="Your Answer"
        className="!text-3xl font-steelFish text-center  text-white rounded-none 
        placeholder:font-steelFish placeholder:text-3xl pb-8 pt-8"
      />
      <Button className=" border-e-slate-200  border-2 h-14 w-40 rounded-none font-steelFish text-3xl p-6 font-medium  hover:bg-slate-200 hover:text-black ">
        Submit
      </Button>
    </div>
  );
};

export default Formfull;
