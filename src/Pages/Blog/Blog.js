import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                Blog
              </a>
              <p className="text-gray-600">5 Jan 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">What is cors?</p>
              </a>
            </div>
            <p className="text-gray-700">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser
              should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the
              server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                Blog
              </a>
              <p className="text-gray-600">15 Sep 2021</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">Why are you using firebase?</p>
              </a>
            </div>
            <p className="text-gray-700">
              Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. You might also want to consider leveraging this tool if you eventually
              wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                Blog
              </a>
              <p className="text-gray-600">28 Dec 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl"> What other options do you have to implement authentication?</p>
              </a>
            </div>
            <p className="text-gray-700">
              {" "}
              There are other several options to implement authentication. They are:
              <li>Password Based Login</li>
              <li>Multi-Factor Authentication</li>
              <li>Biometric Authentication</li>
              <li>Certificate-based authentication</li>
              <li>Token-Based Authentication</li>
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                Blog
              </a>
              <p className="text-gray-600">20 Nov 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">How does the private route work?</p>
              </a>
            </div>
            <p className="text-gray-700">
              Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they
              cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case
              being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the
              application.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                Blog
              </a>
              <p className="text-gray-600">20 Jun 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">What is Node? How does Node work?</p>
              </a>
            </div>
            <p className="text-gray-700">
              <strong>Node:</strong> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking
              I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
              <br />
              <strong>How does it works:</strong> Node.js is the JavaScript runtime environment which is based on Google's V8 Engine i.e. with the help of Node.js we can run the JavaScript outside of
              the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
