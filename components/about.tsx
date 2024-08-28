// components/ResponsiveBackgroundText.js

import React from "react";
import Link from "next/link";

const HowWeTreat = () => {
  return (
    <div>
      <div
        className="relative w-full bg-cover"
        style={{ backgroundImage: "url('/Tavisa-Home.png')" }}
      >
        {/* Main container with responsive height */}
        <div className="h-[300px] md:h-[400px] w-full relative">
          {/* Text for medium (md) and large (lg) screens, starting after 60% width */}
          <div className="hidden md:flex md:flex-col items-center justify-center absolute top-0 left-[50%] w-[50%] h-full items-center px-4">
            <p className="text-black text-2xl text-center">
              Menopause affects every woman differently, hot flashes, mood
              swings, anxiety and weight gain can cause dread.
            </p>
            <p className="text-black text-2xl text-center">
              So your treatment should be as unique as you!
            </p>
            <Link
              href="/what-next"
              className="bg-pink-500 text-white px-2 py-2 rounded-full hover:bg-blue-600" // Adjusted padding
            >
              What Next?
            </Link>
          </div>
        </div>

        {/* Text for small (sm) screens, displayed below the image */}
        {/* <div className="block md:hidden mt-4">
        <p className="text-white text-xl">
          This is the text content for small screens below the image.
        </p>
      </div> */}
      </div>
      <div className="md:hidden flex flex-col justofy-center items-center">
        <p className="text-black text-xl text-center font-bold">
          Menopause affects every woman differently, hot flashes, mood swings,
          anxiety and weight gain can cause dread.
        </p>
        <p className="text-black text-xl text-center font-bold">
          So your treatment should be as unique as you!
        </p>
        <Link
          href="/what-next"
          className="bg-pink-500 text-white px-2 py-2 rounded-full hover:bg-blue-600 mt-2" // Adjusted padding
        >
          What Next?
        </Link>
      </div>

      {/* <p className="text-black text-xl md:hidden text-center font-bold">
        44% of women experienced three or more severe symptoms
      </p> */}
    </div>
  );
};

export default HowWeTreat;
