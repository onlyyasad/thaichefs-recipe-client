import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

// Functionality: Users can login using their email and password. Users can also login using Google and Github sign in Sign in method. After successfully login users will be redirect to either home page or to the protected page if the redirect from that page before login. Error shown for the wrong password and wrong email input.

const Login = () => {
    const {loginUser, googleLogin, gitHubLogin} = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLoginWithEmailPassword = event =>{
        event.preventDefault();
        setError("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result => {
            form.reset();
            navigate(from, {replace: true});
            const loggedUser = result.user;
           
        })
        .catch(error => setError(error.message))
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error.message))
    }
    const handleGitHubLogin = () =>{
        gitHubLogin()
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className="min-h-screen py-8 flex justify-center items-center bg-base-200">
            <div className="flex flex-col lg:w-[33%] gap-4">
                <div className="text-center w-full">
                    <h1 className="text-4xl text-teal-900 mb-4 text-center font-serif">Login now!</h1>
                </div>
                <div className="card rounded-none  w-full  bg-base-100">
                    <form onSubmit={handleLoginWithEmailPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered rounded-none" />
                            <label className="label gap-3">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <Link to='/register' className="label-text-alt link link-hover">Don't have an Account? Register</Link>
                            </label>
                        </div>
                        {error && <label className="label">
                            <p className='label-text-alt text-red-600'>{error}</p>
                        </label>}
                        <div className="form-control gap-4 mt-6">
                            <button type='submit' className="font-serif text-center border border-teal-900  hover:bg-teal-900 hover:text-white py-2 px-4 duration-500 text-teal-950">Login</button>
                            <div className='flex flex-col gap-3 lg:gap-2 lg:flex-row justify-between'>
                                <button onClick={handleGoogleLogin} className="border px-2 py-2 font-semibold normal-case flex justify-center items-center gap-2"><FaGoogle /> Sign In with Google</button>
                                <button onClick={handleGitHubLogin} className="border px-2 py-2 font-semibold normal-case flex justify-center items-center gap-2"><FaGithub /> Sign In with GitHub</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;