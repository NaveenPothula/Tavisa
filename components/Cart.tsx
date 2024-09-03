// components/CartPage.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  vat: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  // Dummy data for cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      image:
        "https://res.cloudinary.com/duqbmh63s/image/upload/v1721714543/smellica/product/bcs3iykwvlsqrlrczyhu.jpg", // Sample image path
      price: 100,
      vat: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://res.cloudinary.com/duqbmh63s/image/upload/v1721714543/smellica/product/bcs3iykwvlsqrlrczyhu.jpg", // Sample image path
      price: 200,
      vat: 20,
      quantity: 2,
    },
  ]);

  // Function to handle quantity increase
  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to handle quantity decrease
  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity + item.vat,
      0
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center md:mb-6 mb-2">Cart</h1>
      <div className="flex justify-center md:mb-4 mb-2">
        <nav className="space-x-10 flex justify-around md:w-full">
          <Link href="/cart" className="text-blue-600 font-bold">
            Cart
          </Link>
          <a href="/checkout" className="text-gray-600">
            Checkout
          </a>
        </nav>
      </div>
      <div className="hidden md:block">
        {/* Table for Desktop */}
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">VAT</th>
              <th className="py-2 px-4 border-b">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b flex items-start">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="mr-4"
                  />
                  <div>
                    <p>{item.name}</p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="ml-auto text-white bg-red-500 px-2 py-1 rounded text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="px-2 py-1 text-white bg-gray-800"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="px-2 py-1 text-white bg-gray-800"
                  >
                    +
                  </button>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  £{item.price}
                </td>
                <td className="py-2 px-4 border-b text-center">£{item.vat}</td>
                <td className="py-2 px-4 border-b text-center">
                  £{item.price * item.quantity + item.quantity * item.vat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stacked Layout for Mobile */}
      <div className="md:hidden">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row border-b border-gray-200 py-4 justify-between flex-wrap"
          >
            <div className="flex items-center mb-2">
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                className="mr-4"
              />
              <div>
                <h2 className="mb-2">{item.name}</h2>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="px-2 py-1 text-white bg-gray-800 mb-2"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="px-2 py-1 text-white bg-gray-800 mb-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-white px-2 py-1 bg-red-500 rounded text-xs"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex justify-between flex-col">
              <p>Price: £{item.price}</p>
              <p>VAT: £{item.vat}</p>
              <p>
                Sub total: £
                {item.price * item.quantity + item.vat * item.quantity}
              </p>
              <p>quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-6 text-right mb-4">
        <h3 className="text-xl font-bold">
          Total Price: £{calculateTotalPrice()}
        </h3>
      </div>

      <Link
        href="/checkout"
        className="text-base md:mb-6 mb-2 w-[100%] bg-blue-500 mt-6 px-2 py-2 rounded"
      >
        <button className="text-white w-full">Checkout</button>
      </Link>
    </div>
  );
};

export default CartPage;
