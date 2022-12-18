import CareerCard from "../components/career-card/CareerCard";
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
            <div className="flex flex-col justify-around items-center p-5">
                <h1 className="text-3xl font-semibold">Open Positions</h1>
                <h3 className="text-base text-center max-w-[1100px] py-9">Our company is committed to providing exceptional healthcare professionals to seniors, enabling them to maintain a comfortable lifestyle with dignity. Please select the job to apply.</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center p-1">
                <CareerCard />
                <CareerCard />
                <CareerCard />
            </div>
            <Footer />
        </div>
     );
}
 
export default Career;