import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import coal from "../assets/images/coal.jpg";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav></nav>
      <div className="container page">
        <div className="info">
          <h1>
            Permeability <span>prediction </span>
          </h1>
          <p>
            Use your drilling data and logging data to quickly predict rock
            permeability.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={coal} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
