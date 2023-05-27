import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";


export const CartItem = (props) => {
  
  const { id, name, description, image_url, first_brewed } = props.data;

  const { cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id]
  
  return (
    <div className="cartItem">
      <br />
        <div className="image-container">
          <img src={image_url} />
        </div>
        <div className="card-content">
          <div className="Description">
            {description}
          </div>
          <p>
            {first_brewed}
          </p>
          <p>
            <b>{name}</b>
          </p>
          <p>
            <button>-</button>
            <span>  </span>
            <button className="addToCartButton">
              Items <b>{cartItemsAmount}</b>
            </button>
            <span>  </span>
            <button>+</button>
          </p>          
        </div>
    <br />
    </div>
  )
}
