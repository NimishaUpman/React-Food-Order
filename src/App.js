import React, { useState } from "react";

import Header from "./Components/Header/Header";
import DisplayFoodItems from "./Components/ItemList/DisplayFoodItems";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const HideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <DisplayFoodItems />
      </main>
    </CartProvider>
  );
}

export default App;
