import React, { useState } from "react";
import { createUserApi } from "../api/user_api";
import { Redirect } from "react-router-dom";
import { StatusCodes } from "http-status-codes";
import { initUserAction } from "../redux/actions";
import { useDispatch } from "react-redux";

export default () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [email, setEmail] = useState("");
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
    let signUpDetails = { username: userName, password: password , email : email };
    createUserApi(signUpDetails).then((response) => {
      if ( response.status === StatusCodes.OK ) {
         dispatch(initUserAction(signUpDetails));
         setIsSignedUp(true)
         return;
      }
      setIsSignedUp(false);
    });
  };

  return (
    <div>
      { isSignedUp ? <Redirect to="/" /> : null }
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Username:{" "}
          <input
            type="text"
            name="username"
            value={userName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {" "}
          Email ID:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password }
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
};
