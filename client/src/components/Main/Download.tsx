import { Button } from "../ui/button";
import new_icon from "../../assets/new.png";

interface DownloadProps {
  title: string;
  des: string;
  btn_text: string;
}

const Download = ({ title, des, btn_text }: DownloadProps) => {
  return (
    <div className=" flex w-full h-1/2 flex-col justify-center items-center gap-2 mx-auto">
      <div className="flex gap-2">
        <h1 className="text-3xl">{title}</h1>
        {title === "Pro" && <img src={new_icon} alt="new" />}
      </div>
      <div className="flex gap-2">
        <p className="text-2xl">{title === "Pro" ? "1980x1920" : "621x408"}</p>
        <p className="text-2xl">{des}</p>
      </div>
      <Button className="bg-[#475366] rounded-full lg:w-[300px] lg:h-12 text-xl">
        <p>{btn_text}</p>
      </Button>
    </div>
  );
};

export default Download;
