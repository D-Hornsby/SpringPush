import React, {useState} from 'react';
import axios from 'axios';
import img from '../img/ib1pic.jpg';
import { useHistory, Link} from 'react-router-dom';
import auth from '../auth.js'


export default function Register(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (name && password && email){
            console.log('inside if in login')
            auth.login(()=>{
                props.setUserInfo(name)
                history.push('/home')
            })
            let user = {password, email, userName: name}
            axios
            .post('http://localhost:8080/api/users', user)
            .then((response) => console.log(response))
            .catch((error)=>console.log(error))
 
        } }

    
    return (
        <div className = 'register'>
            <img className= 'bgimg' src = {img}/>

            <div class="content">

            <form className = 'registerForm' onSubmit = {handleSubmit}>
                <h1>Register</h1>
                <input type = "text" placeholder='name'value={name}onChange = {(e) =>
                    setName(e.target.value)}/>
                    <br/>
                <input type = "password" placeholder='password'value={password}onChange = {(e) =>
                    setPassword(e.target.value)}/>
                    <br/>
                    <input type = "email" placeholder='email'value={email}onChange = {(e) =>
                    setEmail(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type= 'submit'/>
                    <Link to = '/'>Login</Link>
            </form>
            </div>
        </div>
    )
   }