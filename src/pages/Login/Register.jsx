import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts/AuthProvider";
import toast from "react-hot-toast";
const notify = (msg) => toast(msg);
const Register = () => {
  const {
    google,
    createUserByEmail,
    updateProfileUser,
    sendVerificationEmail,
    gitHub,
  } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/register";
  const singInGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    google(googleProvider)
      .then((result) => {
        const user = result.user;
        notify("Login successfully");

        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const singInGithub = () => {
    const provider = new GithubAuthProvider();
    gitHub(provider)
      .then((result) => {
        const user = result.user;
        notify("Login successfully");

        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleCreateUserByEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.surename.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password);
    createUserByEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateProfileUser(name, photo);
        sendVerificationEmail();
        form.reset();
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleUpdateProfileUser = (name, photo) => {
    const info = {
      displayName: name,
      photoURL: photo,
    };
    updateProfileUser(info)
      .then(() => {
        console.log("update successfully");
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleCreateUserByEmail}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="sure name"
                    name="surename"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo url"
                    name="photo"
                    className="input input-bordered"
                  />
                </div>
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
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover text-[#5A20CB]"
                    >
                      Already have an account?
                    </Link>
                  </label>
                  <span className="text-red-800">{error}</span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#5A20CB]">Register</button>
                </div>
                <div className="md:w-1/2">
                  <div className="mt-3 flex justify-between items-center">
                    <div className="form-control ">
                      <button
                        className="border flex items-center p-2 md:px-10 rounded-lg"
                        onClick={singInGoogle}
                      >
                        <span>Sing In Google</span>
                        <FaGoogle className="ml-2"></FaGoogle>
                      </button>
                    </div>
                    <div className="form-control ">
                      <button
                        className="border flex items-center p-2 md:px-10 rounded-lg"
                        onClick={singInGithub}
                      >
                        <span>Sing In Github</span>
                        <FaGithub className="ml-2"></FaGithub>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
