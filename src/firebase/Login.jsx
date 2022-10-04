import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import './Login.css'

const Login = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    //const navigate = useNavigate()

    const { signIn } = UserAuth()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try{
            await signIn(email,password)
            window.open('https://drive.google.com/drive/folders/132h6tWTU6_wszQEvxY_oRbGjUTyVUkUX')

            //navigate('/redirect')
            //window.location.pathname = 'https://drive.google.com/drive/folders/132h6tWTU6_wszQEvxY_oRbGjUTyVUkUX'
        }catch (e){
            document.getElementById("error").innerHTML=e.message
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
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
    )
}
export default Login

