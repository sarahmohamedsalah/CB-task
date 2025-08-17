/* eslint-disable @next/next/no-img-element */
"use client"; // Mark as a client-side component

import { useState, useEffect } from "react"; // Import hooks
import axios from "axios"; // Import axios for data fetching

interface Company {
  id: number;
  logoUrl: string; // Assuming 'logoUrl' is the field containing the logo URL
}

export default function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]); // State to hold company logos

  // Fetch data from Strapi when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/companies?populate=logo") // Strapi API endpoint for companies
      .then((response) => {
        console.log("Fetched companies from Strapi:", response.data);
        setCompanies(response.data.data); // Update state with the logos data
      })
      .catch((error) => {
        console.error("Error fetching companies:", error); // Log any errors
      });
  }, []); // Runs once when the component mounts

  return (
    <section className="bg-[#111] text-white py-20 px-4">
      <h2
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
        style={{
          width: "567px", // Custom width
          height: "128px", // Custom height
          margin: "0 auto", // Center the heading
        }}
      >
        Companies we Worked With Since 2015
      </h2>
      {/* Logos Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex justify-center items-center"
            style={{
              width: "160px", // Custom width for the logo container
              height: "92px", // Custom height for the logo container
              borderRadius: "10px", // Border radius for rounded corners
              backgroundColor: "#000000", // Background color of the logo container
              opacity: 1, // Full opacity
            }}
          >
            {/* Display logo if available */}
            <img
              src={company.logoUrl} // Assuming 'logoUrl' is the path for the logo image
              alt={`Logo ${company.id}`} // Using the company ID as the alt text
              className="w-full h-full object-contain" // Ensure logo is contained within the box
            />
          </div>
        ))}
      </div>
    </section>
  );
}
