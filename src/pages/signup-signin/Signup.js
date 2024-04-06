import React, { useEffect, useState } from "react";
import { validateEmail, validateEmailStorage, validatePassword } from "./Verify";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import signupBackground1 from '../resources/images/signup-background1.jpg';
import './SignUp.css';

function SignUp() {
    //tracking sign up
    const [isSignedUp, setIsSignedUp] = useState(false);

    //for navigation
    const navigate = useNavigate();

    //State to store from values: username, email and password
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    //State to store error messages
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: ''
    })
    //handling the input changes
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    
    const handleClick = (event) => {

        //prevent default from submission behavior
        event.preventDefault();
        
        let isValid = true;
        //resetting error messages
        setErrors({emailError: '', passwordError: ''})

        //checking whether all fields are entered
        if(!values.name.trim() || !values.email.trim() || !values.password){
            isValid = false;
            alert("All fields are required!!")
        }

        //validating email
        if(!validateEmail(values.email)){
            isValid = false;
            setErrors(errors => ({...errors, emailError: "Please enter a valid email"}));
        }
        if(!validateEmailStorage(values.email)){
            isValid = false;
            setErrors(errors => ({...errors, emailError: "Email is already registered."}))
        }
        //validating password
        if(!validatePassword(values.password)){
            isValid = false;
            setErrors(errors => ({...errors, passwordError: "Password must be at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and symbols."}));
        }
        
        if(!isValid) return;

        //using bcrypt hash encode
        const hashPassword = bcrypt.hashSync(values.password, 10);


        //checking for existing users
        //if not create an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        
        //creating a new user
        const newUser = {...values, 
            password: hashPassword
        };

        //updating the users 
        const updatedUsers = [...existingUsers, newUser];

        //saving the updated user array in the local storage
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        //clear fields after submission
        setValues({name:'', email:'', password:''});

        //setting the active user
        localStorage.setItem('activeUser', JSON.stringify(newUser));

        setIsSignedUp(true);

        //setting a timer
        setTimeout( () => {
            navigate("/home")
        }, 5000);
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <h3 className="mb-3" style={{color:'red'}}>Sign Up</h3>
                    <h5 style={{fontStyle:"italic"}}>for new deals</h5>
                    <form>
                        <div className="form-group mb-1">
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
                        <div className="form-group mb-1">
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
                            {errors.emailError && <div className="text-danger">{errors.emailError}</div>}
                        </div>
                        <div className="form-group mb-1">
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
                            {errors.passwordError && <div className="text-danger">{errors.passwordError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm" onClick={handleClick}>Sign Up</button>
                        <button type="button" className="btn btn-link btn-sm" onClick={() => navigate("/signin")}>Already have an account? Sign in</button>
                    </form>
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-center">
                    <img src={signupBackground1} alt="Sign Up" className="img-fluid" style={{maxWidth:'300px', height: '300px'}}/>
                </div>
                {isSignedUp &&(
                    <div className="text-center">
                        <p>Signed Up successfully. Redirecting to Home page...</p>
                    </div>
                )}
            </div>
        </div>
    );

};

export default SignUp;


