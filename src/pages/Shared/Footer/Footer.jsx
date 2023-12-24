import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <div className="container grid grid-cols-1 lg:grid-cols-4 mx-auto lg:justify-items-center">
          <div>
            <h2 className=" text-2xl text-left text-[#1a1a1a] mb-5">
              About Us
            </h2>
            <p className="mb-4 text-left">
              Nulla tincidunt convallis bibendum. Sed estas, massa a molestie
              fac ilisis nisi purus vestibulum
            </p>
          </div>
          <div>
            <h4 className="text-2xl text-left text-[#1a1a1a] mb-5">
              Follow Us
            </h4>
            <div className=" flex flex-col text-left">
              <a className="link link-hover">Facebook</a>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">Instragram</a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl text-left text-[#1a1a1a] mb-5">
              Information
            </h4>
            <div className=" flex flex-col text-left">
              <a className="link link-hover">Podcast Support</a>
              <a className="link link-hover">Affiliate</a>
              <a className="link link-hover">CheckOut</a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl text-left text-[#1a1a1a] mb-5">
              Newsletter
            </h4>
            <div className="form-control w-80">
              <label className="label">
                <span className=" text-zinc-900">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn bg-[#1a1a1a] absolute top-0 right-0 rounded-l-none border-none text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
