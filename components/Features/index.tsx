import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div data-aos="flip-up">
            <SectionTitle
              title="Main Features"
              paragraph="Our company offers a wide range of comprehensive cybersecurity solutions tailored to protect your business from evolving cyber threats."
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div key={feature.id} data-aos="flip-up">
                <SingleFeature key={feature.id} feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
