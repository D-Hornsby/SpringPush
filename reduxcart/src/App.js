//path a2: get the  those items 

//b1 setting up the store 
//b reducer function used to update store
//b stoers 2 arguments   
//b state(origional state) and action (update)

import React, {useEffect, useState} from "react";
//b
import {useGlobalContext} from './context';
//components
import Navbar from "./components/Navbar";
//items
import CartContainer from "./components/CartContainer";
import CartItem from "./components/CartItem";

import Login from "./components/Login";
import Register from "./components/Register";
import auth from "./auth";
//a1 for redux, get those items here and the 2 components. navbar and cartcontainer
import cartItems from "./data"

import axios from "axios"

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

//cart
              //redux moved to own folder
              //b1 setting up the store
              //need 3 things
              //creat store function from redux
              //a variable to hold the value
              //a reducer function

        //b1create store function from redux 
// (moving ) import {createStore} from "redux";
        //b2 set up variable with added reducer in ()
//const store = createStore(() => {}); didnt like this

function App() {
  const {loading} = useGlobalContext()
  const[userInfo, setUserInfo]= useState(false)

  useEffect(()=>{
    axios
      .get('http://localhost:8080/api/users')
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>console.log(error))
  },[])

    if(loading){
      return (
        <div className="loading">
          <h1>loading...</h1>
        </div>
      )
    }

    

//the components 
//navbar: just has title and cart items for now
//cartcontainer: as a prop pass in cart items
//prop name = cart
console.log(auth.isAuthenticated())

  return (
    <main>
      <Router>
        <Switch>

            <Route exact path = '/'>
              <Login setUserInfo = {setUserInfo}/>
            </Route>


            <Route  path = '/register'>
              <Register setUserInfo = {setUserInfo}/>
            </Route>
            
            {!auth.isAuthenticated() ? 
            <Redirect to = '/'/>
            :''}

            
            <Route path = '/home'> 
            <Navbar user = {userInfo} />
              <CartContainer cart={CartItem} />
            </Route>

      </Switch>
      </Router>
    </main>
  );
}

export default App;


//could set up a state value here with components
//but for now passed down as a prop
