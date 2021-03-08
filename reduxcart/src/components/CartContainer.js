//path 3:

import React from "react";
//6 importing cart item
import CartItem from "./CartItem";
//b adding the use global context
import { useGlobalContext } from '../context'

//1 cart container recieves cart porp here
//2 default paramaters set up with empty [] in case cart is not an array
//3 if statement dependancy, checking for the legenth if weard = empty array []
//4 if array is empty cart length ===0 then your bag is empty if not...
//b adding const use global context 
const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()

  if (cart.length === 0) {
    return (
      <section className="cart">
         {/* cart header  */}
        <header>
          <h2>your bag</h2>
          
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">

      {/* cart header container */}
      <header>
        <h2>your bag</h2>
      </header>

      {/* displays cart items container contents
      item img, item name, item price and remove with up an down and amount */}
      {/* b making articls a div */}
      <div>
        {/* 5 interating over cart prop, my array an for each item returning cart item
         import that item at 6 then 
         7. pass all properties we have in the object down to a item ...item */}
         
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

        {/* 8. #b back to #### cart item #########*/}

      {/* cart footer container with total and total amount*/}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        {/* clear button */}
        {/* b adding onclick and totaly above instead of 0.00 */}
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart 
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;