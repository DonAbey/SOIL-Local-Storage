import React, { useState } from "react";
import { verifySignIn } from "../../data/verify";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../../fragments/customHook/useScrollToTop";
import { useForm } from "../../fragments/customHook/useForm";
import "./style.css";

function SignIn(props) {
  useScrollToTop();

  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(null);

  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleClick = (event) => {
    event.preventDefault();

    const verifiedUser = verifySignIn(values.email, values.password);

    if (verifiedUser) {
      localStorage.setItem("activeUser", JSON.stringify(verifiedUser));
      setIsSignedIn(true);
      setTimeout(() => {
        props.loginUser(verifiedUser.name);
        navigate("/");
      }, 1000);
    } else {
      setIsSignedIn(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="text-center mb-4 mt-5">
            <h2>Welcome back</h2>
          </div>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control my-3"
                placeholder="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button className="btn mb-3 btn-login" onClick={handleClick}>
                Sign In
              </button>
            </div>
            {isSignedIn && (
              <div className="text-center">
                <p>Logging In</p>
              </div>
            )}
            {isSignedIn === false && (
              <div className="text-center mt-3">
                <p>Invalid email or password</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;