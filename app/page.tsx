"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="hero" className="mt-[100px]">
        <Hero />
      </section>
      <section id="about">
        <About />
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
        <h1 className="text-5xl text-customColor1">Contact Us</h1>
        <ContactForm />
      </section>
    </div>
  );
}
