import logo from "./logo.svg";
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center">
        <div className="min-w-[200px] w-[100%]">
          <img src={logo} alt="" />
        </div>
        <div className="hidden sm:block w-auto">
          <ul className="flex flex-col sm:flex-row justify-around font-jost text-base md:text-lg text-white font-extrabold w-auto">
            <Link to={"/"}><li className="mx-1 w-[100%] min-w-[100px] ">Home</li></Link>
            <Link to={"/about"}><li className="mx-1 w-[100%] min-w-[100px] ">About Us</li></Link>
            <Link to={"/careers"}><li className="mx-1 w-[100%] min-w-[100px] ">Careers</li></Link>
            <Link to={"/contact"}><li className="mx-1 w-[100%] min-w-[100px] ">Contact Us</li></Link>
          </ul>
        </div>
        <div className="block sm:hidden">
          <i class="bx bx-menu bx-md text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
