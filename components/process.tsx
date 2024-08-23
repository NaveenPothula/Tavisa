import Image from "next/image";
import Link from "next/link";

export default function Process() {
  return (
    <div className="py-6">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
        Our Process
      </h1>
      <div className="flex flex-col md:flex-row bg-white">
        {/* Block 1: Image */}
        <div className="flex-1">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/about.png" // Replace with your image path
              alt="Descriptive Alt Text"
              layout="fill"
              objectFit="cover" // Ensures the image covers the entire area
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Block 2: Content */}
        <div className="flex-1 bg-white flex justify-center h-[300px] md:h-[400px]">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">
              Holistic Menopause Treatment
            </h2>
            <h2 className="text-2xl font-bold mb-6 text-yellow-500">
              Your menopause treatment should be as unique as you
            </h2>
            <p className="mb-4">
              Our consultation programmes can be carried out online or
              face-to-face at our clinic. With just a simple questionnaire to
              complete, followed by an appointment with one of our Tavisa
              consultants, you will be prescribed the blends and combinations of
              herbal supplements that are perfectly suited to you.
            </p>
            <p className="mb-4">
              We will send you what you need, when you need it.
            </p>
            <Link
              href="/what-next"
              className="bg-pink-500 text-white px-2 py-2 rounded-full mx-auto" // Adjusted padding
            >
              What Next?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
