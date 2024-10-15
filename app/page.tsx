"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="">
        <section id="hero" className="mt-[100px]">
          <div className="">
            <div className="">
              <h1 className=" text-5xl text-customColor1">The Nirvana</h1>
              <h3 className="text-3xl text-customColor1">The place to be</h3>
              <h6 className="text-1xl  text-customColor1">
                A place where work and play all work together
              </h6>
              <p className=" text-sm text-customColor1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, culpa incidunt? Quidem, temporibus alias quaerat
                dolorem, reprehenderit qui nesciunt id quo suscipit culpa
                veritatis magni error eos vero corporis provident!
              </p>
            </div>
            <Image src="/home-1.png" width={100} height={100} alt="home-1" />
            <Image src="/home-2.png" width={100} height={100} alt="home-2" />
          </div>
        </section>
        <section id="about">
          <h1 className="-mt-24 mb-20 ml-60 text-5xl text-customColor1">
            About Us
          </h1>
          <div className="-mt-10 mb-16 flex justify-center">
            <Image
              src="/about-img.png"
              width={1055}
              height={232}
              alt="about image"
            />
          </div>
          <div className="flex justify-around gap-10">
            <div className="flex flex-col text-center text-customColor1">
              <h1 className="mb-4 text-2xl font-semibold">About The Nirvana</h1>
              <p className="ml-14 w-[80%] text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                impedit ipsam corporis non adipisci deleniti? Ut hic facere ex,
                repellat illum odio debitis officia blanditiis placeat quae
                cumque inventore officiis! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Exercitationem maiores aperiam,
                quia delectus voluptatem voluptatibus ea. Nobis unde tempora
                doloremque laboriosam aliquam dignissimos odio, officiis ea
                consectetur quis asperiores aut.
              </p>
            </div>
            <div className="flex flex-col text-center text-customColor1">
              <h1 className="mb-4 text-2xl font-semibold">
                What's in and around the area
              </h1>
              <p className="ml-10 w-[80%] text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                placeat tempora, quos numquam voluptatum expedita iusto
                cupiditate voluptas aliquid provident eligendi nobis ducimus
                eaque voluptatibus fugiat molestiae nisi pariatur animi! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Beatae
                delectus autem, repellat ratione consequatur hic maxime ipsam
                voluptatem eius, totam deserunt dicta obcaecati labore atque.
                Accusantium quidem sit excepturi ullam.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center text-customColor1">
            <h1 className="mt-20 text-center text-2xl font-semibold">
              Location
              <span className="ml-2">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
            </h1>
            <p className="mx-40 mb-20 flex flex-1 items-center justify-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              a corporis modi nesciunt perspiciatis et, iste suscipit quos
              expedita, ut nisi aliquam obcaecati voluptas tenetur laudantium
              amet non officiis consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repudiandae vero corrupti iure ea
              dolore asperiores voluptate sunt nesciunt eius praesentium
              architecto, illum fugiat quos earum hic cumque et harum nam. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              aspernatur ratione ut maxime, exercitationem itaque assumenda
              excepturi mollitia ipsam non sed animi temporibus deleniti
              praesentium distinctio dolores officiis, commodi necessitatibus.
            </p>
          </div>
        </section>
        <section id="services">
          <h1>services</h1>
        </section>
        <section id="room-type">
          <h1>room type</h1>
        </section>
        <section id="testimonials">
          <h1>testimonials</h1>
        </section>
        <section id="contact">
          <h1>contact</h1>
        </section>
      </div>
    </div>
  );
}
