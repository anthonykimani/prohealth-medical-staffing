const Faqs = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How does Prohealth Medical Staffing find qualified candidates
                for open positions?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  We have a team of experienced recruiters who use a variety of
                  methods to find qualified candidates for open positions. This
                  includes advertising job openings, searching through resumes
                  and job boards, and networking with healthcare professionals.
                  We also have a large pool of candidates who have previously
                  worked with us and are available for new assignments.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I apply for a position with Prohealth Medical Staffing?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  To apply for a position with Prohealth Medical Staffing, you
                  can visit our website and submit an online application. You
                  can also send your resume and a cover letter to our HR
                  department. If you meet the qualifications for an open
                  position, you may be contacted for an interview.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What benefits does Prohealth Medical Staffing offer its
                employees?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  We offer a range of benefits to our employees, including
                  competitive pay, flexible scheduling, and opportunities for
                  advancement. We also offer a variety of insurance options,
                  including health, dental, and vision coverage. In addition, we
                  provide ongoing training and support to help our employees
                  succeed in their roles.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
