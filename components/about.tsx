import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <div className="">
      {/* About Us Title */}
      <h1 className=" mb-10 ml-0 md:ml-60 text-5xl text-customColor1 text-center md:text-left">
        About Us
      </h1>

      {/* About Image */}
      <div className=" mb-16 flex justify-center">
        <Image
          src="/about-img.png"
          width={1055}
          height={232}
          alt="about image"
          className="max-w-full h-auto"
        />
      </div>

      {/* About Details Section */}
      <div className="flex flex-col md:flex-row justify-around gap-10">
        {/* About The Nirvana Section */}
        <div className="flex flex-col text-center md:text-center text-customColor1">
          <h1 className="mb-4 text-2xl font-semibold">About The Nirvana</h1>
          <p className="ml-2 md:ml-14 w-[90%] md:w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            impedit ipsam corporis non adipisci deleniti? Ut hic facere ex,
            repellat illum odio debitis officia blanditiis placeat quae cumque
            inventore officiis! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Exercitationem maiores aperiam, quia delectus
            voluptatem voluptatibus ea. Nobis unde tempora doloremque laboriosam
            aliquam dignissimos odio, officiis ea consectetur quis asperiores
            aut.
          </p>
        </div>

        {/* Area Information Section */}
        <div className="flex flex-col text-center md:text-center text-customColor1">
          <h1 className="mb-4 text-2xl font-semibold">
            What's in and around the area
          </h1>
          <p className="ml-2 md:ml-10 w-[90%] md:w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            placeat tempora, quos numquam voluptatum expedita iusto cupiditate
            voluptas aliquid provident eligendi nobis ducimus eaque voluptatibus
            fugiat molestiae nisi pariatur animi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae delectus autem, repellat
            ratione consequatur hic maxime ipsam voluptatem eius, totam deserunt
            dicta obcaecati labore atque. Accusantium quidem sit excepturi
            ullam.
          </p>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex flex-col justify-center text-customColor1 mt-20">
        <h1 className="text-center text-2xl font-semibold">
          Location
          <span className="ml-2">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
        </h1>

        {/* Location Details */}
        <p className="mx-4 md:mx-40 mb-20 text-center md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis a
          corporis modi nesciunt perspiciatis et, iste suscipit quos expedita,
          ut nisi aliquam obcaecati voluptas tenetur laudantium amet non
          officiis consectetur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repudiandae vero corrupti iure ea dolore asperiores
          voluptate sunt nesciunt eius praesentium architecto, illum fugiat quos
          earum hic cumque et harum nam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vitae aspernatur ratione ut maxime, exercitationem
          itaque assumenda excepturi mollitia ipsam non sed animi temporibus
          deleniti praesentium distinctio dolores officiis, commodi
          necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default About;
