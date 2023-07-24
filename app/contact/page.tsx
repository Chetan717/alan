import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import AOS from 'aos';

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We secure You Digitally"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
