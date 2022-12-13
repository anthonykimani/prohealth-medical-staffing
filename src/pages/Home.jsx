import Carousel from "../components/carosel/Carousel";
import ContactForm from "../components/contact-form-section/ContactForm";
import EmailContact from "../components/email-contact-form/EmailContact";
import Feature from "../components/feature-section/Feature";
import Footer from "../components/footer-section/Footer";
import HeroSection from "../components/hero-section/HeroSection";
import Services from "../components/services-section/Services";

const Home = () => {
    return ( 
        <div>
            {/* <Carousel /> */}
            <HeroSection />
            <Services />
            <Feature />
            <EmailContact />
            {/* <ContactForm /> */}
            <Footer />
        </div>
     );
}
 
export default Home;