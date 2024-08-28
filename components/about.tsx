import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
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
      <div className="flex-1 bg-white text-black md:p-6 pt-2 flex items-center justify-center h-[300px] md:h-[400px]">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">
            Menopause affects every woman differently, hot flashes, mood swings,
            anxiety and weight gain can cause dread.
          </h3>
          <h3 className="text-xl font-semibold mb-6">
            So your treatment should be as unique as you!
          </h3>
          <Link
            href="/what-next"
            className="bg-pink-500 text-white px-2 py-2 rounded-full hover:bg-blue-600" // Adjusted padding
          >
            What Next?
          </Link>
        </div>
      </div>
    </div>
  );
}
