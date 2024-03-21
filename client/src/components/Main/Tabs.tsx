import { Image, Upload } from "lucide-react";

interface TabsProps {
  title: string;
}

const Tabs = ({ title }: TabsProps) => {
  return (
    <div className=" m-2 md:w-[150px]  flex h-full justify-center items-center gap-1 rounded-md hover:bg-primary cursor-pointer transition-all ">
      <p>{title}</p>
      {title === "מקורי" ? <Image size={20} /> : <Upload size={20} />}
    </div>
  );
};

export default Tabs;
