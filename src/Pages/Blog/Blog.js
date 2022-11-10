import React from 'react';
import useTitle from '../../UseTitle/useTitle';

const Blog = () => {
    useTitle("Blogs")
    return (
        <div className='my-10 text-justify mx-7'>
            <div>
                <p className='font-bold text-xl mb-2'>Difference between SQL and NoSQL?</p>
                <ul className='list-disc ml-5'>
                    <li>
                        SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
                    </li>
                    <li>
                        Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
                    </li>
                    <li>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    </li>
                    <li>
                        SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
                    </li>
                    <li>
                        Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
                    </li>
                </ul>
            </div>
            <div className='my-5'>
                <p className='font-bold text-xl mb-2'>What is JWT, and how does it work?</p>
                <p className='ml-1'>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>

            </div>
            <div className='my-5'>
                <p className='font-bold text-xl mb-2'>What is the difference between javascript and NodeJS?
                </p>
                <p className='ml-1'>
                    <span className='font-bold'>Node JS : </span> is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                    <span className='font-bold'>Javascript : </span> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>

            </div>
            <div className='my-5'>
                <p className='font-bold text-xl mb-2'>How does NodeJS handle multiple requests at the same time?</p>
                <p className='ml-1'>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>

            </div>
        </div>
    );
};

export default Blog;