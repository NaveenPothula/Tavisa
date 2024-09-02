import React from "react";
import Image from "next/image";
import QuantityInput from "@/components/quantity";

type Product = {
  id: string;
  name: string;
  description: string;

  price: number;
  // HTML content string
  image?: {
    url: string;
  };
};

const Product = async ({ params }: { params: { id: string } }) => {
  const product: Product = {
    id: "1",
    name: "test1",
    description:
      "This is the description of the product.Here we can mention the details of the product. so that user can understand about the product. This is the description of the product.Here we can mention the details of the product. so that user can understand about the product. This is the description of the product.Here we can mention the details of the product. so that user can understand about the product. ",
    price: 339,
    image: {
      url: "https://res.cloudinary.com/duqbmh63s/image/upload/v1721714543/smellica/product/bcs3iykwvlsqrlrczyhu.jpg",
    },
  };
  console.log(product);

  const handleAddToCart = (productId: string) => {
    // Add to cart logic
    console.log(`Added product with ID ${productId} to cart.`);
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-auto bg-E1E1E1 mt-20">
        <div className="bg-white text-black rounded-lg p-8 max-w-6xl w-full mx-4">
          <h1 className="text-center text-4xl font-bold mb-4 text-red-600">
            Product Not Found
          </h1>
          <p className="text-center text-gray-700">
            The product you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:px-4 lg:py-6 md:py-2 py-4">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        {product.image && (
          <div className="md:w-1/2 mb-4 lg:mb-0 md:pr-4">
            <Image
              src={product.image.url}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Details Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4 text-black">{product.name}</h1>
          <p className="text-black  mb-4">{product.description}</p>
          <p className="text-xl text-black font-semibold mb-4">
            ${product.price}
          </p>
          <QuantityInput />
        </div>
      </div>
    </div>
  );
};

export default Product;
