import Image from "next/image";

export default function OrbitSection() {
  return (
    <section className="bg-black py-32 relative px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="relative aspect-square w-full max-w-sm mx-auto">
          <Image
            src="/images/orbit-diagram.png"
            alt="Orbit Graphic"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            We&apos;re here to guide and help you at all times
          </h2>
          <p className="text-gray-400 mb-6">
            A good design is not only aesthetically pleasing but also
            functional. It should be able to solve the problem.
          </p>
          <a className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md inline-block">
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
