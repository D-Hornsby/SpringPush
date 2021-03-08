import React from "react";
// import logobb from "./img/logobb.jpg";

//b import use gloval context
import { useGlobalContext } from '../context';

const Navbar = (props) => {
  //adding const use global context amount
  const { amount } = useGlobalContext()
  console.log(props)
  return (
    <nav>
      <div className="nav-center">

        {/* moving*/}
         <div className='navbar-logo' >
          <h3>{<i className="fa fa-leaf"></i>}PollyBaker</h3> 


        </div>
                    {/* <h3>useReducer</h3> */}

                <div className="nav-container">
                  
                  {/* this is the shopping bag icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                  </svg> 

                  
                  {/* this is the blue ball counter
                  @b adding amount  */}
                  <div className="amount-container"> 
                    <p className="total-amount">{amount}</p>
                 </div>

                  {/* for displaying user name in the nav bar when logged in */}
                  {/* get this to render correctly so you can use it */}
                  {/* <div className = 'User'>{props.user}</div> */}

                </div> 

      </div>
    </nav>
  );
};

export default Navbar;
