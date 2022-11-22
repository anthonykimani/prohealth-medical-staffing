import logo from "./logo.svg";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="flex flex-col md:flex-row justify-around items-center ">
        <div>
          <div>
            <img src={logo} alt="" />
            <h3>@prohealth medical staffing</h3>
          </div>
          <div>
            <h3>Contact</h3>
            <h4>
              <span>phone:</span>+254799559285
            </h4>
            <h4>
              <span>email:</span>kimaniantoni@gmail.com
            </h4>
            <h4>
              <span>address:</span>24th avenue oregon 34street portland
            </h4>
          </div>
          <div>
            <i class="bx bxl-facebook-square bx-md"></i>
            <i class="bx bxl-twitter bx-md"></i>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <h4>
            <span>phone:</span>+254799559285
          </h4>
          <h4>
            <span>email:</span>kimaniantoni@gmail.com
          </h4>
          <h4>
            <span>address:</span>24th avenue oregon 34street portland
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
