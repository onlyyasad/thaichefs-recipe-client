import React from 'react';
import faqs from '../../assets/faqs.svg'

const Blog = () => {
    return (
        <div className='bg-orange-50'>
            <div className='container py-16 lg:py-28 mx-auto '>
                <h4 className='font-serif text-3xl mb-8 text-center text-teal-950'>Frequently Asked Questions: FAQs</h4>
                <div className='px-4 flex flex-col lg:flex-row-reverse gap-4'>
                    <div className='lg:w-1/2 mb-8 lg:mb-0 flex justify-center'>
                        <img className='h-80' src={faqs} alt="" />
                    </div>
                    <div className='lg:w-1/2 flex flex-col gap-4'>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                            <div className="collapse-title text-xl font-medium">
                                1. Tell us the differences between uncontrolled and controlled components.
                            </div>
                            <div className="collapse-content">
                                <p>In React, uncontrolled components manage their own state and are easier to use but can be limited in functionality. Controlled components have their state managed by a parent component, providing more control but requiring more code. Which one to use depends on the specific needs of the application and the developer's preferences.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                            <div className="collapse-title text-xl font-medium">
                                2. How to validate React props using PropTypes
                            </div>
                            <div className="collapse-content">
                                <p>React's `PropTypes` library can be used to validate the types of props that are passed to a component. It helps ensure that the data being passed to the component is of the expected type and shape, reducing the likelihood of bugs and errors. `PropTypes` can validate types like `string`, `number`, `bool`, `array`, and `object`, among others. However, it should not be used for runtime validation or error handling, as it is only intended to provide warnings during development.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                            <div className="collapse-title text-xl font-medium">
                                3. Tell us the difference between nodejs and express js.
                            </div>
                            <div className="collapse-content">
                                <p>Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js. Node.js provides features for building scalable applications, and Express.js provides a range of features and APIs for building web applications, such as routing and middleware.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 ">
                            <div className="collapse-title text-xl font-medium">
                                4. What is a custom hook, and why will you create a custom hook?
                            </div>
                            <div className="collapse-content">
                                <p>A custom hook in React is a JavaScript function that starts with "use" and allows developers to extract reusable logic from components. Custom hooks can be created to handle complex logic such as state management or fetching data from an API. Developers create custom hooks to reduce code duplication, improve code organization, and improve code readability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;