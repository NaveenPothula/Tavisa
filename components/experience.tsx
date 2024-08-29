import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="md:py-6 pb-3 bg-white">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-2 text-black">
        Your unique Tavisa experience
      </h1>
      <div className="flex flex-col md:flex-row bg-white">
        {/* Block 1: Image */}
        <div className="flex-1 md:mr-6">
          <div className="relative w-full min-h-[300px] md:min-h-[400px]">
            <Image
              src="/experience.png" // Replace with your image path
              alt="Descriptive Alternative text"
              layout="fill"
              objectFit="cover" // Ensures the image covers the entire area
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Block 2: Content */}
        <div className="flex-1 bg-white flex justify-center h-auto">
          <div className="text-left">
            <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 text-black">
              Talk 1:1 with our consultant
            </h2>
            <p className="md:mb-4  mb-2 text-black">
              Your Tavisa Doctor will review your medical history prior to your
              visit. During the 30-minute virtual visit, you’ll share your
              experience with menopause, your quality of life, and the symptoms
              you’re experiencing.
            </p>
            <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 text-yellow-500">
              Receive a menopause treatment plan custom for your needs & goals
            </h2>

            <p className="mb-4 text-black">
              Tavisa consultant will explain what’s happening in your body –
              both physically and mentally – and then create a personalised care
              plan for you.
            </p>
            <p className="mb-4 text-black">
              Your plan may include: lifestyle changes in nutrition, fitness,
              mindfulness, supplements, and more.
            </p>

            <Link
              href="/symptoms"
              className="bg-pink-500 text-white px-2 py-2 rounded-full hover:bg-blue-600" // Adjusted padding
            >
              What symptoms we treat?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
