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
   autoLogin();
  }, []);

  const autoLogin = () => {
    // fixed for creator's profile
    let loginDetails = { username: DEDICATED_LOGIN_USERNAME, password: DEDICATED_LOGIN_PASSWORD };
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
    </div>
  );
};

export default DedicatedLogin;