"use client";
import React, { useState } from "react";
import Image from "next/image";

// Define a type for the product
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

// Dummy data for products
const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    category: "Category1",
    price: 29.99,
    image: "/mission.png",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category2",
    price: 39.99,
    image: "/mission.png",
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category3",
    price: 19.99,
    image: "/mission.png",
  },
  {
    id: 4,
    name: "Product 4",
    category: "Category1",
    price: 49.99,
    image: "/mission.png",
  },
  {
    id: 5,
    name: "Product 5",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
  {
    id: 6,
    name: "Product 6",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
  {
    id: 7,
    name: "Product 7",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
  {
    id: 8,
    name: "Product 8",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
  {
    id: 9,
    name: "Product 9",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
  {
    id: 10,
    name: "Product 10",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
  {
    id: 11,
    name: "Product 11",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
  {
    id: 12,
    name: "Product 12",
    category: "Category2",
    price: 24.99,
    image: "/mission.png",
  },
];

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Number of items per page

  // Filter products based on the selected category
  const filteredProducts =
    filter === "All"
      ? dummyProducts
      : dummyProducts.filter((product) => product.category === filter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    setFilter(category);
    setCurrentPage(1); // Reset to the first page whenever filter changes
  };

  return (
    <div className="container mx-auto py-8">
      {/* Heading */}
      <h1 className="text-center text-2xl font-bold mb-6">Products</h1>

      {/* Filters */}
      <div className="flex justify-start flex-wrap mb-2 items-center">
        {["All", "Category1", "Category2", "Category3"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-4 py-2 mx-2 rounded-full mb-2 ${
              filter === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg flex flex-col items-start"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold mb-2 ml-1">{product.name}</h2>
            <p className="text-gray-600 mb-2 ml-1">
              £{product.price.toFixed(2)}
            </p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-xs hover:bg-blue-500 ml-1">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 mx-2 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {/* Render page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-1 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 mx-2 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
