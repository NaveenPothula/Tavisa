// components/MenopauseFAQ.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";

// Define the type for the FAQ item
type FAQItem = {
  question: string;
  answer: string;
};

// Define the component
const FAQ: React.FC = () => {
  // Sample question and answer data
  const faqData: FAQItem[] = [
    {
      question: "What is menopause, and when does it usually occur?",
      answer:
        "Menopause is a natural biological process marking the end of a woman’s reproductive years. It typically occurs in their late 40s to early 50s, and the menstrual cycle gradually ceases.",
    },
    {
      question: "What are the common symptoms of menopause?",
      answer:
        "Menopause can bring various symptoms, including hot flashes, night sweats, mood swings, irregular periods, vaginal dryness, and sleep disturbances",
    },
    {
      question: "How can Ayurveda help with menopause symptoms?",
      answer:
        "Ayurveda, an ancient holistic healing system, focuses on balancing the body and mind. The Menopause Wellness Program utilizes Ayurvedic principles to provide personalized herbal remedies, diet recommendations, and therapies to alleviate menopause symptoms.",
    },
    {
      question: "Is the Menopause Wellness Program suitable for all women?",
      answer:
        "Yes, the program is tailored to meet the unique needs of each individual, making it suitable for women of all ages and stages of menopause.",
    },
    {
      question: "How long does the Menopause Wellness Program last?",
      answer:
        "The duration of the program varies based on individual requirements. Our experts will design a personalized plan to ensure optimal results for each participant.",
    },
    {
      question: "Are the Ayurvedic supplements safe to use during menopause?",
      answer:
        "Yes, the Ayurvedic supplements used in the program are carefully selected for their safety and efficacy. They are free from harmful chemicals and aim to support overall well-being during menopause.",
    },
    {
      question: "Can the Menopause Wellness Program replace medical treatment?",
      answer:
        "The Menopause Wellness Program is complementary to medical treatment and aims to enhance overall well-being. We recommend consulting with a healthcare professional for any medical concerns.",
    },
  ];

  // State to manage which answer is currently visible
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [height, setHeight] = useState<string | number>("0px");
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Effect to manage height transitions
  useEffect(() => {
    if (contentRef.current) {
      setHeight(
        openIndex !== null ? `${contentRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [openIndex]);

  // Function to handle click events on questions
  const handleToggle = (index: number) => {
    // If the clicked question is already open, close it; otherwise, open it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      {/* Heading */}
      <h1 className="md:text-2xl text-xl font-bold text-center mb-6 text-black">
        Common Questions Asked About Menopause
      </h1>

      {/* FAQ Section */}
      <div className="space-y-4 w-full">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            {/* Question */}
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-lg font-semibold text-black">
                {item.question}
              </h2>
              {/* Toggle button */}
              <span className="text-3xl text-black ml-4">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Answer - display only if this question is open with smooth transition */}
            <div
              ref={contentRef}
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{ height: openIndex === index ? height : "0px" }}
            >
              <p className="mt-2 text-black">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
