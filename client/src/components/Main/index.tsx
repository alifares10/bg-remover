import React from "react";
import { Button } from "../ui/button";
import { BookCopyIcon } from "lucide-react";

const Main = () => {
  return (
    <div className="w-full h-[800px] p-4 rounded-xl flex items-center justify-center  space-x-3 ">
      <div className=" w-2/3 h-full rounded-lg bg-[#161B21] flex flex-col items-center justify-center">
        <div className="w-full flex rounded-t-lg h-1/5 bg-[#2F3A4B] ">
          header
        </div>
        <div className="w-full flex  h-full items-center justify-center">
          body
        </div>
        <div className="w-full flex rounded-b-lg h-1/5 bg-[#2F3A4B] justify-around items-center">
          <Button className="rounded-full bg-[#475366] flex space-x-1 items-center justify-center ">
            <BookCopyIcon />
            <p className="text-lg">תקנון החברה</p>
          </Button>
          <p className="text-lg "> על ידי העלאת תמונה אתה מסכים לתקנון החברה</p>
        </div>
      </div>
      <div className=" w-1/3 h-full rounded-lg bg-[#161B21] flex flex-col items-center justify-center">
        <div className="w-full flex rounded-t-lg h-1/5 bg-[#2F3A4B]"></div>
        <div className="w-full flex  h-full items-center justify-center">
          body
        </div>
        <div className="w-full flex rounded-b-lg h-1/5 bg-[#2F3A4B]"></div>
      </div>
    </div>
  );
};

export default Main;
