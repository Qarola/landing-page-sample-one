import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-lg-start">
      <div className="py-4 text-center">
        <div className="text-center py-4 align-items-center">
          <p>Follow «CyanTechSolutions» on social media</p>
          <a
            href="#!"
            className="btn btn-primary m-1"
            role="button"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#!"
            className="btn btn-primary m-1"
            role="button"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#!"
            className="btn btn-primary m-1"
            role="button"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/mdbootstrap/mdb-ui-kit"
            className="btn btn-primary m-1"
            role="button"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright */}
        <div
          className="text-center p-3 bar"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-dark txt" href="#!">
             {" "}CyanTechSolutions.com
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
