import { createContext, useState, useEffect } from 'react';
import { fecthBeers } from '../utils/api';

async function getDefaultCart() {
  try {
    const data = await fecthBeers();
    const defaultJson = {};

    data.forEach(beer => {
      defaultJson[beer.id] = 0;
    });

    return defaultJson;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    getDefaultCart()
      .then(data => {
        setCartItems(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  // Test
  // console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {cartItems !== null ? props.children : null}
    </ShopContext.Provider>
  );
};