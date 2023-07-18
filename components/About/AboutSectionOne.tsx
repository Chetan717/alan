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
          <div
            id="wvapt"
            className="-mx-4 flex flex-wrap items-center justify-center"
          >
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
                    <List text="Injection attacks (SQL, OS, etc.): Exploiting vulnerabilities that allow malicious code injection" />
                    <List text="Broken authentication and session management: Flaws in user authentication and session handling" />
                    <List text="Sensitive data exposure: Improper protection of sensitive information" />
                    <List text="Cross-site request forgery (CSRF): Forging unauthorized requests on behalf of users" />
                    <List text="Security misconfigurations: Incorrectly configured security settings" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Cross-site scripting (XSS): Injecting malicious scripts into web pages viewed by users" />
                    <List text="Using components with known vulnerabilities: Integrating outdated or vulnerable software components" />
                    <List text="XML external entity (XXE) attacks: Exploiting XML parsing vulnerabilities" />
                    <List text="Server-side request forgery (SSRF): Making a server initiate malicious requests" />
                    <List text="Insufficient logging and monitoring: Lack of proper logging and monitoring mechanisms" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
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
            </div> */}
          </div>

          <div
            id="net"
            className="-mx-4 flex flex-wrap items-center justify-center"
          >
            {/* <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
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
            </div> */}

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
                    <List text="Phishing attacks: Targeted emails or messages to trick users into revealing sensitive information" />
                    <List text="Malware and ransomware: Malicious software designed to disrupt or gain unauthorized access to systems" />
                    <List text="Data breaches: Unauthorized access to sensitive data leading to its exposure or theft" />
                    <List text="Social engineering: Manipulating individuals to disclose confidential information" />
                    <List text="Insider threats: Risks posed by employees or individuals with authorized access" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Cloud security risks: Concerns related to data stored and accessed from cloud platforms" />
                    <List text="IoT vulnerabilities: Security weaknesses in connected devices and networks" />
                    <List text="Zero-day exploits: Exploiting unknown vulnerabilities before they are patched" />
                    <List text="Advanced persistent threats (APTs): Sophisticated and prolonged attacks by skilled adversaries" />
                    <List text="Mobile security risks: Security challenges in mobile devices and apps" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="mvapt"
            className="-mx-4 flex flex-wrap items-center justify-center"
          >
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
                    <List text="Improper platform usage: Incorrectly utilizing platform-specific security features" />
                    <List text="Insecure data storage: Storing sensitive data without proper encryption or protection" />
                    <List text="Insecure communication: Transmitting data over insecure channels or protocols" />
                    <List text="Insecure authentication: Weak or vulnerable authentication mechanisms" />
                    <List text="Insufficient cryptography: Weak encryption or inadequate cryptographic practices" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Insecure authorization: Improper or flawed authorization mechanisms" />
                    <List text="Poor code quality: Vulnerabilities introduced due to coding errors or lack of secure coding practices" />
                    <List text="Code tampering: Unauthorized modification of app's code or resources" />
                    <List text="Reverse engineering: Extracting sensitive information or source code from the app" />
                    <List text="Extraneous functionality: Including unnecessary or risky features that increase the attack surface" />
                  </div>
                </div>
              </div>
            </div>
            {/* 
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
            </div> */}
          </div>

          <div
            id="red"
            className="-mx-4 flex  flex-wrap items-center justify-center"
          >
            {/* <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
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
            </div> */}

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
          <div
            id="mad"
            className="-mx-4 flex flex-wrap items-center  justify-center"
          >
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
                    <List text="Native mobile app development (iOS and Android)" />
                    <List text="Cross-platform app development (React Native, Flutter)" />
                    <List text="Progressive Web App (PWA) development" />
                    <List text="UI/UX design for mobile apps" />
                    <List text="Mobile app consulting and strategy" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="App wireframing and prototyping" />
                    <List text="App testing and quality assurance" />
                    <List text="App deployment to app stores (Google Play Store, Apple App Store)" />
                    <List text="Integration with third-party APIs and services" />
                    <List text="Mobile app performance optimization and tuning" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
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
            </div> */}
          </div>

          <div
            id="wad"
            className="-mx-4 flex flex-wrap items-center justify-center"
          >
            {/* <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
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
            </div> */}
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
