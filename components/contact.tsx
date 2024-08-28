"use client";
import Link from "next/link";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const validateInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/; // Adjust pattern based on your requirements

    if (emailPattern.test(inputValue) || mobilePattern.test(inputValue)) {
      setError("");
      // Input is valid
    } else {
      setError("Please enter a valid email or mobile number");
    }
  };

  // Handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (error !== "") {
    //   return;
    // }
    // console.log(formData, inputValue);
    // setIsLoading(true);
    // const response = await fetch("/api/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: formData.name,
    //     contact: inputValue,
    //     message: formData.message,
    //   }),
    // });

    // const result = await response.json();
    // setIsLoading(false);

    // if (result.success) {
    //   setFormData({
    //     name: "",
    //     message: "",
    //   });
    //   setInputValue("");
    //   alert("Your message has been successfully sent!");
    // } else {
    //   alert(`Failed to send email: ${result.error}`);
    // }
  };

  return (
    <div className="flex justify-center items-center min-h-auto bg-E1E1E1 py-4">
      <div className="bg-white text-black rounded-lg w-full px-0">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Get in Touch with Tavisa</h2>
            <p className="mb-4">
              Tavisa provides holistic healthcare services using ancient
              principles of Ayurveda for women in all stages of life. It’s a
              natural way to restore and maintain the balance in your body, mind
              and spirit.
            </p>
            <p className="mb-4">
              Fill out the form, and our team will get back to you as soon as
              possible. We typically respond within one business day.
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Other ways to reach us:
            </h3>
            <p className="mb-2">
              <span className="font-semibold">📧 Email: </span>
              <a href="mailto:hello@captainmvp.com" className="text-blue-500">
                hello@tavisa.health.com
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">📞 Phone:</span> +44 7375 351234.
              (Mon-Fri, 9 AM - 6 PM)
            </p>
            <p className="mb-2">
              <span className="font-semibold">Address: </span> Parmi Diagnostics
              MK Limited, a(n) Private Limited Company formed in England ,Suite
              1, 1st Floor, Aurora House, 105, High Street, Slough SL1
              1DH.England
            </p>

            <p>
              We appreciate your interest in Tavisa and look forward to
              assisting you!
            </p>
          </div>
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  required
                  minLength={3}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email/mobile:
                </label>
                <input
                  required
                  value={inputValue}
                  onChange={handleFieldChange}
                  onBlur={validateInput}
                  placeholder="Enter email or mobile number"
                  id="email"
                  name="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="text-sm text-gray-500">
                By Clicking Submit, you agree to our{" "}
                <Link href="/terms-and-conditions" className="text-blue-500">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-blue-500">
                  Privacy Policy
                </Link>
                .
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isLoading ? "Sending your message ..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
