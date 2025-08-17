"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute left-0 top-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full" />
        <div className="absolute right-0 top-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full" />
      </div>

      {/* Nav */}
      <div className="z-10 w-full max-w-7xl flex justify-between items-center py-6">
        <Image src="/squid-logo.png" alt="Squid Logo" width={132} height={34} />
        <div className="flex gap-2 items-center">
          <a
            href="#"
            className="text-[#9E9E9E] font-[400] text-[14px] leading-[28px] text-center w-[42px] h-[28px] font-[Poppins] flex items-center justify-center  rounded"
            style={{
              backgroundColor: "transparent",
            }}
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm rounded-[5px] shadow w-[198px] h-[44px] flex items-center justify-center"
            style={{
              background:
                "linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)",
              padding: "12px 28px",
              color: "#fff", // Assuming white text on gradient
            }}
          >
            Download Template
          </a>
        </div>
      </div>

      {/* Heading */}
      <div className="z-10 max-w-3xl mt-12">
        <h1 className="text-5xl text-[#FFFFFF] font-bold mb-6 leading-tight">
          Beautiful Landing Page <br /> Design for You
        </h1>
        <p
          style={{
            width: "577px",
            height: "66px",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            color: "#9E9E9E",
            textAlign: "center",
            opacity: 1,
            padding: "5px",
          }}
        >
          A good design is not only aesthetically pleasing, but
          <br />
          also functional. It should be able to solve the problem
        </p>

        <div className="flex justify-center">
          <a
            href="#"
            className="w-[198px] h-[44px] rounded-[5px] flex items-center justify-center text-sm shadow gap-[10px]"
            style={{
              background:
                "linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)",
              color: "#fff",
              padding: "12px 28px",
              opacity: 1,
            }}
          >
            Download Template
          </a>
        </div>
        <div className="flex justify-center mt-6">
          <Image
            src="/data.png"
            alt="data Logo"
            width={541.9844970703125}
            height={541.8507080078125}
          />
        </div>
      </div>

      {/* Mockup Image */}
      <div className="z-10 mt-20">
        <Image
          src="/images/dashboard.png"
          alt="Dashboard UI"
          width={900}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: "474px", // Same height as the image
          top: "777px", // Custom top positioning
          left: "-3px", // Custom left positioning to match the image
          backgroundImage: "url('/Subtract.png')", // Set image as the background
          backgroundSize: "cover", // Ensure the image covers the div
          backgroundPosition: "center", // Center the image inside the div
          borderRadius: "120px 120px 0 0", // Match rounded top corners
          opacity: 1, // Full opacity
        }}
      ></div>
    </section>
  );
}
