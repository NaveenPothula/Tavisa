import React from "react";
import Link from "next/link";

const AssessmentButton = () => {
  return (
    <div className="flex justify-center items-center mb-10 mt-10">
      <Link
        href="/what-next"
        className="bg-pink-500 text-white px-4 py-2 rounded-full inline-block text-center"
      >
        Take your free assessment now
      </Link>
    </div>
  );
};

export default AssessmentButton;
