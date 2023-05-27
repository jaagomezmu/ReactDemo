import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const MyProduct = (props) => {
  
  const { id, name, description, image_url, first_brewed } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id]

  return (
    <article className="card">
      <div className="image-container">
        <img src={image_url} />
      </div>
      <div className="card-content">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <i>{first_brewed}</i>
        </p>
        <p>
          {description.substring(0, 10) + ' . . .'}
        </p>
        <button className="addToCartButton" onClick={ () => addToCart(id) }>
          Add to cart {cartItemsAmount > 0 && <> ({ cartItemsAmount })</>}
        </button>
      </div>

    </article>
  );
};

