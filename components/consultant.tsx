import Image from "next/image";
import Link from "next/link";

export default function Consultant() {
  return (
    <div className="md:py-6 py-4 bg-white">
      <h1 className="text-center text-2xl md:text-3xl font-bold md:mb-4 text-black">
        Meet your consultant
      </h1>
      <div className="flex flex-col md:flex-row bg-white">
        <div className="flex-1 md:mr-6 px-0">
          <div className="relative w-full min-h-[250px] md:min-h-[300px]">
            <Image
              src="/consultant.png" // Replace with your image path
              alt="Descriptive Alternative text"
              layout="fill"
              objectFit="contain" // Ensures the image covers the entire area
              className="w-full h-full"
            />
          </div>
          <h2 className="text-center text-black mb-2">Dr vani Moodley</h2>
          <Link href="/who-are-we" className="flex justify-center mb-4">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600">
              Take your free assessment now
            </button>
          </Link>
        </div>
        {/* Block 1: Image */}

        {/* Block 2: Content */}
        <div className="flex-1 bg-white flex justify-center h-auto md:px-10">
          <div className="text-left">
            <p className="mb-4 text-black">
              Meet our Medical Director, a fusion of modern science and
              Ayurvedic expertise.
            </p>

            <p className="mb-4 text-black">
              With a background in scientific research on allopathic medicines,
              she pursued Ayurveda with passion. Graduating as an Ayurvedic
              Practitioner after intensive studies at Middlesex University and
              internships in India’s top Ayurvedic Hospitals, she also holds a
              PhD in Pancha Karma.
            </p>
            <p className="md:mb-6 text-black">
              As a member of the British Ayurvedic Medical Association’s
              executive committee, her holistic approach complements modern
              medicine, providing personalised treatment plans. Experience
              Ayurveda’s transformative power with our doctor for wellness and
              vitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
