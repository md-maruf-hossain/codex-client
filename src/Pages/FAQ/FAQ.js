import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What is cors?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser
                should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that
                the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">Why are you using firebase?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. You might also want to consider leveraging this tool if you eventually
                wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What other options do you have to implement authentication?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                There are other several options to implement authentication. They are:
                <li>Password Based Login</li>
                <li>Multi-Factor Authentication</li>
                <li>Biometric Authentication</li>
                <li>Certificate-based authentication</li>
                <li>Token-Based Authentication</li>
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">How does the private route work?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they
                cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case
                being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the
                application.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What is Node? How does Node work?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                <strong>Node:</strong> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking
                I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
                <br />
                <strong>How does it works:</strong> Node.js is the JavaScript runtime environment which is based on Google's V8 Engine i.e. with the help of Node.js we can run the JavaScript outside
                of the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
