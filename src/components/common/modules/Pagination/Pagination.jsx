import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Determine which page numbers to display
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return pageNumbers; // Show all pages if there are 5 or fewer
    }

    // Show pages around the current page
    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(currentPage + 2, totalPages);

    // Adjust start and end if we're near the edges
    if (currentPage <= 3) {
      end = 5;
    } else if (currentPage >= totalPages - 2) {
      start = totalPages - 4;
    }

    const visiblePages = pageNumbers.slice(start - 1, end);

    // Add ellipsis if necessary
    const pagesWithEllipsis = [];
    if (start > 1) {
      pagesWithEllipsis.push(1);
      if (start > 2) {
        pagesWithEllipsis.push("...");
      }
    }
    pagesWithEllipsis.push(...visiblePages);
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pagesWithEllipsis.push("...");
      }
      pagesWithEllipsis.push(totalPages);
    }

    return pagesWithEllipsis;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center -space-x-px h-10 text-base">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          >
            &lt;
          </button>
        </li>

        {/* Page Numbers */}
        {visiblePages.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                aria-label={`Page ${page}`}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  page === currentPage
                    ? "text-blue-600 border border-blue-300 bg-blue-50"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;