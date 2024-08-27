import React from "react";
import Image from "next/image";

export default function TreatFlex() {
  return (
    <div className="flex flex-col flex-wrap md:flex-row justify-between md:space-y-0 gap-2 mb-4 bg-white">
      {/* Section 1 */}
      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/treat1.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Menopause Diagnosis
        </h2>
        <p className="text-gray-600 px-4">
          We listen and ask you questions, We use both traditional Ayurvedic
          diagnostic tools as well as modern diagnostic tools during the
          consultation to diagnose the Doshic imbalance.
        </p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/treat2.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Herbal Supplements
        </h2>
        <p className="text-gray-600 px-4">
          We use herbal supplments to restore balance. These will be recommended
          specifically for you and your symptoms.
        </p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/treat3.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Diet & Nutrition
        </h2>
        <p className="text-gray-600 px-4">
          Customised diet plan for each individual that works best for the
          individual. Within just a few weeks, the individual will start to feel
          a major improvement in the symptoms.
        </p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/treat4.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Movement, Sleep & Mindfulness
        </h2>
        <p className="text-gray-600 px-4">
          Discover new techniques, to encourage a healthier lifestyle for body
          and mind.
        </p>
      </div>
    </div>
  );
}
