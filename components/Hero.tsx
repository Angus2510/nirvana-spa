import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className=" h-screen flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
      <div className="mb-4 md:mb-0">
        <h1 className="text-5xl text-customColor1">The Nirvana</h1>
        <h3 className="text-3xl text-customColor1">The place to be</h3>
        <h6 className="text-xl text-customColor1">
          A place where work and play all work together
        </h6>
        <p className="text-sm text-customColor1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          culpa incidunt? Quidem, temporibus alias quaerat dolorem,
          reprehenderit qui nesciunt id quo suscipit culpa veritatis magni error
          eos vero corporis provident!
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Image src="/home-1.png" width={100} height={100} alt="home-1" />
        <Image src="/home-2.png" width={100} height={100} alt="home-2" />
      </div>
    </div>
  );
};

export default Hero;
