import Navigation from "../components/navigation-section/Navigation";

const Contact = () => {
    return ( 
        <div>
            <div className="bg-blue-900">
            <Navigation />
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/contact.jpg'} alt=""  className="  w-[100%] min-h-[700px] h-[100%] bg-cover  bg-no-repeat bg-black bg-opacity-30 bg-blend-darken bg-right md:bg-left" />
            </div>
        </div>
     );
}
 
export default Contact;