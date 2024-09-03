// pages/checkout.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage: React.FC = () => {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1 is the product name",
      price: 50,
      vat: 5,
      quantity: 2,
      image:
        "https://res.cloudinary.com/duqbmh63s/image/upload/v1721714543/smellica/product/bcs3iykwvlsqrlrczyhu.jpg",
    },
    {
      id: 2,
      name: "Product 2 is the product name",
      price: 30,
      vat: 3,
      quantity: 1,
      image:
        "https://res.cloudinary.com/duqbmh63s/image/upload/v1721714543/smellica/product/bcs3iykwvlsqrlrczyhu.jpg",
    },
  ]);

  // State for handling form inputs and coupon code
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    streetAddress: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    couponCode: "",
  });

  // Calculate total price including VAT
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity + item.vat * item.quantity,
    0
  );

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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

  const handleRemoveItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center mb-4">Checkout</h1>

      {/* Navigation Links */}
      <div className="flex justify-center mb-4">
        <nav className="space-x-10 flex justify-around md:w-full">
          <Link href="/cart" className=" font-bold text-xl">
            Cart
          </Link>
          <Link href="/checkout" className="text-blue-600 text-xl">
            Checkout
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="md:flex md:flex-row gap-4 w-full">
        {/* Address Block */}
        <div className="w-full md:w-3/5 border p-2 md:p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold mb-1"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold mb-1"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-semibold mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="border p-3 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="streetAddress"
                className="text-sm font-semibold mb-1"
              >
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="border p-3 rounded w-full"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="country" className="text-sm font-semibold mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm font-semibold mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="state" className="text-sm font-semibold mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="zipCode" className="text-sm font-semibold mb-1">
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white p-3 rounded w-full mt-4 hover:bg-blue-600"
            >
              Add Address
            </button>
          </form>
        </div>

        {/* Order Summary Block */}
        <div className="w-full md:w-2/5 border rounded-lg md:p-2">
          <h2 className="text-xl font-bold mb-2">Order Summary</h2>
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-row border-b border-gray-200 px-2 mb-1 lg:justify-start  gap-4 flex-wrap"
            >
              <div className="flex items-start mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="mr-4"
                />

                <div className="flex flex-col justify-start items-start">
                  <h2 className="mb-2 ">{item.name}</h2>
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
                    className="text-white px-2 py-0 bg-red-500 rounded text-sm py-1"
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

          {/* Total Price */}
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold">
              Total Price: £{totalPrice}
            </h3>
          </div>

          {/* Coupon Code */}
          <div className="mt-4">
            <div className="flex flex-col">
              <label
                htmlFor="couponCode"
                className="text-sm font-semibold mb-1"
              >
                Coupon Code
              </label>
              <input
                type="text"
                id="couponCode"
                name="couponCode"
                placeholder="Apply Coupon Code"
                value={formData.couponCode}
                onChange={handleInputChange}
                className="border p-3 rounded w-full mb-2"
              />
            </div>
            <button className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
