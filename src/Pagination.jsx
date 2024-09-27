import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className="flex justify-center mt-4">
        <ul className="flex space-x-2">
          {pageNumbers.map(number => (
            <li key={number}>
              <button
                onClick={() => setCurrentPage(number)}
                className={`py-2 px-4 border rounded-md ${
                  currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
export default Pagination;
