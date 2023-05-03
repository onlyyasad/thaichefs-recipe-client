import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='px-4 bg-gray-900'>
            <div className='container mx-auto py-16 text-white'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div>
                        <h2 className='font-serif text-2xl my-4'>Subscribe to Newsletter!</h2>
                        <p>Subscribe to our newsletter got get the latest recipe updates regularly!</p>
                        <div className="my-4">
                            <input type="email" placeholder="Your email address" className="input border-none rounded-none text-black" />
                            <button className="btn bg-black font-serif font-normal normal-case border-none rounded-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <h2 className='font-serif text-2xl my-4'>About Us</h2>
                            <ul>
                                <li><Link>Careers</Link> </li>
                                <li><Link>Affiliate</Link> </li>
                                <li><Link>Referral</Link> </li>
                                <li><Link>Program</Link> </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-serif text-2xl my-4'>Info</h2>
                            <ul>
                                <li><Link>Delivery</Link> </li>
                                <li><Link>Returns</Link> </li>
                                <li><Link>Reviews</Link> </li>
                                <li><Link>Help & FAQs</Link> </li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <h2 className='font-serif text-2xl my-4'>Follow Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequuntur asperiores blanditiis beatae</p>
                        <div className='flex gap-4 mt-4'>
                            <Link><FaFacebookF /></Link>
                            <Link><FaTwitter /></Link>
                            <Link><FaInstagram /></Link>
                            <Link><FaPinterest /></Link>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <p>© Copyright: All rights reserved THAIChef's 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;