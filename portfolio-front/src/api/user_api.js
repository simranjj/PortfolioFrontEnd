import axios from "axios";
import StatusCodes from "http-status-codes";

const { PORTFOLIO_SERVER99 } = require("../constants/config");

/**
 *
 * @param  {Object} data payload
 */

export const getUserDataByLoginApi = async (payload) => {
  const response = await axios({
    method: "POST",
    url: `${PORTFOLIO_SERVER99}/authenticate`,
    data: payload,
  });

  if (response.status === StatusCodes.OK) {
    return response;
  }
};

export const createUserApi = async (payload) => {
    const response = await axios({
      method: "POST",
      url: `${PORTFOLIO_SERVER99}/register`,
      data: payload,
    });
  
    if (response.status === StatusCodes.OK) {
      return response;
    }
  };

  export const updateUserApi = async (payload,param, token) => {
    const response = await axios({
      method: "PUT",
      url: `${PORTFOLIO_SERVER99}/${param}`,
      data: payload,
      headers : {
          'Authorization' : token
      }
    });
  
    if (response.status === StatusCodes.OK) {
      return response;
    }
  };
