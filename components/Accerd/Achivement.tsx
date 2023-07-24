import Image from "next/image";
const Achivement = () => {
  const Paths = [
    "/images/achieve/ach1.jpg",
    "/images/achieve/ac3.jpg",
    "/images/achieve/ac5.jpg",
    "/images/achieve/ac10.jpg",

    "/images/achieve/ac11.jpg",
    "/images/achieve/ac6.jpg",
    "/images/achieve/ac9.jpg",
    "/images/achieve/ac7.jpg",

    "/images/achieve/ac4.jpg",
    "/images/achieve/ac12.jpg",
    "/images/achieve/ac8.jpg",
  ];

  return (
    <>
      <div className="m-5 flex items-center justify-center pt-52">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {Paths?.map((key) => {
            return (
              <>
                <Image
                  data-aos="flip-right"
                  src={key}
                  alt="about-image"
                  width={300}
                  height={0}
                  className="mx-auto max-w-full rounded-[10px] lg:mr-0"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Achivement;
