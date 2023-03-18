import React, { useRef, useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPasswordRef = useRef();
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);
  

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;

    if (!login) {
      if (password !== inputConfirmPasswordRef.current.value) {
        return alert("Password and Confirm passsword are not same");
      }
    }
    let url = "";
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZnqHwYDKWIazKAZlYNcW3CnY3LV1aWAU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZnqHwYDKWIazKAZlYNcW3CnY3LV1aWAU";
    }

    console.log(email, password);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: inputEmailRef.current.value,
          password: inputPasswordRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("idToken", JSON.stringify(data));
        setLogin(true);
        inputEmailRef.current.value = "";
        inputPasswordRef.current.value = "";
        if (!login) {
          inputConfirmPasswordRef.current.value = "";
          alert("SignUp Successful");
          navigate("/login");
        } else {
          alert("Login Successful");
          navigate("/home");
        }
        
      } else {
        const data = await res.json();
        throw data.error;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const accountHandler = () => {
    setLogin((prev) => !prev);
  };

  const forgotPasswordHandler = () => {
    navigate ('/forgetPassword')
  }
  return (
    <div className="wrapper">
      <form onSubmit={submitHandler} className="form">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" ref={inputEmailRef} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={inputPasswordRef} required />

        {!login && (
          <>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              ref={inputConfirmPasswordRef}
              required
            />{" "}
          </>
        )}
        {login && <button onClick={forgotPasswordHandler} href="#">Forgot Password</button>}
        <button type="submit">{login ? "Login" : "Sign Up"}</button>
        <div className="signup-login" onClick={accountHandler}>
          {login ? "Click here to Sign Up" : "Click here to Login"}
        </div>
      </form>
    </div>
  );
};

export default Signup;