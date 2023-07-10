export default function Features() {
  return (
    <>
      <div className="m-10 mb-10 flex flex-col items-center justify-center md:mb-16">
        <h2
          data-aos="flip-up"
          className="text-gray-800 mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl"
        >
          Our competitive advantage
        </h2>

        <p
          data-aos="flip-up"
          className="text-gray-500 mx-auto max-w-screen-md text-center md:text-lg"
        >
          Our experienced instructors will guide you through practical
          exercises, case studies, and simulated environments, providing you
          with a holistic understanding of the penetration testing process.
          Additionally, you will learn how to create comprehensive reports that
          communicate identified vulnerabilities and recommend appropriate
          remediation measures to stakeholders.
        </p>
      </div>
      <div className="m-10  flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid lg:grid-cols-2  ">
          <div data-aos="flip-up" className="flex gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>

            <div className="max-w-[300px]">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Hands On training
              </h3>
              <p className="text-gray-500 mb-2">
                Training offered, is based on learning by doing approach.
              </p>
            </div>
          </div>

          <div data-aos="flip-up" className="flex gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>

            <div className="max-w-[300px]">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Learn from Experts
              </h3>
              <p className="text-gray-500 mb-2">
                Learn form industry professional which currently working in
                perticular domain.
              </p>
            </div>
          </div>

          <div data-aos="flip-up" className="flex gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <div className="max-w-[300px]">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Learn latest security trends
              </h3>
              <p className="text-gray-500 mb-2">
                Catch up with the industry pace by learning latest trends.
              </p>
            </div>
          </div>

          <div data-aos="flip-up" className="flex gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <div className="max-w-[300px]">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Courses offered at pocket Freindly.
              </h3>
              <p className="text-gray-500 mb-2">
                We offered you best and Quality courses at pocket friendly
                prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
