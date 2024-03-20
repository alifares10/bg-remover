import React from "react";
import { Button } from "../ui/button";
import { Upload, X } from "lucide-react";

const Header = () => {
  return (
    <div className=" text-white w-full justify-around flex p-3 h-[100px] relative items-center">
      <Button
        className="rounded-full bg-[#475366] flex space-x-1 items-center justify-center"
        variant={"ghost"}
      >
        <Upload size={24} />
        <span className="text-xl"> העלאת תמונה </span>
      </Button>
      <div className="items-center justify-center flex">
        <h1 className=" lg:text-3xl font-bold">
          העלאת תמונה כדי להסיר את הרקע
        </h1>
      </div>
      <Button
        variant={"ghost"}
        className="rounded-full absolute top-0 left-0 m-2 hover:bg-[#475366] transition-all duration-300 ease-in-out z-10"
      >
        <X size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default Header;
