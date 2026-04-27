import { Bars3Icon }  from "@heroicons/react/24/outline";
import Logo from "../assets/vision-logo.png";

function Header() {
  return (
    <div className=" bg-green-900 w-full flex justify-between items-center py-2 px-6">
      <div className="logo flex items-center">
        <img src={Logo} className="h-12"/>
        <p className="pl-2 text-white font-light tracking-widest">VISION </p>
      </div>

      <button className="bg-white/15 rounded-xl py-2 px-4 cursor-pointer md:px-8 transition-all duration-300"  >
        <Bars3Icon className="text-white w-6 h-6 md:hidden" />
        <p className="hidden md:block font-semibold">Menu</p>
      </button>
    </div>
  );
}

export default Header;