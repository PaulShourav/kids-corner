import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog-Kids Corner')
    return (
        <div className='my-container my-28'>
            <p className='text-lg'><span className='font-bold'>Q1:</span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p className='text-lg'><span className='font-bold'>Answer:</span><br />When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources. <br />As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>
            <p className='text-lg mt-5'><span className='font-bold'>Q2:</span>Compare SQL and NoSQL databases?</p>
            <p className='text-lg'><span className='font-bold'>Answer:</span></p>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>SQL</th>
                            <th>NO-SQl</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Stands for Structured Query Language</td>
                            <td>Stands for Not Only SQL</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Relational database management system (RDBMS)</td>
                            <td>Non-relational database management system</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Suitable for structured data with predefined schema</td>
                            <td>Suitable for unstructured and semi-structured data</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Data is stored in tables with columns and rows</td>
                            <td>Data is stored in collections or documents</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Follows ACID properties (Atomicity, Consistency, Isolation, Durability) for transaction management</td>
                            <td>Does not necessarily follow ACID properties</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Supports JOIN and complex queries</td>
                            <td>Does not support JOIN and complex queries</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className='text-lg mt-5'><span className='font-bold'>Q3:</span>What is express js? What is Nest JS ?</p>
            <p className='text-lg'><span className='font-bold'>Answer:</span><br />
                <span className='font-bold'>Express.js:</span> <br />Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. <br /><span className='font-bold'>Nest JS:</span> <br />Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
            <p className='text-lg mt-5'><span className='font-bold'>Q4:</span>What is MongoDB aggregate and how does it work ?</p>
            <p className='text-lg'><span className='font-bold'>Answer:</span>In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.
                <br />
                MongoDB provides three ways to perform aggregation <br />
                <ol>
                    <li>Aggregation pipeline</li>
                    <li>Map-reduce function</li>
                    <li>Single-purpose aggregation</li>
                </ol>
            </p>
        </div>
    );
};

export default Blog;