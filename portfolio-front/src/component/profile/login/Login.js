import React, { useState } from "react";
import { getUserDataByLoginApi } from "../../../api/user_api";
import { useDispatch, useSelector } from "react-redux";
import { initUserAction } from "../../../redux/actions";
import { Redirect, Link } from "react-router-dom";
import { StatusCodes } from "http-status-codes";
import "./style.css";

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
      {isLogged ? <Redirect to="/editprofile" /> : null}
    
      <div id="login" className=" d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 text-white ">Login</h1>
        <form onSubmit={handleSubmit} className=" w-25">
          <div className="form-group ">
            <label className="text-white mt-3 lead">Username</label>
            <input  type="text" className="form-control" placeholder="Enter Username"
              name="username" value={userName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="text-white lead">Password</label>
            <input type="password" className="form-control" placeholder="Password"
              name="password" value={password} onChange={handleChange} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success mt-3 ">Submit</button>
          </div>
          <div className="mt-4 text-center"> 
          {<Link to="/profile">Back to Profile</Link>}</div>
        </form>
      </div>
    </div>
  );
};
