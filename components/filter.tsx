// // app/products/Filters.tsx

// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";

// interface FiltersProps {
//   currentFilters: string;
// }

// const Filters: React.FC<FiltersProps> = ({ currentFilters }) => {
//   const router = useRouter();

//   const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedFilter = event.target.value;
//     const currentParams = new URLSearchParams(window.location.search);
//     currentParams.set("category", selectedFilter);
//     router.push(`/shop?${currentParams.toString()}`);
//   };

//   return (
//     <div className="mb-4">
//       <h2 className="text-lg font-semibold mb-2">Filters</h2>
//       <select
//         value={currentFilters}
//         onChange={handleFilterChange}
//         className="border rounded p-2"
//       >
//         <option value="">All Categories</option>
//         {/* Example categories */}
//         <option value="Electronics">Electronics</option>
//         <option value="Furniture">Furniture</option>
//         <option value="Clothing">Clothing</option>
//       </select>
//     </div>
//   );
// };

// export default Filters;
