import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSection = () => {
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
      <section id="about" className="pt-28 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="flex flex-col gap-[100px] border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex  flex-wrap items-center">
              <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="OUR MISSION"
                  paragraph="We aim to serve premium cyber security services at best prices.
                  We have served to more than 150 MNCs and helped them secured their business from the outside issues.
                  We have served to more than 150 MNCs and helped them secured their business from the outside issues
                  "
                  mb="44px"
                />
              </div>

              <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                  data-wow-delay=".2s"
                  data-aos="flip-right"
                >
                  <Image
                    src="/images/about/back.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                  />
                </div>
              </div>
            </div>
            {/* ll */}

            <div className="-mx-4 flex  flex-wrap items-center">
              <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Our Founder and CEO"
                  paragraph="Onkar Sonawane (born on March 31, 2002) of Pune, Maharashtra, is appreciated for being listed in secured 100+website, Truecaller, Google, Netherland Government,Snapchat and Mozilla Firefox Halls of Fame as a young ethical hacker at the age of 17 years and 9 months, as confirmed on January 11, 2020.
                  "
                  mb="44px"
                />
              </div>

              <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[400px] lg:mr-0"
                  data-wow-delay=".2s"
                  data-aos="flip-right"
                >
                  <Image
                    src="/images/about/mis.jpeg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                  />
                </div>
              </div>
            </div>
            {/* end */}

            <div className="-mx-4 flex  flex-wrap items-center">
              <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="ISO Certified"
                  paragraph="Alancesec is an ISO certified organization ensuring credibility to its clients.
                  "
                  mb="44px"
                />
              </div>

              <div data-aos="fade-right" className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                  data-wow-delay=".2s"
                  data-aos="flip-right"
                >
                  <Image
                    src="/images/about/iso.png"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                  />
                </div>
              </div>
            </div>
            {/* ensd */}
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
