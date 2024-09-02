// components/AddToCartButton.tsx
"use client"; // Ensure this component runs on the client side

interface AddToCartButtonProps {
  click: (id: string) => void;
  id: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ click, id }) => {
  return (
    <button
      onClick={() => click(id)}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
