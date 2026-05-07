import { Link } from 'react-router';
import Button from "../ui/Button";
import Logo from "../../assets/vision-logo.png";

function Header() {
  return (
    <div className=" bg-green-900 w-full flex justify-between items-center py-2 px-6">

      <Link to="/" className="logo flex items-center">
        <img src={Logo} className="h-8"/>
        <p className="pl-2 text-white font-light tracking-widest">
          VISION 
        </p>
      </Link>

      <Button />
    </div>
  );
}

export default Header;