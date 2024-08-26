import Image from "next/image";
import Link from "next/link";

export default function Aim() {
  return (
    <div className="py-6 px-0 bg-white">
      {/* Main Heading */}
      <h1 className="text-center text-3xl font-bold text-yellow-500 mb-6">
        Ayurveda’s aim is to bring the body into balance
      </h1>

      {/* Main Description */}
      <p className="text-center text-lg text-gray-700 mb-8">
        It’s the science of life that offers a holistic approach to wellness and
        disease. It treats the body/mind complex and complements modern
        medicine. Ayurveda is not just a ‘one size fits all’ kind of approach –
        it’s tailored to suit an individual’s needs.
      </p>
      <p className="text-center text-lg text-gray-700 mb-8">
        We each have our own Dosha. This is the universal life force which
        exists as three different energies, known as Doshas: Vataj, Pittaj and
        Kaphaj.
      </p>
      <p className="text-center text-lg text-gray-700 mb-8">
        We are all made up of our own personal combination of these three
        forces, with their balance – or imbalance – of the five elements: Ether,
        Air, Fire, Water and Earth.
      </p>

      {/* Section Container */}
      <div className="flex flex-col md:flex-row justify-between md:space-y-0 md:space-x-6 gap-6 mb-4">
        {/* Section 1 */}
        <div className="flex flex-col items-center text-center bg-white w-full md:w-1/3">
          <div className="w-full h-[100px] md:h-[200]px w-1/2 relative">
            <Image
              src="/vata.png" // Replace with your image path
              alt="Service 1"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold text-yellow-500">Vata</h2>
          <p className="text-gray-600">(dominated by ether and air)</p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-center text-center bg-white w-full md:w-1/3">
          <div className="w-full h-[100px] md:h-[200]px w-1/2 relative">
            <Image
              src="/pita.png" // Replace with your image path
              alt="Service 2"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold text-yellow-500">Pita</h2>
          <p className="text-gray-600">(dominated by fire and water)</p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col items-center text-center bg-white w-full md:w-1/3">
          <div className="w-full h-[100px] md:h-[200]px w-1/2 relative">
            <Image
              src="/kapha.png" // Replace with your image path
              alt="Service 3"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold text-yellow-500">Kapha</h2>
          <p className="text-gray-600">(dominated by earth and water)</p>
        </div>
      </div>
      <Link href="/who-are-we" className="flex justify-center mb-4">
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600">
          What symptoms we treat
        </button>
      </Link>
      <p className="text-center text-lg text-gray-700 mb-8 md:px-10">
        Ayurveda looks at the root cause of women’s health issues. We access the
        customer’s Doshic imbalance and prescribe tailor-made customised herbal
        supplements, nutrition plans, and Panchakarma therapies to optimise the
        healing process.
      </p>
      <p className="text-center text-lg text-gray-700 mb-8">
        At Tavisa, we use both traditional Ayurvedic diagnostic tools as well as
        modern diagnostic tools during the consultation. Please be reassured
        that our products are 100% herbal and supplement the personalised
        nutritional and lifestyle advice that we provide.
      </p>
    </div>
  );
}
