import ContactInfo from "../components/contact-info-section/ContactInfo";
import Footer from "../components/footer-section/Footer";
import Navigation from "../components/navigation-section/Navigation";

const Contact = () => {
  return (
    <div>
      <div className="bg-blue-900">
        <Navigation />
      </div>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/contact.jpg"})`,
        }}
        className="w-[100%] min-h-screen h-[100%] bg-cover bg-no-repeat bg-black  bg-opacity-20 bg-blend-darken flex justify-between flex-col bg-center md:bg-left"
      >
        <div className="flex justify-around items-center min-h-screen h-[100%]">
          <div className="flex flex-col items-center justify-around p-4 pt-[200px] md:pt-[100px] max-w-[400px] md:max-w-[600px] text-white font-jost min-h-[200px] h-[100%] ">
            <h1 className="text-6xl font-bold text-white ">Careers</h1>
            <h3 className="mt-[50px] text-white">
              We match nurses, GPs, nurses and allied health professionals with
              primary care providers, hospitals and local authorities to deliver
              the best services.
            </h3>
          </div>
        </div>
      </div>
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact;
