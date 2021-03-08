//4
//import img1 from '../img/cc2pic.jpg';
import React from 'react'
//1. from CartContainer #8  get cart items as props, img, title, price and amount
//then 1 by 1 display them

//b
import { useGlobalContext } from '../context'
//b adding id

//wrap in article
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext()
  console.log(img)
  return (

    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>

         {/* displays title of item */}
        <h4>{title}</h4>
            {/* displays price under name */}
        <h4 className='item-price'>${price}</h4>

            {/* all the buttons in a list that will display */}
            {/* remove button */}
            {/* b adding onclick remove */}
            <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>

      <div>
            {/* increase amount */}
            {/* b adding onclick to toggle amount */}
            <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
            {/* for increse literal button */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" /> 
          </svg> 
        </button>
        
            {/* amount of items shows here */}
        <p className='amount'>{amount}</p>

            {/* decrease amount */}
            {/* b adding onclick to toggle decrease */}
            <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
            {/* for decrese literal button */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>

      </div>
    
    </article>
  )
}

export default CartItem;
