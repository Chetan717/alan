import Image from "next/image";
const news = () => {
  const Paths = [
    "/images/news/n3.jpg",
    "/images/news/n4.jpg",

    "/images/news/n5.jpg",
    "/images/news/n6.jpg",
    "/images/news/n7.jpeg",
    "/images/news/n8.jpg",
  ];

  return (
    <>
      <div className="m-5 flex flex-col items-center justify-center gap-10 pt-32">
        <h1 className="text-center text-xl font-bold">News</h1>
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
