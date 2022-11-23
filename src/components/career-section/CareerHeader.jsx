import CareerInfo from "../career-info/CareerInfo";

const CareerHeader = () => {
    return ( 
        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/nurse-pointing.jpg'})`}} className="  w-[100%] min-h-[500px] h-[100%] bg-cover  bg-no-repeat bg-right md:bg-left">
            <CareerInfo />
        </div>
     );
}
 
export default CareerHeader;