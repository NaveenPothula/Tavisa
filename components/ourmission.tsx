// components/ResponsiveImageText.js

import Image from "next/image";

export default function ResponsiveImageText() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-white">
      {/* Background image for larger screens */}
      <div
        className="hidden md:block md:relative md:w-full md:h-full"
        style={{
          backgroundImage: `url(${"/mission.png"})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 opacity-0 bg-white"></div>

        {/* Text positioned after 60% of the width */}
        <div className="absolute top-1/2 left-[60%] transform -translate-y-1/2 text-black text-2xl font-bold">
          Our mission is to help women in all stages of life, providing holistic
          healthcare service and support
        </div>
      </div>

      {/* Image and text for smaller screens */}
      <div className="block md:hidden relative">
        <Image
          src="/mission.png"
          alt="Background Image"
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="w-full h-[200px]"
        />
        <p className="mt-4 text-center text-xl font-semibold text-black">
          Our mission is to help women in all stages of life, providing holistic
          healthcare service and support
        </p>
      </div>
    </div>
  );
}
