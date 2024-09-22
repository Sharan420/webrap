import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "@/components/theme-provider";

const Dashboard = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Navbar />
      <div className="w-full h-screen dark:bg-[#18181b] flex flex-col justify-center items-center gap-0 leading-none">
        <h1 className="text-[10rem] font-black font-raleway text-slate-300 dark:text-zinc-800">
          WELCOME
        </h1>
        <h1 className="text-[4rem] font-black font-raleway text-slate-300 dark:text-zinc-800 tracking-[0.35em]">
          TO WEBRAP
        </h1>
      </div>
      <Button
        className="absolute bottom-4 right-4"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <BsMoonStars className="text-xl" />
        ) : (
          <BsSun className="text-xl" />
        )}
      </Button>
    </>
  );
};

export default Dashboard;
