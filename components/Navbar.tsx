import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className="w-full bg-white border-b-customColor1  fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
            <div className="flex items-end justify-between -m-6 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo-main.svg"
                  width={150}
                  height={100}
                  alt="logo"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 fixed top-6 right-4 text-gray-700 rounded-md outline-none focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="hambuger"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-customColor1 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:border-b  border-customColor1  md:hover:text-customColor1 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-customColor1 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:border-b  border-customColor1  md:hover:text-customColor1 md:hover:bg-transparent">
                  <Link href="#room-type" onClick={() => setNavbar(!navbar)}>
                    Room Type
                  </Link>
                </li>
                <li className="pb-6 text-xl text-customColor1 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:border-b  border-customColor1  md:hover:text-customColor1 md:hover:bg-transparent">
                  <Link href="#services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-6 text-xl text-customColor1 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:border-b  border-customColor1  md:hover:text-customColor1 md:hover:bg-transparent">
                  <Link href="#testimonials" onClick={() => setNavbar(!navbar)}>
                    Testimonials
                  </Link>
                </li>
                <li className="pb-6 text-xl text-customColor1 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:border-b  border-customColor1  md:hover:text-customColor1 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
