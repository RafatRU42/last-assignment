import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10'>
            <div className="">
                <div className="container mx-auto rounded-lg shadow-lg light:bg-gray-900 p-6">
                   
                    <div className="mt-10">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">1.What are the different ways to manage a state in React application?</a>
                        <p className="mt-2">There are four main types of States I need to properly manage in my react app.such as:
                      <hr />  1. Local State
                       <hr /> 2. Global State
                       <hr /> 3. Server State 
                       <hr /> 4. URL State 
                        </p>
                    </div>

                </div>
                <div className="container mx-auto rounded-lg shadow-lg light:bg-gray-900 p-6">
                   
                    <div className="mt-10">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">2.How does prototypical inheritance work?</a>
                        <p className="mt-2">The prototypical inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object, we use object</p>
                    </div>

                </div>
                <div className="container mx-auto rounded-lg shadow-lg light:bg-gray-900 p-6">
                   
                    <div className="mt-10">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">3.What is a unit test? Why should we write unit test?</a>
                        <p className="mt-2">Unit testing is a type of software testing where individual units or components of a software are tested. We use unit testing to validate each unit of the software code performs as expected. Unit testing is done during the development of an application by the developers. Unit test isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module or object. </p>
                    </div>

                </div>
                <div className="container mx-auto rounded-lg shadow-lg light:bg-gray-900 p-6">
                   
                    <div className="mt-10">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">4.React vs Angular vs Vue.</a>
                        <p className="mt-2">A simple difference between these three is that React is a UI Library and Vue us progressive framework. However, angular is a full fraged front end framework. React is a faviorite framework of 40.14% developers, angular with 22.96% developers and Vue 18.97% developers.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;