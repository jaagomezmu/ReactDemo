import "./shop.css"

export const Paginator = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      {totalItems > 0 && (
        <div className="extras">
          <span>Page: </span>
          {renderPageNumbers()}
        </div>
      )}
    </div>
  );
};
