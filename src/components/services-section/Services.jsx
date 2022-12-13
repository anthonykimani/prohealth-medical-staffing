const Services = () => {
    return ( 
        <div className="flex flex-col md:flex-row  justify-around items-end bg-blue-800 min-h-[700px] h-[100%]">
            <div className="flex flex-col justify-around h-[550px] text-white p-2">
                <h1 className="text-3xl md:text-6xl font-open font-bold">Dedicated Support</h1>
                <h3 className="text-xl ">24hr care from our staff who are trained professionals</h3>
                <button className="bg-white text-blue-800 text-sm font-bold py-3 px-5 rounded-full w-[150px]">contact us</button>
            </div>
            <div className=" h-[400px] md:h-[600px]">
                <img src={process.env.PUBLIC_URL + '/clipboard.png'} alt="" className="max-w-[500px] w-[100%] h-[400px] md:h-[600px]"/>
            </div>
        </div>
     );
}
 
export default Services;