import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='container px-4 mx-auto py-16 text-white'>
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
                        <p>Follow us on our social media handles for the latest news, updates, recipes and the best deals for you!</p>
                        <div className='flex gap-4 mt-4'>
                            <Link><FaFacebookF /></Link>
                            <Link><FaTwitter /></Link>
                            <Link><FaInstagram /></Link>
                            <Link><FaPinterest /></Link>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <p>© Copyright: THAIChefs 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;