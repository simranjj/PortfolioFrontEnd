import React, { useState } from "react";
import { getUserDataByLoginApi } from "../api/user_api";
import { useDispatch, useSelector } from "react-redux";
import { initUserAction } from "../redux/actions";
import { Redirect, Link } from "react-router-dom";
import { StatusCodes } from "http-status-codes";

export default () => {
  
  const [userName, setUserName] = useState(useSelector((state) => state.user.username) || "");
  const [password, setPassword] = useState("");
  const [isLogged, setisLogged] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.target.name === "username"
      ? setUserName(event.target.value)
      : setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let loginDetails = { username: userName, password: password };
    getUserDataByLoginApi(loginDetails).then((response) => {
      if (response.status === StatusCodes.OK) {
        const user = response.data.data;
        dispatch(initUserAction(user));
        setisLogged(true);
        return;
      }
      setisLogged(false);
    });
  };

  return (
    <div>
      {isLogged ? <Redirect to="/profile" /> : null}
      {<Link to="/signup">SignUp</Link>}
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
            Username:{" "}
          <input type="text" name="username" value={userName} onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {" "}
            Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
