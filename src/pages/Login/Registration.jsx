import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="min-h-screen py-8 flex justify-center items-center bg-base-200">
            <div className="flex flex-col w-[33%] gap-4">
                <div className="text-center w-full">
                    <h1 className="text-4xl mb-4 text-center font-bold">Create an Account!</h1>
                </div>
                <div className="card rounded-none  w-full  bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered rounded-none" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login</Link>
                            </label>
                        </div>
                        <div className="form-control gap-4 mt-6">
                            <button className="btn rounded-none normal-case">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;