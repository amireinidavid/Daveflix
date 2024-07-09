import React from "react";
import Breadcrum from "../components/Breadcrum";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <Breadcrum title="Sign Up" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card mb-5">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name=" Name"
                      placeholder="First-Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="Mobile"
                      placeholder="Mobile Number"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="Create Password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex  align-items-center justify-content-center gap-20">
                      <button className="button border-0">
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
