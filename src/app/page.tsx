"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import {
  FiCpu,
  FiDownload,
  FiInstagram,
  FiMinus,
  FiPlus,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { featuresData } from "./data/Feature";
import { Disclosure } from "@headlessui/react";
import { faqData } from "./data/Faq";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <header className="fixed inset-0 container mx-auto h-[80px] px-[19px] flex items-center justify-between z-10 bg-dark">
        <div className="font-semibold text-[28px]">ZiyStore</div>
        <nav>
          <ul className="flex items-center justify-center gap-4">
            <li>Home</li>
            <li>Features</li>
            <li>FAQs</li>
          </ul>
        </nav>
        <button className="btn">
          Start Now
          <FaArrowRight size={20} />
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto pt-[80px] h-screen grid place-content-center">
        <div className="max-w-2xl text-center flex items-center justify-center flex-col gap-[40px] ">
          <h1 className="text-[60px] font-bold leading-tight">
            <span className="text-primary">Revolutionize</span> Your Shopping
            Experience
          </h1>
          <p>
            Welcome to ZiyStore, where buying and selling meet seamless
            convenience on your fingertips. Explore a world of endless
            possibilities today!
          </p>
          <button className="btn">
            Start From Now
            <FaArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Motto Section */}
      <section className="container mx-auto pb-[80px]">
        <div className="relative w-[730px] h-[355px] mx-auto mb-[80px]">
          <Image src="/smartphone.png" alt="Smartphone Sultan" fill />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-[20px] text-[36px] font-medium">
            Discover, Connect, Transact
          </h2>
          <p className="mb-[40px]">
            <span className="font-semibold">ZiyStore</span> is more than just an
            app, it&apos;s your gateway to a vibrant marketplace community where
            buyers and sellers converge, creating a dynamic ecosystem of
            exchange.
          </p>
          <button className="btn mx-auto">
            Download Now
            <FiDownload size={20} />
          </button>
        </div>
      </section>

      {/* Features Card */}
      <section className="container mx-auto text-center my-[80px] pb-[80px]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[36px] font-bold mb-[26px] ">Why ZiyStore?</h2>
          <p>
            Choose ZiyStore for a seamless, enjoyable, and rewarding marketplace
            experience unlike any other.
          </p>
        </div>
        <div className="mt-[80px] grid grid-cols-3 gap-12 mx-4">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="text-left bg-gradient-to-b from-[#242333] to-[#010014] border border-[#3F3E4E] rounded-xl p-[25px]"
            >
              <div className="bg-gray w-fit p-[10px] rounded-md mb-[18px]">
                {feature.icon}
              </div>
              <h3 className="mb-[18px] text-[18px] font-semibold">
                {feature.title}
              </h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto text-center my-[80px]">
        <div className="max-w-xl mx-auto mb-[70px]">
          <h2 className="text-[36px] font-bold mb-[26px]">
            Frequently Asked Questions
          </h2>
          <p>
            Choose ZiyStore for a seamless, enjoyable, and rewarding marketplace
            experience unlike any other.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 gap-[24px]">
          {faqData.map((faq) => (
            <Disclosure key={faq.id}>
              {({ open }) => (
                <div
                  className={`${
                    open ? "border" : ""
                  } border-primary rounded-lg`}
                >
                  <Disclosure.Button
                    className={`flex w-full justify-between rounded-lg bg-dark px-[32px] pt-[22px] ${
                      open ? "" : "pb-[22px] border"
                    } text-left font-bold border-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75`}
                  >
                    <span>{faq.question}</span>
                    {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </Disclosure.Button>

                  <Disclosure.Panel className="px-[32px] text-left pb-[22px] pt-4">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-[80px]">
        <hr className="mb-[22px]" />
        <div className="flex items-center justify-between">
          <p>@ {new Date().getFullYear()} ZiyStore. All right reserved.</p>
          <div className="flex items-center justify-center gap-4 text-xl">
            <FiTwitter />
            <FiInstagram />
            <FiYoutube />
          </div>
        </div>
      </footer>
    </main>
  );
}
