import React from 'react';

const About = () => {
    return (
        <div className='bg-base-200'>
            <div className='container px-4 py-28 mx-auto'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col gap-8 lg:flex-row">
                        <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="lg:max-w-sm w-full rounded-lg shadow-2xl" />
                        <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="lg:max-w-sm w-full rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-serif text-teal-900">About Us</h1>
                            <p className="py-6">
                                Welcome to Thaichefs, the ultimate destination for Thai food lovers! Our brand is dedicated to providing a one-of-a-kind culinary experience, featuring the most authentic Thai cuisine prepared by our master chefs. At Thaichefs, we believe that cooking is not just a skill, but an art, and we strive to inspire everyone to explore their creativity in the kitchen. <br /><br />

                                Our website is designed to cater to all your cooking needs. Whether you are a beginner or a seasoned chef, you can learn from our experts and enhance your culinary skills. Our master chefs have years of experience in cooking Thai food and can guide you step-by-step through each recipe. <br /><br />

                                At Thaichefs, we take pride in our community of passionate food lovers. We offer job opportunities to our students who complete any cooking course from us. Our goal is not just to teach you how to cook, but to help you build a successful career.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;