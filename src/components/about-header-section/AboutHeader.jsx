import Navigation from "../navigation-section/Navigation";

const AboutHeader = () => {
    return ( 
        <div className=" md:w-full min-h-[1200px] h-[100%]">
            <div  style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/senior.jpg'})`}} className=" md:w-screen min-h-[900px] h-[100%] bg-contain bg-no-repeat ">
                <Navigation />
            </div>
        </div>
     );
}
 
export default AboutHeader;