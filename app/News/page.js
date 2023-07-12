import Image from "next/image";
const news = () => {
  const Paths = [
    "/images/news/n3.jpg",
    "/images/news/n4.jpg",

    "/images/news/n5.jpg",
    "/images/news/n6.jpg",
  ];

  return (
    <>
   
      <div className="m-5 flex flex-col gap-10 items-center justify-center pt-32">
      <h1 className="text-center font-bold text-xl">News</h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {Paths?.map((key) => {
            return (
              <>
                <Image
                  data-aos="flip-right"
                  src={key}
                  alt="about-image"
                  width={400}
                  height={0}
                  className="mx-auto w-full rounded-[10px] lg:mr-0"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default news;
