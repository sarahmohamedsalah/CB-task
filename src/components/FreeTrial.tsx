"use client"; // Mark as a client-side component

import Image from "next/image"; // Import the Next.js Image component

export default function FreeTrial() {
  return (
    <section className="bg-[#111] min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Display Image */}
        <div className="mx-auto">
          <Image
            src="/Rectangle 36.png" // Replace with your image path
            alt="Free Trial Image"
            width={1100} // Set your desired width
            height={425} // Set your desired height
            objectFit="cover" // Ensures the image scales properly
            className="rounded-lg" // Optional styling
          />
        </div>
      </div>
    </section>
  );
}
