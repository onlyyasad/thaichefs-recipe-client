import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="flex flex-col w-[33%] gap-4">
                <div className="text-center w-full">
                    <h1 className="text-4xl mb-4 text-center font-bold">Login now!</h1>
                </div>
                <div className="card rounded-none  w-full  bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered rounded-none" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <Link to='/register' className="label-text-alt link link-hover">Don't have an Account? Register</Link>
                            </label>
                        </div>
                        <div className="form-control gap-4 mt-6">
                            <button className="btn rounded-none normal-case">Login</button>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <button className="border px-2 py-2 font-semibold normal-case flex justify-center items-center gap-2"><FaGoogle/> Sign In with Google</button>
                                <button className="border px-2 py-2 font-semibold normal-case flex justify-center items-center gap-2"><FaGithub /> Sign In with GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;