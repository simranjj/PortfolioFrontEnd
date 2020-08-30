import React, { useState } from 'react';
import { updateUserApi } from "../api/user_api";
import { StatusCodes } from "http-status-codes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../redux/actions";

export default () => {

    const [name, setName] = useState(useSelector(state => state.user.name));
    const [github, setGitHub] = useState(useSelector(state => state.user.github));
    const [linkedin, setLinkedin] = useState(useSelector(state => state.user.linkedin));
    const id = useSelector(state => state.user._id)
    const tokenManager = useSelector(state => state.user.token_manager)
    const jwtToken = tokenManager[tokenManager.length - 1];
    const [description, setDescription] = useState(useSelector(state => state.user.description));
    const dispatch = useDispatch();

    const handleChangePersonal = (event) => {
        const {name, value} = event.target;
        name === "name" ? setName(value)
        :name === "github" ? setGitHub(value)
        :name === "linkedin" ?  setLinkedin(value)
        : setDescription(value);
    };

    const handleSubmitPersonal = (event) => {
        event.preventDefault();
        let personalDetails = { name: name, description: description, github: github, linkedin : linkedin };
        let userID = id;
        let token = jwtToken;
        updateUserApi(personalDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                let data = response.data.data;
                dispatch(updateUserAction(
                    { name: data.name, description: data.description, github : data.github, linkedin : data.linkedin }
                ));
            }
        }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmitPersonal}>
                <label>Name: <input type="text" name="name" value={name} onChange={handleChangePersonal} /></label><br />
                <label>Description: <textarea type="text" name="description" value={description} onChange={handleChangePersonal} /></label><br />
                <label>GitHub: <input type="text" name="github" value={github} onChange={handleChangePersonal} /></label><br />
                <label>LinkedIn: <input type="text" name="linkedin" value={linkedin} onChange={handleChangePersonal} /></label><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}
