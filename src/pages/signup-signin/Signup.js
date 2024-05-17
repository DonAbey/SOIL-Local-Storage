import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
import { useForm } from "../../fragments/customHook/useForm";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import signupBackground1 from "../../assets/signup-background1.jpg";
import signupBackground2 from "../../assets/signup-background2.jpg";
import {
  validateEmail,
  validateEmailStorage,
  validatePassword,
} from "../../data/verify";

function SignUp(props) {
  useScrollToTop();
  const navigate = useNavigate();
  const [isSignedUp, setIsSignedUp] = useState(false);

  const current = new Date();
  const { values, errors, handleChange, setErrors, resetForm } = useForm(
    {
      name: "",
      email: "",
      password: "",
      dateJoined: "",
    },
    (name, value) => {
      let error = "";
      if (name === "email") {
        if (!validateEmail(value)) {
          error = "Please enter a valid email";
        } else if (!validateEmailStorage(value)) {
          error = "Email is already registered.";
        }
      } else if (name === "password" && !validatePassword(value)) {
        error =
          "Password must be at least 8 characters long and include a mix of uppercase letters, lowercase letters, numbers, and symbols.";
      }
      return error;
    }
  );

  const handleClick = (event) => {
    event.preventDefault();

    let isValid = true;
    setErrors({ emailError: "", passwordError: "" });

    if (!values.name.trim() || !values.email.trim() || !values.password) {
      isValid = false;
      alert("All fields are required!!");
    }

    if (!isValid) return;

    const hashPassword = bcrypt.hashSync(values.password, 10);

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    const newUser = { ...values, password: hashPassword, dateJoined: date };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    resetForm();
    localStorage.setItem("activeUser", JSON.stringify(newUser));
    setIsSignedUp(true);

    setTimeout(() => {
      props.loginUser(newUser.name);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-3" style={{ color: "red" }}>
            Sign Up
          </h3>
          <h5 style={{ fontStyle: "italic" }}>for new deals</h5>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                placeholder="Enter name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.emailError && (
                <div className="text-danger">{errors.emailError}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control form-control-sm"
                id="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.passwordError && (
                <div className="text-danger">{errors.passwordError}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              onClick={handleClick}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-link btn-sm"
              onClick={() => navigate("/login")}
            >
              Already have an account? Sign in
            </button>
          </form>
        </div>
        <Carousel
          className="img-fluid"
          style={{ maxWidth: "500px", height: "300px", marginBottom: "100px" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={signupBackground1}
              alt="First Slide"
            />
            <Carousel.Caption>
              <p>We handle with Care</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={signupBackground2}
              alt="Second Slide"
            />
            <Carousel.Caption>
              <p>Just order and wait for a while, we’ll be there at your door.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {isSignedUp && (
          <div className="text-center">
            <p>Signed Up successfully. Redirecting to Home page...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export { SignUp };
