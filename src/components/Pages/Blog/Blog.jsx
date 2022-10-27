import React from "react";

const Blog = () => {
  return (
    <div className="flex justify-around items-center flex-wrap my-20">
      <div className="card w-96  mt-5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            Firebase provides tools to grow your app and business, for startups
            & global enterprises. Get your app up and running quickly & securely
            with fully managed backend infrastructure. Monitor App Performance.
            Trusted by +200,000 Devs. Build Extraordinary Apps.
          </p>
        </div>
      </div>

      <div className="card w-96  mt-5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">what is cors?</h2>
          <p>
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain. It extends and adds flexibility to the same-origin policy
            (SOP). However, it also provides potential for cross-domain attacks,
            if a website's CORS policy is poorly configured and implemented.
            CORS is not a protection against cross-origin attacks such as
          </p>
        </div>
      </div>

      <div className="card w-96  mt-5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">How does the private route work?</h2>
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
      </div>

      <div className="card w-96  mt-5 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">What is Node? How does Node work?</h2>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
