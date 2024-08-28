import Image from "next/image";
import Link from "next/link";

export default function Assessment() {
  return (
    <div className="flex flex-col md:flex-row bg-white px-0 py-5">
      {/* Block 1: Image */}

      {/* Block 2: Content */}
      <div className="flex-1 bg-grey text-black px-0  h-[300px] md:h-[400px] py-2 md:py-0">
        <div className="text-left py-0">
          <h2 className="md:text-2xl text-xl font-bold mb-4">
            Take our FREE Menopause Assessment for a menopause diagnosis
          </h2>
          <p className="my-4">
            It will provide you with a personal health insight about where you
            are in your menopause journey. It will also set up your initial
            visit with one of our Tavisa doctors. This will help us provide
            information essential for diagnosis, medical guidance, and
            prescription support.
          </p>

          <Link
            href="/what-next"
            // Adjusted padding
          >
            <button className="bg-pink-500 text-white rounded-full px-2 py-2 hover:bg-blue-600">
              Take your free assessment now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/assessment.png" // Replace with your image path
            alt="Descriptive Alt Text"
            layout="fill"
            objectFit="cover" // Ensures the image covers the entire area
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
