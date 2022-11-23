import CareerHeader from "../components/career-section/CareerHeader";
import Footer from "../components/footer-section/Footer";
import Navigation from "../components/navigation-section/Navigation";

const Career = () => {
    return ( 
        <div>
            <div className="bg-blue-900">
                <Navigation />
            </div>
            <CareerHeader />
            <Footer />
        </div>
     );
}
 
export default Career;