import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Onkar Sonawane",
    position: "Founder and CEO",
    image: "/images/brands/onk.jpg",
  },
  {
    id: 2,
    name: "Sachin Kadlag",
    position: "Chief Technology officer",
    image: "/images/brands/sach2.jpg",
  },
  {
    id: 3,
    name: "Sanket Patil",
    position: "Senior App Developer",
    image: "/images/brands/san.jpg",
  },
  {
    id: 4,
    name: "Nilesh sanap",
    position: "Junior Cyber security analyst",
    image: "/images/brands/nil.jpg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="bg-black py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
              Meet our Team
            </h2>

            <p className="text-gray-500 mx-auto max-w-screen-md text-center md:text-lg">
              At Alancesec, we take pride in our exceptional team of talented
              individuals who work passionately to deliver outstanding results.
              With diverse backgrounds and expertise, our team is dedicated to
              providing the highest level of service and innovation to our
              valued clients. Allow us to introduce the members who make up our
              powerhouse team
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
            {brandsData?.map((itm) => {
              return (
                <>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 mb-2 h-24 w-24 overflow-hidden rounded-full shadow-lg md:mb-4 md:h-32 md:w-32">
                      <Image
                        src={itm?.image}
                        width={90}
                        height={0}
                        loading="lazy"
                        alt="Photo by Radu Florin"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <div className="text-indigo-500 text-center font-bold md:text-lg">
                        {itm?.name}
                      </div>
                      <p className="text-gray-500 mb-3 text-center text-sm md:mb-4 md:text-base">
                        {itm?.position}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { position, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        target="_blank"
        rel="nofollow noreferrer"
        className="h-22 relative w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
