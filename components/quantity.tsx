// components/QuantityInput.tsx
"use client"; // Ensure this component runs on the client side

import React, { useState } from "react";
import { useParams } from "next/navigation";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const params = useParams();
  const productId = params.id;

  console.log(productId);
  const min = 1;
  const max = 5;

  const handleIncrease = () => {
    if (quantity < max) {
      setQuantity((prev) => {
        const newValue = prev + 1;

        return newValue;
      });
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      setQuantity((prev) => {
        const newValue = prev - 1;

        return newValue;
      });
    }
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l-md"
        >
          -
        </button>
        <button className="bg-white text-gray-700 px-4 py-2 ">
          {quantity}
        </button>

        <button
          onClick={handleIncrease}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md"
        >
          +
        </button>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default QuantityInput;
