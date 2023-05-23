import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className='container my-20'>
            {/* blog 1 */}
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl pb-10 my-10">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl my-3">What is an access token and refresh token?</h2>
                    <p><strong>Refresh token: </strong>A refresh token is commonly used in authentication systems to obtain a new access token without requiring the user to re-enter their login credentials.</p>
                    <p><strong>Access token: </strong>The access token is typically short-lived and expires after a certain period of time.</p>

                </div>
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">How do they work and where should we store them on the client-side?</h2>
                    <p><strong></strong>When the access token expires, the refresh token can be used to obtain a new access token from the authentication server, as long as the refresh token is still valid and has the necessary permissions. This allows the user to continue accessing confidential resources without the need for repeated login prompts.
                    </p>

                </div>
            </div>
            {/* blog 2 */}
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl pb-10 my-10">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl my-3">Compare SQL and NoSQL databases?</h2>
                    <p>
                        SQL databases are typically vertically scalable, which means they can be scaled up by increasing the resources such as CPU, memory, or storage of a single server. NoSQL databases, on the other hand, are designed to be horizontally scalable, allowing for scaling out across multiple servers by distributing the data.
                        SQL databases are indeed table-based, following a structured schema, whereas NoSQL databases come in various forms such as document stores like MongoDB, key-value stores like Redis, graph databases like Neo4j, or wide-column stores like Cassandra.In terms of transaction handling, SQL databases excel at multi-row transactions, ensuring consistency and ACID Atomicity, Consistency, Isolation, Durability properties. NoSQL databases, being more flexible and accommodating unstructured or semi-structured data, are generally better suited for handling documents, JSON, or other unstructured data formats. However, it's important to note that some NoSQL databases do provide limited transactional capabilities, but they may not provide the same level of transactional integrity as SQL databases.
                    </p>
                </div>

            </div>
            {/* blog 3 */}
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl pb-10 my-10">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl my-3">What is express js?</h2>
                    <p>
                        <strong>Express.js:</strong> commonly referred to as Express, is a popular back-end web application framework used for building RESTful APIs and web applications with Node.js. It is released as free and open-source software under the MIT License, allowing developers to use and modify it freely.Express is specifically designed for building web applications and APIs and provides a simple and flexible interface to handle HTTP requests and responses. It offers various features and middleware that facilitate routing, handling requests and responses, managing sessions, and more.Express has gained significant popularity and is widely regarded as the de facto standard server framework for Node.js. Its simplicity, versatility, and extensive ecosystem of middleware and extensions make it a preferred choice for many developers when building back-end applications with Node.js.
                    </p>
                    <h2 className="text-center font-semibold text-xl my-2">What is Nest JS?</h2>
                    <p>
                        <strong>Nest.js:</strong> is indeed one of the fastest-growing frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It provides a solid foundation for developing server-side applications and follows the architectural principles of modularity, reusability, and dependency injection.
                        Nest.js is known for its focus on producing highly testable, maintainable, and scalable applications. It encourages the use of modern JavaScript and TypeScript, allowing developers to leverage the benefits of static typing, decorators, and other advanced language features. The use of TypeScript enables better code organization, tooling support, and improved developer productivity.
                        With its modular architecture and dependency injection system, Nest.js promotes the separation of concerns and facilitates the creation of loosely coupled and reusable components. It provides built-in support for features like routing, middleware, authentication, validation, and more, making it easier to develop robust and feature-rich backend applications.
                        Due to its popularity, active community, and developer-friendly features, Nest.js has gained traction among developers for building server-side applications with Node.js.
                    </p>
                </div>
            </div>
            {/* blog 4 */}
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl pb-10 my-10">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl my-3">MongoDB aggregate and how does it work?</h2>
                    <p>
                        <strong>MongoDB Aggregation:</strong> framework allows we to perform advanced data processing operations on a collection of documents. It provides a powerful set of tools to filter, transform, group, and analyze data in a flexible and efficient manner.The Aggregation framework operates on a concept called a pipeline. A pipeline consists of multiple stages, and each stage performs a specific operation on the documents that pass through it. These stages can be used to filter out documents, sort them, group them, reshape them, perform mathematical calculations, and more.Each stage in the pipeline takes the output of the previous stage and processes it further. The output of one stage serves as the input for the next stage in the pipeline. This allows we to perform complex data transformations by chaining multiple stages together. the Aggregation framework in MongoDB is a versatile tool for performing advanced data analysis, reporting, and computation on our collections. It allows we to process large volumes of data in a flexible and efficient manner, enabling we to derive meaningful insights from our MongoDB data.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;