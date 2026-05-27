import { Link } from 'react-router';
import Button from "../ui/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";

import Logo from "../../assets/vision-logo.png";

function Header() {
  return (
    <div className=" bg-green-900 w-full flex justify-between items-center py-2 px-6">

      <Link to="/" className="logo flex items-center">
        <img src={Logo} className="h-8" />
        <p className="pl-2 text-white font-light tracking-widest">
          VISION
          <sup> (Works)</sup>
        </p>
      </Link>

      <Button variant="primaryHeader" className=" md:px-8 ">
        <Bars3Icon className="text-white w-6 h-6 md:hidden" />
        <p className="hidden md:block font-semibold">
          Menu
        </p>
      </Button>

    </div>
  );
}

export default Header;