import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Nori grape silver beet broccoli kombu beet"
          >
            1. What is Cors?
          </Link>
          <p className="max-w-xs mx-auto mb-2">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json. For security
            reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the
            same-origin policy. This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Well, the way they make shows is, they make one"
          >
            2(a). Why are you using firebase? What other options do you have to
            implement authentication? What other options do you have to
            implement authentication?
          </Link>
          <p className="max-w-xs mx-auto mb-2 ">
            It permits real-time database connection, because of this that a
            couple of users can see the modifications withinside the records
            whilst the records receives created or edited. Data transmission is
            treated with net sockets so that we do not must ship requests to get
            new records,Each feature works independently, and they work even
            better together. <br />
            The other options are:
            <ol>
              <li>1. Auth0</li>
              <li>2. MongoDB</li>
              <li>3. Passport</li>
              <li>4. Okta</li>
            </ol>
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            How does the private route work?
          </Link>
          <p className="max-w-xs mx-auto mb-2 ">
            The react private route component renders a route component if the
            user is logged in and in an authorised role for the route, if the
            user isn’t logged in they’re redirected to the /login page, if the
            user is logged in but aren’t in an authorised role they’re
            redirected to the home page.
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <Link
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            (4) What is Node? How does Node work?
          </Link>
          <p className="max-w-xs mx-auto mb-2 ">
            Node.js is a JavaScript runtime used to create scalable server-side
            and networking applications via virtual private servers. It offers
            non-blocking input/output (I/O) operations and is built on
            event-driven, asynchronous architecture to help developers create
            various projects efficiently and easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
