import Navigation from "../navigation-section/Navigation";

const HeroSection = () => {
    return ( 
        <div  style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/hero-image.jpg'})`}} className="w-[100%] min-h-[700px] h-[100%] bg-cover bg-no-repeat bg-black  bg-opacity-30 bg-blend-darken flex justify-between flex-col" >
            <Navigation />
            <div className=" flex flex-col items-center text-white text-center justify-around min-h-[300px] h-[100%]">
                <h2 className="text-2xl font-bold">Nursing Care Professional Services</h2>
                <h1 className="text-5xl md:text-7xl font-bold">Offering the Best in Home Care</h1>
                <button className="bg-indigo-800 text-sm font-bold py-3 px-5 rounded-full">Get Started</button>
            </div>
        </div>
     );
}
 
export default HeroSection;