const AboutInfo = () => {
  return (
    <div className="flex justify-around md:justify-end ">
      <div className="flex flex-col items-center justify-around p-4 mt-[200px] max-w-[600px] text-white font-jost min-h-[200px] h-[100%] ">
        <h1 className="text-4xl ">Our Story</h1>
        <h3>
          For nearly 2 years, Prohealth Medical Staffing has partnered with
          healthcare providers by sourcing medical talent across multiple
          disciplines to support their medical staffing and recruitment needs.
          Today, our clinicians provide services across the state of Oregon.
        </h3>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
          >
            <i class="fa fa-share-square fa-sm p-1" aria-hidden="true"></i>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
