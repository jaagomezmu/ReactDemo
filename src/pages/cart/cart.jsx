import { ShopContext } from "../../context/shop-context";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "./cart-item";
import { fecthBeers } from "../../utils/api";
import "./cart.css";

export const Cart = () => {

  const { cartItems } = useContext(ShopContext);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fecthBeers();

        setProducts(data);
      } catch (error) {
        console.error('Error fetching beers: ', error);
      }
    };
    fetchData()
  }, []);

  return (
    <div className="cart">
      <h1>Items</h1>
      <section className="section">
        {products.map( (product) => {
          if (cartItems[product.id]  !== 0) {
            return <CartItem  key={product.id}  data={product}/>;
          }
        })}
      </section>
    </div>
  )
}