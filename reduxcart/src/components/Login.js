import React, {useState} from 'react';
import axios from 'axios';
import img from '../img/ib1pic.jpg';
import { useHistory, Link } from 'react-router-dom';

import auth from '../auth.js'
import userEvent from '@testing-library/user-event';

export default function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .get('http://localhost:8080/api/users')
            .then((response) => {
                console.log(response)
                let checkCredentials = response.data.some((user) => user.userName === name && user.password === password)
                
        //    make it - if (true || checkCredentials)-to work on your cart
                console.log(checkCredentials)
                if ( checkCredentials){
                    console.log('inside if in login')
                    auth.login(()=>{
                        
                        props.setUserInfo(name)
                        history.push('/home')
                    })
                }
                else{
                    alert('Invalid user name or password')
                }
            })

            .catch((error)=>console.log(error))
        }
    
 
    
    return (
        <div className = 'login'>
            <img className= 'bgimg' src = {img}/>

            <div class="content">

            <form className = 'logForm' onSubmit = {handleSubmit}>
                <h1>Login Here</h1>
                <input type = "text" placeholder='name'value={name}onChange = {(e) =>
                    setName(e.target.value)}/>
                    <br/>
                    
                <input type = "password" placeholder='password'value={password}onChange = {(e) =>
                    setPassword(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type= 'submit'/>
                <Link to = '/register'>Click Here To Register</Link>
            </form>
            </div>
        </div>
    )
   }