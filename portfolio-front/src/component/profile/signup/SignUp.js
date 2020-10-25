import React, { useState } from "react";
import { createUserApi } from "../../../api/user_api";
import { Redirect, Link } from "react-router-dom";
import { StatusCodes } from "http-status-codes";
import { initUserAction } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import "./style.css";

export default () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [email, setEmail] = useState("");
  const [error, setError] = useState('');
  const dispatch = useDispatch();


  const handleChange = (event) => {
    event.target.name === "username"
      ? setUserName(event.target.value)
      : event.target.name === "email"
        ? setEmail(event.target.value)
        : setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let signUpDetails = { username: userName, password: password, email: email };
    createUserApi(signUpDetails).then((response) => {
      if (response.data.status === StatusCodes.OK) {
        dispatch(initUserAction(signUpDetails));
        setIsSignedUp(true);
        setError('');
        return;
      }
      else {
        setError(response.data.message.message);
      }
      setIsSignedUp(false);
    });
  };

  return (
    <div>
      { isSignedUp ? <Redirect to="/login" /> : null}
      <div id="signup" className=" d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 text-white ">Sign Up</h1>
        <form onSubmit={handleSubmit} className=" w-25">
          <div className="form-group ">
            <label className="text-white mt-3 lead">Username</label>
            <input type="text" className="form-control" placeholder="Enter Username"
              name="username" value={userName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="text-white  lead">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"
              name="email" value={email} onChange={handleChange} />

          </div>
          <div className="form-group">
            <label className="text-white lead">Password</label>
            <input type="password" className="form-control" placeholder="Password"
              name="password" value={password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success mt-3">Sign Up</button>
          {(error !== '') ? <span>{error}</span> : null}
          <div className="mt-4 text-center">
            {<Link to="/profile">Back to Profile</Link>}
            {<Link to="/login">Login</Link>}</div>
        </form>
      </div>
    </div>
  );
};
