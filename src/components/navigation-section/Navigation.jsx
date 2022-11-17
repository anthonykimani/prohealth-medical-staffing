import logo from "./logo.svg";

const Navigation = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center">
        <div className="min-w-[200px] w-[100%]">
          <img src={logo} alt="" />
        </div>
        <div className="hidden sm:block w-auto">
          <ul className="flex flex-col sm:flex-row justify-around font-jost text-base md:text-lg text-white font-extrabold w-auto">
            <li className="mx-1 w-[100%] min-w-[100px] ">Home</li>
            <li className="mx-1 w-[100%] min-w-[100px] ">About Us</li>
            <li className="mx-1 w-[100%] min-w-[100px] ">Careers</li>
            <li className="mx-1 w-[100%] min-w-[100px] ">Contact Us</li>
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
