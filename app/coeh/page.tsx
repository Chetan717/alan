import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Features from "@/components/Common/Feature";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const Coeh = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      {/* <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      ></div> */}
      <section className="py-16 md:py-20 lg:py-28">
        <h1 data-aos="flip-up" className="m-10 text-center text-3xl font-bold ">
          🔥 Certified Ethical Hacker (COEH)💻
        </h1>

        <div className="container">
          <div className="-mx-4 flex justify-center items-center">
            {/* <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
                data-aos="flip-left"
              >
                <Image
                  src="/images/about/coeh.png"
                  alt="about image"
                  fill
                  className="rounded-[30px]"
                />
              </div>
            </div> */}

            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <h1 className="m-5 p-2  text-center font-bold">
                {" "}
              Content📋
              </h1>
              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Introduction of Hackers" />
                    <List text="Computer Basics" />
                    <List text="Types of Hacking Attacks" />
                    <List text="Domain Basics" />
                    <List text="Network Basics" />
                    <List text="Types of Domains" />
                    <List text="ICANN" />
                    <List text="Email Security" />
                    <List text="Port Scanning" />
                    <List text="Information Gathering About Victim" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Find Open Ports" />
                    <List text="Types of Virus" />
                    <List text="Practical on Virus" />
                    <List text="Steganography" />
                    <List text="Types of Phishing" />
                    <List text="Phishing" />
                    <List text="Types of Sniffers" />
                    <List text="Sniffing" />
                    <List text="Call Spoofing" />
                    <List text="Password Cracking" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            data-aos="flip-up"
            className="rounded-lg bg-primary bg-opacity-5 p-2 text-center lg:mt-[100px]"
          >
            🏢Certification in Ethical Hacking is widely recognized as one of
            the most sought-after courses globally. With the exponential growth
            of mobile applications and web applications, the need for robust
            security measures has become paramount. Penetration testing plays a
            crucial role in ensuring the protection of these applications
            against external threats. Our comprehensive course is designed to
            equip you with the skills and knowledge necessary to become a
            successful penetration testing expert. Over the course of three
            months, you will delve into the intricacies of identifying
            vulnerabilities and assessing the security of various systems.
            Through hands-on exercises and real-world scenarios, you will learn
            the methodologies and techniques used in ethical hacking and
            penetration testing. The course curriculum covers a wide range of
            topics, including network security, web application security, mobile
            application security, and advanced techniques such as reverse
            engineering and exploitation. You will gain practical experience in
            using industry-standard tools and frameworks like Burp Suite and
            Metasploit, enabling you to effectively evaluate and fortify the
            security of digital assets.
          </p>
        </div>
      </section>

      <Features />

      <div
        data-aos="flip-up"
        className="m-5 mt-24 items-center justify-center rounded-lg bg-primary bg-opacity-5"
      >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="bg-gray-100 flex flex-col items-center justify-between gap-4 rounded-lg p-4 sm:flex-row md:p-8">
            <div>
              <h2 className="text-indigo-500 text-xl font-bold md:text-2xl">
                Try Demo Class Now !
              </h2>
            </div>

            <Link
              href="/contact"
              className="ring-indigo-300 hover:bg-indigo-600 active:bg-indigo-700 inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 focus-visible:ring md:text-base"
            >
              Start now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coeh;
