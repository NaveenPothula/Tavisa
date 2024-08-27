import Link from "next/link";

export default function SymptomsDescription() {
  return (
    <div className="flex items-center justify-center py-10 bg-white px-4">
      <div className="w-full  text-center">
        {/* Heading in Black */}
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 bg-CB9904">
          Menopause Symptoms
        </h1>
        <p className="text-base text-black mb-4">
          Menopause is not just hot flushes and periods stopping. It can also
          produce low energy, insomnia, dryness in the body, migraines and low
          libido to name but a few, and the symptoms can last on average, 4-8
          years.
        </p>

        {/* Heading in Yellow */}
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
          1 in 100 will experience menopause under the age of 40
        </h2>

        {/* Small Paragraph with Black Text */}

        {/* Heading in Yellow */}
        <h3 className="text-base  text-black mb-4">
          Symptoms are experienced differently for each woman: some may have hot
          flashes for a month or several months, some women may never experience
          heart palpitations, spotting, or an itchy vagina.
        </h3>

        {/* Text with Small Font */}
        <Link
          href="/what-next"
          className="bg-pink-500 text-white px-4 py-2 rounded-full inline-block text-center"
        >
          What symptoms we treat?
        </Link>
      </div>
    </div>
  );
}
