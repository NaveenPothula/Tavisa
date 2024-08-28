// components/ResponsiveBackgroundText.js

import React from "react";
import Link from "next/link";

const Learn = () => {
  return (
    <div>
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover"
        style={{ backgroundImage: "url('/tavisa-learn.png')" }}
      >
        {/* Text for medium (md) and large (lg) screens, starting after 60% width */}
        <div className="absolute md:left-[50%] left-[30%] h-full md: flex justify-start items-center">
          <p className="text-black text-2xl text-center">
            Menopause articles & resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
