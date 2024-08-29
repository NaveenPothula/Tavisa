import Image from "next/image";
import Link from "next/link";

export default function Process() {
  return (
    <div className="md:py-0 py-4 px-0 bg-white">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-black md:mb-4 mb-2">
        Our Process
      </h1>
      <div className="flex flex-col md:flex-row bg-white">
        {/* Block 1: Image */}
        <div className="flex-1 flex justify-center items-start">
          <div className="relative w-full min-h-[300px] md:min-h-[400px] mb-2">
            <Image
              src="/about.png" // Replace with your image path
              alt="Descriptive Alt Text"
              layout="responsive" // Adjusts image height dynamically
              width={400}
              height={400}
              objectFit="cover" // Ensures the image covers the entire area
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Block 2: Text */}
        <div className="flex-1 bg-white flex justify-center items-center">
          <div className="text-left md:px-10">
            <h2 className=" text-xl font-bold md:mb-4 mb-2 text-black">
              Holistic Menopause Treatment
            </h2>
            <h2 className="md:text-2xl text-xl font-bold md:mb-6 mb-2 text-yellow-500">
              Your menopause treatment should be as unique as you
            </h2>
            <p className="md:mb-4 mb-2 text-black">
              Our consultation programmes can be carried out online or
              face-to-face at our clinic. With just a simple questionnaire to
              complete, followed by an appointment with one of our Tavisa
              consultants, you will be prescribed the blends and combinations of
              herbal supplements that are perfectly suited to you.
            </p>
            <p className="md:mb-4 mb-2 text-black">
              We will send you what you need, when you need it.
            </p>
            <Link
              href="/what-next"
              className="bg-pink-500 text-white px-4 py-2 rounded-full inline-block text-center hover:bg-blue-600"
            >
              What Next?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
