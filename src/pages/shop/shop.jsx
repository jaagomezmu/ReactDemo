import { useEffect, useState } from "react";
import { fecthBeers } from "../../utils/api";
import { MyProduct } from './myProduct';
import './shop.css'
import { Paginator } from "./paginator";
import { ItemsPerPage } from "./items-per-page";
import { useLocation, useNavigate } from 'react-router-dom';

export const Shop = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortOptionFromUrl = queryParams.get('sort');
  const itemsPerPageFromUrl = Number(queryParams.get('itemsPerPage'));
  const pageFromUrl = Number(queryParams.get('page'));
  
  const [ products, setProducts ] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageFromUrl || 5);
  const [currentPage, setCurrentPage] = useState(pageFromUrl || 1);
  const [sortOption, setSortOption] = useState(sortOptionFromUrl || " ");
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  // Función auxiliar para convertir el formato de fecha de "MM/YYYY" a objeto Date
  const parseDate = (dateString) => {
    const [month, year] = dateString.split("/");
    return new Date(parseInt(year), parseInt(month) - 1);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleItemsPerPageChange = (perPage) => {
    setCurrentPage(1);
    setItemsPerPage(perPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fecthBeers();

        if (sortOption === "name") {
          data.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "first_brewed") {
          data.sort((a, b) =>
            parseDate(a.first_brewed).getTime() - parseDate(b.first_brewed).getTime()
          );
        } else if (sortOption === " "){  }

        setProducts(data);
      } catch (error) {
        console.error('Error fetching beers: ', error);
      }
    };

    fetchData()

  }, [sortOption]);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.set('sort', sortOption);
    queryParams.set('itemsPerPage', itemsPerPage.toString());
    queryParams.set('page', currentPage.toString());
    navigate({ search: queryParams.toString() });
  }, [sortOption, itemsPerPage, currentPage, navigate]);


  return (
    <div className="Shop">
      <div className="ShopTitle">
        <h1>React Project</h1>
      </div>

      <div className="extras">
        <ItemsPerPage onItemsPerPageChange={handleItemsPerPageChange}/>
        <div className="sort-button">
          <label>Sort</label>
          <select value={sortOption} onChange={handleSortOptionChange}>
            <option value="name">Name</option>
            <option value="first_brewed">First brewed</option>
          </select>
        </div>
      </div>

      <section className="card-grid">
        {paginatedProducts.map((product) => (
          <MyProduct key={product.id} data={product} />
        ))}
      </section>

      <Paginator
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        onPageChange={handlePageChange}
      />

    </div>
  )
};
