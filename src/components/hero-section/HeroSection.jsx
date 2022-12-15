import Navigation from "../navigation-section/Navigation";

const HeroSection = () => {
    return ( 
        <div  style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/hero-image.jpg'})`}} className="w-[100%] min-h-[800px] h-[100%] bg-cover bg-no-repeat bg-black  bg-opacity-30 bg-blend-darken flex justify-between flex-col bg-fixed" >
            <Navigation />
            <div className=" flex flex-col items-center text-white text-center justify-around min-h-[300px] h-[100%]">
                <h2 className="text-2xl font-bold">Nursing Care Professional Services</h2>
                <h1 className="text-5xl md:text-7xl font-bold">Offering the Best in Medical Staffing</h1>
                <button className="bg-blue-700 text-sm font-bold py-4 px-6 rounded-full">Get Started</button>
            </div>
        </div>
     );
}
 
export default HeroSection;