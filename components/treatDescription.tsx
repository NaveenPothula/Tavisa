import Link from "next/link";

export default function TreatDescription() {
  return (
    <div className="flex items-center justify-center py-10 bg-white md:px-4">
      <div className="w-full  text-center">
        {/* Heading in Black */}
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 bg-CB9904">
          Menopause Diagnosis
        </h1>
        <p className="text-base text-black mb-4">
          At your first consultation we will analyse your personal constitution
          in a number of different ways, including via a short questionnaire
          before we meet you.
        </p>
        <p className="text-base text-black mb-4">
          We use both traditional Ayurvedic diagnostic tools as well as modern
          diagnostic tools during the consultation to diagnose the customer’s
          Doshic imbalance.
        </p>
        <p className="text-base text-black mb-4">
          Ayurveda looks at the root cause of the menopause, which is hormonal
          imbalance. Every cell in our bodies has healing potential. Ayurveda
          taps into that healing potential to accelerate the healing process.
        </p>

        <Link
          href="/what-next"
          className="bg-pink-500 text-white px-4 py-2 rounded-full inline-block text-center hover:bg-blue-600"
        >
          Take your free assessment now?
        </Link>
      </div>
    </div>
  );
}
