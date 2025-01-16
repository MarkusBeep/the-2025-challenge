import React from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
const Formfull = () => {
  return (
    <div className="flex items-center flex-row gap-5">
      <Input
        placeholder="Your Name"
        className="text-center p-7 text-white text-xl "
      />
      <Button className="  border-e-slate-200  border-2 h-14 w-40 ">
        <img
          className="w-40"
          src="/images/wanonymous.png"
          alt="anonymusblack"
        />
      </Button>
      <Input
        placeholder="Your Answer"
        className="text-center p-7 text-white text-xl "
      />
      <Button className="   border-e-slate-200  border-2 h-14 w-40 ">
        Submit
      </Button>
    </div>
  );
};

export default Formfull;
