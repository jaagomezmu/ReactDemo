
export const ItemsPerPage = ({ onItemsPerPageChange }) => {
  const handleItemsPerPageChange = (e) => {
    const perPage = parseInt(e.target.value);
    onItemsPerPageChange(perPage);
  };

  return (
    <div>
      <label htmlFor="items-per-page-select">Items Per Page:</label>
      <select id="items-per-page-select" onChange={handleItemsPerPageChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};
