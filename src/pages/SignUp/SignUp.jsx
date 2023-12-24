import React, { useContext, useState } from "react";
import picture from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const imageUrl = form.photo.value;
    const password = form.password.value;

    console.log(name, email, password, imageUrl);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);

        // Send user data to your server
        fetch("https://task-addtocart-server.vercel.app/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            imageUrl,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setError("");
            form.reset();
            setSuccess("User created successfully");
            navigate("/");
          })
          .catch((error) => {
            console.error("Error storing user data:", error);
            setError("Error storing user data");
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <div className="text-center lg:text-left">
            <img className=" h-[600px]" src={picture} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border-2">
            <form onSubmit={handleSignUp}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="your photo ulr"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    required
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div>
                    <p className=" text-error">{error}</p>
                    <p className=" text-success">{success}</p>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-black text-white hover:bg-black">
                    SignUp
                  </button>
                </div>
                <div>
                  <p>
                    Already have an account??
                    <button className=" btn-link">
                      <Link to="/login">LogIn</Link>
                    </button>
                    here
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
