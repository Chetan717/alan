import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";
import Features from "@/components/Common/Feature";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const fsdPage = () => {
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
      <section className="py-24 md:py-20 lg:py-28">
        <h1 className="m-10 text-center text-3xl font-bold ">
          🔥Full Stack Devlopment(React,Java,Python)💻
        </h1>

        <div className="container">
          <div className="-mx-4 flex  items-center justify-center">
            {/* <div className="w-full px-4 lg:w-1/2">
              <div
                data-aos="flip-up"
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/copt.jpg"
                  alt="about image"
                  fill
                  className="rounded-[30px]"
                />
              </div>
            </div> */}

            <div data-aos="fade-up" className="w-full flex flex-col justify-center items-center px-4 lg:w-1/2">
              <h1 className="m-5 p-2  text-center font-bold"> Tech Stack 📋</h1>
              <div
                className="wow fadeInUp mb-12  lg:mb-0 lg:max-w-[570px]"
                data-wow-delay=".15s"
              >
                <div className=" flex justify-center items-center flex-wrap">
                  <div className=" sm:w-1/2 lg:w-full lg:px-3 xl:w-1/2">
                    <List text="Html" />
                    <List text="css" />
                    <List text="Javascript" />
                    <List text="React.js" />
                    <List text="Angular.js" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Java" />
                    <List text="PHP" />
                    <List text="Python" />
                    <List text="SQL" />
                    <List text="API" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <SectionTitle
              title=""
              paragraph="Certification of Penetration Testing is one of the most demanding course worldwide.
              The need of Penetration testing is required, as the use of mobile applications and web applications has grown humongous.
              To protect it from external threats, penetration testing is required and our course can help you become one successful penetration-testing expert.
              course duration in 3 months."
              mb="44px"
            /> */}
   <article data-aos="fade-up" className="rounded-lg flex flex-col gap-3 bg-primary bg-opacity-5 p-2  lg:mt-[100px]">
    <h1>Welcome to the Full Stack Development Course!</h1>
    <p>In this comprehensive program, you will gain proficiency in various programming languages and web development frameworks to become a skilled full stack developer. Let's explore the course syllabus:</p>

    <h2> 👉 Course Overview:</h2>
    <p>This course is designed to provide you with a solid foundation in full stack development, covering both frontend and backend technologies. Throughout the program, you will work on hands-on projects to reinforce your understanding and practical skills.</p>

    <h2>Introduction to Web Development:</h2>
    <ul>
        <li>Understanding the web development process</li>
        <li>Overview of frontend, backend, and full stack development</li>
    </ul>

    <h2> 👉 HTML and CSS Fundamentals:</h2>
    <ul>
        <li>Building the structure and layout of web pages using HTML</li>
        <li>Styling web pages with CSS and creating engaging user interfaces</li>
    </ul>

    <h2> 👉 JavaScript Essentials:</h2>
    <ul>
        <li>Introduction to JavaScript and its role in web development</li>
        <li>Manipulating the DOM, handling events, and creating dynamic web content</li>
    </ul>

    <h2> 👉 Backend Development with Python:</h2>
    <ul>
        <li>Introduction to Python programming language</li>
        <li>Building web applications using Python frameworks such as Flask or Django</li>
        <li>Working with databases using SQL and ORM (Object-Relational Mapping)</li>
    </ul>

    <h2> 👉Java for Backend Development:</h2>
    <ul>
        <li>Fundamentals of Java programming language</li>
        <li>Building robust and scalable backend systems with Java frameworks like Spring Boot</li>
        <li>Integrating Java applications with databases</li>
    </ul>

    <h2> 👉Frontend Development with React:</h2>
    <ul>
        <li>Introduction to React library and its benefits</li>
        <li>Building interactive and reusable user interfaces with React components</li>
        <li>State management and handling data in React applications</li>
    </ul>

    <h2> 👉Angular Framework:</h2>
    <ul>
        <li>Exploring the Angular framework for building dynamic web applications</li>
        <li>Working with Angular components, directives, and services</li>
        <li>Routing, form handling, and data retrieval from APIs</li>
    </ul>

    <h2> 👉PHP Development:</h2>
    <ul>
        <li>Introduction to PHP and its role in web development</li>
        <li>Building dynamic web applications with PHP frameworks like Laravel</li>
        <li>Database integration and handling form data in PHP</li>
    </ul>

    <h2> 👉Integration and Deployment:</h2>
    <ul>
        <li>Version control with Git and collaboration using GitHub</li>
        <li>Deploying applications to cloud platforms like Heroku or AWS</li>
        <li>Testing and debugging web applications</li>
    </ul>

    <p>Throughout the course, you will also learn best practices for security, performance optimization, and responsive web design.</p>

    <p>By the end of this full stack development course, you will have a strong foundation in various programming languages, frameworks, and tools, enabling you to build end-to-end web applications. You will be well-equipped to pursue a career as a full stack developer or continue your learning journey in specialized areas of web development.</p>

    <p>Join us now and embark on an exciting journey to becoming a proficient full stack developer!</p>
</article>

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
              href="tel:9322670616"
              className="ring-indigo-300 hover:bg-indigo-600 active:bg-indigo-700 inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 focus-visible:ring md:text-base"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default fsdPage;
