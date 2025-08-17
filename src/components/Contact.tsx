import Image from "next/image";
export default function Contact() {
  return (
    <section className="bg-black  grid md:grid-cols-2 gap-10 mx-auto">
      {/* Globe (could be image or canvas) */}
      <div className="relative aspect-square bg-gray-900 rounded-full w-[450px] h-[450px] ml-48">
        <Image
          src="/Group 133.png" // Replace with your image path
          alt="Free Trial Image"
          width={450} // Set the image width to match the container size
          height={450} // Set the image height to match the container size
          objectFit="cover" // Ensures the image scales properly
          className="rounded-full" // Optional: Makes the image also rounded
        />
      </div>

      {/* Contact Form */}
      <div>
        <h2 className="text-3xl text-white bg-blue-500 font-bold mb-4">
          Get In Touch
        </h2>

        <p className="text-white mb-6">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#1A1A1A] p-3 rounded-md text-white"
          />
          <input
            type="name"
            placeholder="name"
            className="bg-[#1A1A1A] p-3 rounded-md text-white"
          />
          <textarea
            placeholder="name"
            rows={5}
            className="bg-[#1A1A1A] p-3 rounded-md text-white"
          />
          <button
            type="submit"
            className="self-start px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </section>
  );
}
