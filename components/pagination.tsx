// // app/products/Pagination.tsx

// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";

// interface PaginationProps {
//   totalPages: number;
//   currentPage: number;
// }

// const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
//   const router = useRouter();

//   const handlePageChange = (page: number) => {
//     const currentParams = new URLSearchParams(window.location.search);
//     currentParams.set("page", page.toString());
//     router.push(`/shop?${currentParams.toString()}`);
//   };

//   return (
//     <div className="flex justify-center mt-4">
//       <button
//         onClick={() => handlePageChange(currentPage - 1)}
//         className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded ${
//           currentPage === 1 ? "disabled:bg-gray-400" : ""
//         }`}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index}
//           onClick={() => handlePageChange(index + 1)}
//           className={`px-4 py-2 mx-1 rounded ${
//             currentPage === index + 1
//               ? "bg-blue-700 text-white"
//               : "bg-blue-500 text-white"
//           }`}
//         >
//           {index + 1}
//         </button>
//       ))}
//       <button
//         onClick={() => handlePageChange(currentPage + 1)}
//         className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded ${
//           currentPage === totalPages ? "disabled:bg-gray-400" : ""
//         }`}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;
