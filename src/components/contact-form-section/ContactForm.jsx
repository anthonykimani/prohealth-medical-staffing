const ContactForm = () => {
    return ( 
        <div className="flex flex-col md:flex-row justify-around items-center m-5">
            <div className="max-w-[500px] max-h-[400px] h-[100%] my-3">
                <h1 className="text-4xl font-bold text-blue-900">Get In Touch</h1>
                <h3 className="font-jost max-w-[400px] w-[100%] ">Let us know what we can do to make your life easier and feel confident that your loved one is getting the care they deserve.</h3>
            </div>
            <div className="max-w-[400px] w-[100%]">
                <form>
                    <div className="flex flex-col">
                        <label htmlFor="name">your name</label>
                        <input type="text" name="name" className="bg-gray-100 border rounded-full text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 pl-3 mt-2 max-w-[400px] w-[100%] " />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">your email</label>
                        <input type="text" name="email" className="bg-gray-100 border rounded-full text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 pl-3 mt-2 max-w-[400px] w-[100%] " />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone">your phone</label>
                        <input type="text" name="phone" className="bg-gray-100 border rounded-full text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 pl-3 mt-2 max-w-[400px] w-[100%] " />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message">your message</label>
                        <input type="text" name="message" className="bg-gray-100 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 pl-3 mt-2 max-w-[400px] w-[100%] min-h-[100px] h-[100%]" />
                    </div>
                    <input type="submit" className="bg-blue-900 text-white border rounded-full text-xs font-medium leading-none placeholder-gray-400 py-3 pl-3 mt-2 max-w-[400px] w-[100%] " />
                </form>
            </div>
        </div>
     );
}
 
export default ContactForm;