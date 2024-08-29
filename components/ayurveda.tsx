import Image from "next/image";
import Link from "next/link";

export default function Ayurveda() {
  return (
    <div className=" pb-6 bg-white">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4 text-black">
        About Ayurveda
      </h1>
      <div className="flex flex-col md:flex-row bg-white">
        {/* Block 1: Image */}

        {/* Block 2: Content */}
        <div className="flex-1 bg-white flex justify-center h-auto md:px-10">
          <div className="text-left">
            <p className="mb-4 text-black">
              We have already embraced so many elements of Ayurveda practice
              that you may already use them, but might not realise they are part
              of Ayurveda. This includes; yoga, meditation, mindfulness and
              turmeric for digestion to name but a few.
            </p>

            <p className="mb-4 text-black">
              Originating in India over 5,000 years ago, Ayurveda is often
              hailed as the first system of medicine, addressing the mind, body
              and spirit. Ayurveda deals with the root cause of the disease and
              helps not only in curing a disease but also aids in preventing the
              disease to manifest. This is only possible with the proper
              understanding of the fundamentals of Ayurveda.
            </p>
          </div>
        </div>
        <div className="flex-1 md:mr-6 px-0">
          <div className="relative w-full min-h-[300px] md:min-h-[400px]">
            <Image
              src="/ayurveda.png" // Replace with your image path
              alt="Descriptive Alternative text"
              layout="fill"
              objectFit="cover" // Ensures the image covers the entire area
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
