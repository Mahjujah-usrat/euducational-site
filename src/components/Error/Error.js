import React from "react";
import Footer from "../footer/Footer";
import SetMenu from "../SetMenu/SetMenu";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-bg">
      <SetMenu></SetMenu>
      <h1 className="text-danger mt-5">Not found error 404 !!!</h1>
    </div>
  );
};

export default Error;
