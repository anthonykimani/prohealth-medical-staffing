import logo from "./logo.svg";
import { Link } from "react-router-dom"
import { useState } from "react";

const Navigation = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = ()=>{
    console.log("clicked");
    setShowMenu(!showMenu);
  }

  return (
    <div className="">
      <div className="flex justify-around items-center">
        <div className="min-w-[200px] w-[100%]">
          <img src={logo} alt="" />
        </div>
        <div className="block sm:hidden">
          <i class="bx bx-menu bx-md text-white" onClick={toggleMenu}></i>
        </div>
        <div className="absolute top-0 sm:block bg-blue-900 p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  " style={showMenu ? { display:"block"}:{display:"none"}}>
          <i class='bx bx-x bx-sm text-white' onClick={toggleMenu}></i>
          <ul className=" flex flex-col sm:flex-row justify-around font-jost text-base md:text-lg text-white font-extrabold w-auto">
            <Link to={"/"}><li className="my-2 mx-1 w-[100%] min-w-[100px] ">Home</li></Link>
            <Link to={"/about"}><li className="my-2 mx-1 w-[100%] min-w-[100px] ">About Us</li></Link>
            <Link to={"/careers"}><li className="my-2 mx-1 w-[100%] min-w-[100px] ">Careers</li></Link>
            <Link to={"/contact"}><li className="my-2 mx-1 w-[100%] min-w-[100px] ">Contact Us</li></Link>
          </ul>
        </div>

        <div className="hidden sm:block">
          <ul className=" flex flex-col sm:flex-row justify-around font-jost text-base md:text-lg text-white font-extrabold w-auto">
            <Link to={"/"}><li className="mx-1 w-[100%] min-w-[100px] ">Home</li></Link>
            <Link to={"/about"}><li className="mx-1 w-[100%] min-w-[100px] ">About Us</li></Link>
            <Link to={"/careers"}><li className="mx-1 w-[100%] min-w-[100px] ">Careers</li></Link>
            <Link to={"/contact"}><li className="mx-1 w-[100%] min-w-[100px] ">Contact Us</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
