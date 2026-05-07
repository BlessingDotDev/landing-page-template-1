import { Bars3Icon } from "@heroicons/react/24/outline";

function Button() {
  return (
    <button className="bg-white/15 rounded-xl 
      py-2 px-4 cursor-pointer md:px-8 transition-all duration-300">
        
      <Bars3Icon className="text-white w-6 h-6 md:hidden" />
      <p className="hidden md:block font-semibold">
        Menu
      </p>
    </button>
  )
}

export default Button;