import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="flex flex-col gap-[100px] border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex  flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Web Application VAPT"
                paragraph="AlanceSec can help you to keep your business secured online. We can test your web applications and offer you the best possible security solution to keep your website secured."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Injection flaws" />
                    <List text="Broken authentication and session management issues" />
                    <List text="Sensitive Data Exposure" />
                    <List text="Cross site request forgery" />
                    <List text="Security misconfiguration issues" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Cross-Site Scripting" />
                    <List text="Using Components with Known Vulnerabilities" />
                    <List text="XML External Entities (XXE)" />
                    <List text="Server Site Request Forgery" />
                    <List text="Insufficient logging and Monitoring" />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div
                data-aos="flip-left"
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/websec.gif"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                />
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center">
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                data-wow-delay=".2s"
                data-aos="flip-left"
              >
                <Image
                  src="/images/about/net.gif"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                />
              </div>
            </div>

            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div className="mt-5">
                <SectionTitle
                  title="Network VAPT"
                  paragraph="AlanceSec analyses the organizations testing needs of internal network, external network, and application layers and provide effective solution for risks and vulnerabilities."
                  mb="44px"
                />
              </div>

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
                data-aos="fade-up"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Network reconnaissance: First phase of testing for an external attacker" />
                    <List text="Mail server testing: Thoroughly testing mail servers as potential attack targets" />
                    <List text="Testing the mail server for open relay" />
                    <List text="Unpatched SMTP servers" />
                    <List text="Presence of default IDs" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Web-based email access and vulnerabilities" />
                    <List text="Identification of services: Determining the services associated with open ports" />
                    <List text="Premium quality" />
                    <List text="Network Security & Defence" />
                    <List text="Logging And Monitoring Risks & threats." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center">
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Mobile Application VAPT"
                paragraph="At AlanceSec, we make sure that your app is secured and have no cyber security related issues. Tests are conducted through various modes, automated scanning with the help of tools and manual penetration testing."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
                data-aos="fade-up"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text=" Improper platform usage" />
                    <List text=" Insecure data storage" />
                    <List text=" Insecure communication" />
                    <List text=" Insecure authentication" />
                    <List text=" Insufficient cryptography" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text=" Insecure authorization" />
                    <List text=" Poor code quality" />
                    <List text=" Code tampering" />
                    <List text=" Reverse engineering" />
                    <List text=" Extraneous functionality" />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                data-wow-delay=".2s"
                data-aos="flip-left"
              >
                <Image
                  src="/images/about/appsec.gif"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                />
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center">
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                data-wow-delay=".2s"
                data-aos="flip-left"
              >
                <Image
                  src="/images/about/redteam.gif"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                />
              </div>
            </div>

            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div className="mt-5">
                <SectionTitle
                  title="Red Teaming"
                  paragraph="A red team is a team that helps organisations to improve themselves by providing opposition to the point of view of the organisation that they are helping and red teaming is total ethical hacking based on Vulnerability Assessment."
                  mb="44px"
                />
              </div>

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
                data-aos="fade-up"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Red Teaming Ethical Hacking Test:" />
                    <List text=" Collection of techniques to test every aspect of business networks" />
                    <List text=" Testing of web applications and mobile applications" />
                    <List text=" Identification of loopholes in business networks" />
                    <List text=" Identifying vulnerabilities in supporting systems and processes" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text=" Providing opposition to the organization's point of view" />
                    <List text=" Helping organizations improve by challenging their perspectives" />
                    <List text=" Conducting total ethical hacking based on Vulnerability Assessment" />
                    <List text=" Assisting in finding weaknesses and improving security measures" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ///////////////////////////////////// */}
          <div className="-mx-4 flex flex-wrap  items-center">
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Mobile Application Devlopment"
                paragraph="Get top-notch app development services for your business, covering everything from conceptualization to deployment. We specialize in creating user-friendly and feature-rich mobile applications to help you reach your target audience effectively."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
                data-aos="fade-up"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Custom mobile app development" />
                    <List text="iOS app development" />
                    <List text="Android app development" />
                    <List text="Hybrid app development (React Native, Flutter)" />
                    <List text="UI/UX design for mobile apps" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="App wireframing and prototyping" />
                    <List text="App testing and quality assurance" />
                    <List text="App deployment and maintenance" />
                    <List text="Integration with third-party APIs" />
                    <List text="App performance optimization" />
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                data-wow-delay=".2s"
                data-aos="flip-left"
              >
                <Image
                  src="/images/about/appdev.gif"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                />
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap items-center">
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px] lg:mr-0"
                data-wow-delay=".2s"
                data-aos="flip-left"
              >
                <Image
                  src="/images/about/webdev.gif"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-[30px] lg:mr-0"
                />
              </div>
            </div>
            <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
              <div className="mt-5">
                <SectionTitle
                  title="Web Application Devlopment"
                  paragraph="We offer comprehensive web development services tailored to your business needs, including custom web application development, responsive website design, and e-commerce solutions."
                  mb="44px"
                />
              </div>

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
                data-aos="fade-up"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Responsive web design" />
                    <List text="Custom website development" />
                    <List text="E-commerce website development" />
                    <List text="Content management systems" />
                    <List text="Search engine optimization (SEO)" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Web application development" />
                    <List text="Front-end development (HTML/CSS/JavaScript/Next-React.js)" />
                    <List text="Back-end development (PHP, Python, Node.js)" />
                    <List text="Database design and integration" />
                    <List text="Website maintenance and support" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
