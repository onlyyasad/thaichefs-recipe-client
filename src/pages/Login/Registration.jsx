import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


// Functionality: User should enter their name, email, password and image url to register and after registration it will redirect users to the login page. Error displayed for the password length less than 6 characters and can't submit the form without name, email and password. Photo url is optional here.

const Registration = () => {
    const [error, setError] = useState("");

    const { createUser, updateUserData, logOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        setError("")
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        createUser(email, password)
            .then(result => {
                form.reset();
                const user = result.user;
                
                updateUserData(user, name, photo)
                    .then(() => { })
                    .catch(error => { console.log(error.message) })

                logOutUser();
                navigate("/login")
            })
            .catch(error => setError(error.message));
    }

    return (
        <div className="min-h-screen py-8 flex justify-center items-center bg-base-200">
            <div className="flex flex-col lg:w-[33%] gap-4">
                <div className="text-center w-full">
                    <h1 className="text-4xl mb-4 text-center text-teal-900 font-serif">Create an Account!</h1>
                </div>
                <div className="card rounded-none w-full bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Your Name" className="input input-bordered rounded-none" />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered rounded-none" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login</Link>
                            </label>
                        </div>

                        <div className="form-control gap-4 mt-6">
                            <button type='submit' className="font-serif text-center border border-teal-900  hover:bg-teal-900 hover:text-white py-2 px-4 duration-500 text-teal-950">Register</button>
                        </div>
                        {error && <label className="label">
                            <p className='label-text-alt text-red-600'>{error}</p>
                        </label>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;