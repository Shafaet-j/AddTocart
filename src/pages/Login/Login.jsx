import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import login from "../../assets/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { googleLogIn, logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (password.length < 6) {
      setError("your password must be 6 or longer");
    } else {
      setError("");
    }
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Google login
  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <div className="text-center lg:text-left">
            <img className=" max-h-[600px]" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border-2">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-black text-white hover:bg-black"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div>
                <h3 className=" divider">Or login with</h3>
                <button onClick={handleGoogle}>
                  <FaGoogle size={30} />
                </button>
                <p>
                  Need an account??{" "}
                  <button className=" btn-link">
                    <Link to="/signUp">SignUp</Link>
                  </button>
                  here
                </p>
                <p className=" text-error">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
