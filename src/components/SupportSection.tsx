"use client"; // Marking this as a client component

import Image from "next/image"; // Import Next.js Image component

export default function SupportSection() {
  return (
    <section className="bg-[#111] text-white py-20">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto space-y-10 md:space-y-0">
        {/* Image on the left */}
        <div className="relative md:w-1/2 w-full">
          <Image
            src="/Group2.png" // Path to your image in the public folder
            alt="Support Image"
            width={678}
            height={678}
            objectFit="cover" // Ensure image covers the container
            className="border rounded-lg"
          />
        </div>

        {/* Text on the right */}
        <div className="md:w-1/2 w-full text-center md:text-left ml-10">
          {" "}
          {/* Added margin-left to shift text to the right */}
          <h2 className="font-[Poppins] font-semibold text-[48px] leading-[64px] text-white mb-4">
            We&apos;re here to guide and help you at all times
          </h2>
          {/* Smaller text below */}
          <p className="text-[#9E9E9E] text-[18px] leading-[28px] mb-6">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>
          {/* Button */}
          <div className="w-[127px] h-[44px] mx-auto md:mx-0">
            <button
              className="w-full h-full text-white font-semibold text-center rounded-lg"
              style={{
                background:
                  "linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)", // Gradient background
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
