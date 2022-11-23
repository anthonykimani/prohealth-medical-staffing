import AboutInfo from "../about-information-section/AboutInfo";
import Navigation from "../navigation-section/Navigation";

const AboutHeader = () => {
    return ( 
        <div className=" md:min-w-screen w-[100%] min-h-[700px] h-[100%]">
            <div  style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/senior.jpg'})`}} className="  w-[100%] min-h-[700px] h-[100%] bg-cover bg-no-repeat bg-black  bg-opacity-30 bg-blend-darken">
                <Navigation />
                <AboutInfo />
            </div>
        </div>
     );
}
 
export default AboutHeader;