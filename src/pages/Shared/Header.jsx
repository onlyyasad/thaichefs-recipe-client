import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from '../../utility/ActiveLink';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    console.log(user?.photoURL)

    if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost rounded-none lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu gap-4 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52">
                        <p className=''><ActiveLink to='/'>Home</ActiveLink></p>
                        <p className=''><ActiveLink to='/about'>About Us</ActiveLink></p>
                        <p className=''><ActiveLink to='/blog'>Blog</ActiveLink></p>
                    </div>
                </div>
                <a className="text-black text-xl">THAI<span className='text-red-600 font-serif text-3xl font-bold'>Chef's</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal gap-4 px-1">
                    <p className=''><ActiveLink to='/'>Home</ActiveLink></p>
                    <p className=''><ActiveLink to='/about'>About Us</ActiveLink></p>
                    <p className=''><ActiveLink to='/blog'>Blog</ActiveLink></p>
                </div>
            </div>
            <div className="navbar-end gap-2">
                {user ? <>

                    <div className='bg-gray-100 rounded-full p-1 '>
                        {user.photoURL ? <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" title={user?.displayName} /> : <FaUser className='w-12 h-12 rounded-full' title={user?.displayName} />}
                    </div>
                    <button onClick={() => logOutUser()} className="btn rounded-none px-6 normal-case">Logout</button>
                </> :
                    <Link to='/login' className="btn rounded-none px-6 normal-case">Login</Link>}
            </div>
        </div>
    );
};

export default Header;