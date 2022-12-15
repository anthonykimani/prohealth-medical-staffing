const Feature = () => {
  return (
    <div>
      <section className="">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">
            Are you looking for a caring and compassionate home for your loved ones?
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
            Look no further than our nursing home for senior citizens. Our dedicated and trained staff are committed to providing the highest quality care to our residents
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Some of the services we offer
              </h3>
              <p className="mt-3 text-lg ">
              We offer a range of services, including assistance with daily activities, medication management, and personalized care plans. 
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Physical Activity/Fitness
                    </h4>
                    <p className="mt-2 ">
                    Our caregivers can help seniors incorporate physical activity into their daily routines, whether that means going for a walk, doing some stretching exercises, or attending a fitness class. We can also provide transportation to local fitness centers or community classes, if needed.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Mental Health
                    </h4>
                    <p className="mt-2 ">
                    In addition to our physical care services, we also offer support for mental health care.Our caregivers are trained to provide support and assistance for these issues, and can work with clients and their families to develop a plan of care. We can also help connect seniors to mental health resources and professionals in their community, if needed. 
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Community Interaction
                    </h4>
                    <p className="mt-2 ">
                    we also strive to help our clients stay connected to their communities. Our caregivers can help seniors maintain social connections and engage with their communities in a variety of ways. We can provide transportation to community events, social outings, or religious services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={process.env.PUBLIC_URL + '/two-nurses.jpg'}
                alt=""
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  A Home away from Home
                </h3>
                <p className="mt-3 text-lg ">
                  
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6">
                      Regular Service Evaluation
                      </h4>
                      <p className="mt-2 ">
                      We also conduct regular evaluations to ensure that our clients are satisfied with the services they are receiving.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6">
                        Companionship from our Caregivers
                      </h4>
                      <p className="mt-2 ">
                      In addition to the physical and practical support we provide, our caregivers are also a source of companionship and socialization for our clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6">
                     Reliable and Trusted Services
                      </h4>
                      <p className="mt-2 ">
                      In addition to the exceptional care we provide, we also pride ourselves on being a trusted and reliable partner for families. We understand that choosing a home care provider is an important decision, and we are committed to being transparent and communicative throughout the process. Our team is available 24/7 to answer questions, address concerns, and provide updates on your loved ones' care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={process.env.PUBLIC_URL + '/oldman.jpg'}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
