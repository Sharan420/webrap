import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { Dropzone } from "@/components/Dropzone";
import { Button } from "@/components/ui/button";
const Scheck = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen dark:bg-[#18181b] flex flex-col justify-center items-center"></div>
    </>
  );
};

export default Scheck;
