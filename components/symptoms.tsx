// components/ResponsiveBackgroundText.js

import React from "react";

const ResponsiveBackgroundText = () => {
  return (
    <div>
      <div
        className="relative w-full bg-cover md:bg-cover bg-center"
        style={{ backgroundImage: "url('/symptoms.png')" }}
      >
        {/* Main container with responsive height */}
        <div className="h-[300px] md:h-[400px] w-full relative">
          {/* Text for medium (md) and large (lg) screens, starting after 60% width */}
          <div className="hidden md:flex md:flex-col items-center justify-center absolute top-0 left-[60%] w-[40%] h-full items-center px-4">
            <p className="text-white text-xl text-center">
              Symptoms are experienced differently for each woman.
            </p>
            <p className="text-white text-xl text-center">
              44% of women experienced three or more severe symptoms
            </p>
          </div>
        </div>

        {/* Text for small (sm) screens, displayed below the image */}
        {/* <div className="block md:hidden mt-4">
        <p className="text-white text-xl">
          This is the text content for small screens below the image.
        </p>
      </div> */}
      </div>
      <p className="text-black text-xl md:hidden text-center font-bold">
        Symptoms are experienced differently for each woman.
      </p>
      <p className="text-black text-xl md:hidden text-center font-bold">
        44% of women experienced three or more severe symptoms
      </p>
    </div>
  );
};

export default ResponsiveBackgroundText;
