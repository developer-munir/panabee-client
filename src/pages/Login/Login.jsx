import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts/AuthProvider";
import toast from "react-hot-toast";
const notify = (msg) => toast(msg);
const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/login";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        notify("Login Successfully");
        if (user?.emailVerified === true) {
          navigate(from, { replace: true });
        }
      })
      .then((error) => {
        notify(error);
        setError(error?.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">LogIn now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <div className="md:w-1/2">
                    <label className="flex justify-between items-center mt-2">
                      <span className="border p-2 md:px-10 rounded-lg cursor-pointer">
                        Forgot password?
                      </span>
                      ||
                      <span className="border p-2 md:px-10 rounded-lg cursor-pointer">
                        <Link to="/register">Create Account?</Link>
                      </span>
                    </label>
                  </div>
                  <span>{error}</span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">LogIn</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
