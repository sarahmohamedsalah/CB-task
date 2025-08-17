/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 ">
        <div className="pb-4">
          <Image
            src="/squid-logo.png"
            alt="Squid Logo"
            width={132}
            height={34}
          />
          <p>
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>
        </div>

        <div className="flex space-x-12">
          {" "}
          {/* Increased space even further */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Section One</li>
              <li>Section Two</li>
              <li>Section Three</li>
              <li>Section Four</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Section One</li>
              <li>Section Two</li>
              <li>Section Three</li>
              <li>Section Four</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Section One</li>
              <li>Section Two</li>
              <li>Section Three</li>
              <li>Section Four</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full p-4">
        {/* Left: Text */}
        <p
          className="text-white text-sm"
          style={{ opacity: 1, transform: "rotate(0deg)", fontSize: "14px" }}
        >
          All Rights Reserved Inkyy.com 2022
        </p>

        {/* Right: Twitter Icons */}
        <div className="flex space-x-4">
          <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/ELEMENTS.png" alt="Twitter" className="w-4 h-4" />
            </a>
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Vector.png" alt="Twitter" className="w-4 h-4" />
            </a>
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Vector-2.png" alt="Twitter" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
