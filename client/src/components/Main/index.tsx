import React from "react";
import { Button } from "../ui/button";
import { BookCopyIcon } from "lucide-react";
import Download from "./Download";
import Tabs from "./Tabs";

const Main = () => {
  return (
    <div className="w-full h-[800px] p-4 rounded-xl flex items-center justify-center  space-x-3 ">
      <div className=" w-2/3 h-full rounded-lg bg-[#161B21] flex flex-col items-center justify-center">
        <div className="w-full flex rounded-t-lg h-1/5 bg-[#2F3A4B] justify-end items-center text-3xl gap-2">
          <Tabs title="מקורי" />
          <Tabs title="הסר רקע" />
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
        <div className="w-full flex flex-col h-full items-center justify-center divide-y-2">
          <Download
            title="תמונה חינמית"
            des="תצוגה מקדימה של תמונה"
            btn_text="הורדה חינמית"
          />
          <Download title="Pro" des="תמונה מלאה" btn_text=" HD הורדה  " />
        </div>
        <div className="w-full flex rounded-b-lg h-1/5 bg-[#2F3A4B]"></div>
      </div>
    </div>
  );
};

export default Main;
