import React from "react";
import Image from "next/image";

const symptomsFlex = () => {
  return (
    <div className="flex flex-col flex-wrap md:flex-row justify-between md:space-y-0 gap-2 mb-4 bg-white">
      {/* Section 1 */}
      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/symptom1.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Heart & Temperature changes
        </h2>
        <p className="text-gray-600">night/day sweats/hot flushes</p>
        <p className="text-gray-600">Tachycardia</p>
        <p className="text-gray-600">Heart Palptitions</p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/symptom2.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Vaginal Changes
        </h2>
        <p className="text-gray-600">Vaginal dryness/Itching</p>
        <p className="text-gray-600">Loss of libido</p>
        <p className="text-gray-600">Irregular bleeding</p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/symptom3.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Weight & Body Changes
        </h2>
        <p className="text-gray-600">Weight gain</p>
        <p className="text-gray-600">Digestive disorders</p>
        <p className="text-gray-600">Ringing ears or tinnitus</p>
        <p className="text-gray-600">Low metabolic function</p>
        <p className="text-gray-600">Irregular/ no periods</p>
        <p className="text-gray-600">Chronic fatigue</p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/symptom4.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Hair & Skin Changes
        </h2>
        <p className="text-gray-600">Irritated skin</p>
        <p className="text-gray-600">Thinning hair</p>
        <p className="text-gray-600">Unusual hair growth</p>
        <p className="text-gray-600">Acne</p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/symptom5.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Anxiety & Mental Health
        </h2>
        <p className="text-gray-600">Rage</p>
        <p className="text-gray-600">Anxiety</p>
        <p className="text-gray-600">Mood changes</p>
        <p className="text-gray-600">Brain fog</p>
        <p className="text-gray-600">Menopause fatigue</p>
        <p className="text-gray-600">Stress</p>
      </div>

      <div className="flex flex-col items-center text-center bg-custom-yellow w-full md:w-[48%] py-4">
        <div className="w-full h-[100px] md:h-[150px] w-1/2 relative mb-4">
          <Image
            src="/symptom6.png" // Replace with your image path
            alt="Service 1"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">
          Joint Pain
        </h2>
        <p className="text-gray-600"> Musculoskeletal pain</p>
        <p className="text-gray-600"> Foot pain</p>
        <p className="text-gray-600"> Joint pain</p>
        <p className="text-gray-600"> Tingling fingers or toes</p>
      </div>
    </div>
  );
};

export default symptomsFlex;
