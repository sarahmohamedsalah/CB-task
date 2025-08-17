/* eslint-disable @next/next/no-img-element */
"use client"; // Mark as a client-side component

import { useState, useEffect } from "react";
import axios from "axios";

interface Feature {
  icon?: { url: string };
  title: string;
  description: string;
}

export default function Features() {
  const [data, setData] = useState<Feature[]>([]); // Start with an empty array

  // Fetch data client-side when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/features?populate=icon") // Strapi API endpoint
      .then((response) => {
        console.log("Fetched data from Strapi:", response.data); // Check API response in the console
        setData(response.data.data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching features:", error);
      });
  }, []); // Empty dependency array ensures it runs once on mount

  // If no data, show loading state

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="absolute text-3xl md:text-4xl font-semibold"
          style={{
            width: "342px", // Custom width
            height: "80px", // Custom height
            top: "1236px", // Custom top positioning
            left: "165px", // Custom left positioning
            opacity: 1, // Full opacity
          }}
        >
          Feature Boxes
        </h2>

        <p
          className="absolute text-[18px] text-gray-400 mt-2"
          style={{
            width: "577px", // Specific width
            height: "66px", // Specific height
            top: "1321px", // Position from the top
            left: "165px", // Position from the left
            opacity: 1, // Full opacity
          }}
        >
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Render the features */}
        {data?.map((feature, i) => (
          <div
            key={i}
            className="bg-[#1A1A1A] p-6 rounded-xl shadow hover:scale-105 transition flex flex-col items-center justify-center"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-xl font-bold mb-4">
              {/* Display the icon if available or fallback */}
              {feature.icon ? (
                <img
                  src={feature.icon.url}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <div>{i + 1}</div> // Fallback to index number if icon is not available
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-center mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
