import React, { useState, useEffect } from "react";
import { getUserDataByLoginApi } from "../../../api/user_api";
import { useDispatch } from "react-redux";
import { initUserAction } from "../../../redux/actions";
import { Redirect} from "react-router-dom";
import { StatusCodes } from "http-status-codes";
import { DEDICATED_LOGIN_PASSWORD, DEDICATED_LOGIN_USERNAME } from "../../../constants/config";


const DedicatedLogin = () => {
  
  const [isLogged, setisLogged] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
     // fixed for creator's profile
     let mounted =true;
    let loginDetails = { username: DEDICATED_LOGIN_USERNAME, password: DEDICATED_LOGIN_PASSWORD };
    getUserDataByLoginApi(loginDetails).then((response) => {
      if (response.status === StatusCodes.OK) {
        const user = response.data.data;
        dispatch(initUserAction(user));
        localStorage.setItem('user',JSON.stringify(user))
        if ( mounted )
        setisLogged(true);
        return;
      }
      if ( mounted )
      setisLogged(false);
    });
    return function cleanup() {
      mounted = false
  }
  });

  

  return (
    <div>
      {isLogged ? <Redirect to="/profile" /> : null}
    </div>
  );
};

export default DedicatedLogin;