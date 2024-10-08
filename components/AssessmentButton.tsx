import React from "react";
import Link from "next/link";

const AssessmentButton = () => {
  return (
    <div className="flex justify-center items-center mb:mb-10 mb-6 md:mt-10 mt-6">
      <Link
        href="/what-next"
        className="bg-pink-500 text-white px-4 py-2 rounded-full inline-block text-center hover:bg-blue-600"
      >
        Take your free assessment now
      </Link>
    </div>
  );
};

export default AssessmentButton;
