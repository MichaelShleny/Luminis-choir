import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import './Login.css'
import { Link } from 'react-router-dom'
import Luminis from '../assets/Luminis Choir.png'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { signIn } = UserAuth()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try{
            await signIn(email,password)
            //window.open('https://drive.google.com/drive/folders/132h6tWTU6_wszQEvxY_oRbGjUTyVUkUX')
            window.location.assign('https://drive.google.com/drive/folders/132h6tWTU6_wszQEvxY_oRbGjUTyVUkUX')
            console.log("clicked")

            //navigate('/redirect')
            //window.location.pathname = 'https://drive.google.com/drive/folders/132h6tWTU6_wszQEvxY_oRbGjUTyVUkUX'
        }catch (e){
            document.getElementById("error").innerHTML=e.message
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <div>
        <nav section id="nav">
                <div className="nav__container">
                    <a className="logo__wrapper" href="/">
                        <img className="luminis" src={Luminis}></img>
                    </a>
                    <div className="nav__links--wrapper">
                        <ul className="nav__links">
                            <li className="nav__link">
                                <Link to="/" className="
                        link__hover-effect
                        nav__link--anchor">
                                    Home</Link></li>
                            <li className="nav__link">
                                <a href="luminischoir@gmail.com" className="
                        link__hover-effect
                        nav__link--anchor">
                                    Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        <div className="login__full">
            <section id = "login">
                    <div className="members__box">
                        <div className="members__wrapper">
                            <h8 className="members">Hello Members!</h8> 
                        </div>
                        <div className="members__para--wrapper">
                            <p className="members__para">Please Login under your email. 
                            The library is only to be viewed by the choir members</p>
                        </div>
                    </div>
                    <form className = "login__form" onSubmit={handleSubmit}>
                    <h8 className="login__heading">Login to your account</h8>
                        <div className="login__info">
                            <div className = "login__account">
                                <div className="email__bar">
                                    <label className = "address">Email Address</label>
                                    <input className = "address__bar" onChange={(e) => setEmail(e.target.value)} type='email' required/>
                                </div>
                            </div>
                            <div className="password__bar">
                                <label className = "address__pass">Password</label>
                                <input className = "address__bar--pass" onChange={(e) => setPassword(e.target.value)} type='password' required />     
                            </div>
                            <button className = "btn__signIn">Sign in</button>
                            <p id="error"></p>
                        </div>     
                    </form>
            </section>
        </div>
    </div>
    )
}
export default Login

