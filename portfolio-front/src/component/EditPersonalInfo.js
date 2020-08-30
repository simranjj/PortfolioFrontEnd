import React, { useState } from 'react';
import { updateUserApi } from "../api/user_api";
import { StatusCodes } from "http-status-codes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../redux/actions";

export default () => {

    const [name, setName] = useState(useSelector(state => state.user.name));
    const id = useSelector(state => state.user._id)
    const tokenManager = useSelector(state => state.user.token_manager)
    const jwtToken = tokenManager[tokenManager.length - 1 ];
    let date = useSelector(state => state.user.dob).split('T')[0]
    const [dob, setDob] = useState(date);
    const [description, setDescription] = useState(useSelector(state => state.user.description));
    const dispatch = useDispatch();

    const handleChangePersonal = (event) => {
        event.target.name === "name"
            ? setName(event.target.value)
            : event.target.name === "dob"
            ? setDob(event.target.value)
            : setDescription(event.target.value);
    };

    const handleSubmitPersonal = (event) => {
        event.preventDefault();
        let personalDetails = { name: name, dob: dob, description: description };
        let userID = id;
        let token = jwtToken;
        updateUserApi(personalDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                dispatch(updateUserAction(
                    { name:  response.data.data.name, dob:  response.data.data.dob, description:  response.data.data.description }
                ));
            }
        }
        )
    }

    return (
        <div>
            { console.log(name) }
            <form onSubmit={handleSubmitPersonal}>
                <label>Name: <input type="text" name="name" value={name} onChange={handleChangePersonal} /></label><br />
                <label>Description: <textarea type="text" name="description" value={description} onChange={handleChangePersonal} /></label><br />
                <label>Date of Birth: <input type="date" name="dob" value={dob} onChange={handleChangePersonal} /></label><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}
