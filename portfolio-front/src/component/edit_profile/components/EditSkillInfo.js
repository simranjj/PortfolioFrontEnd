import React, { useState } from 'react';
import { updateUserApi } from "../../../api/user_api";
import { StatusCodes } from "http-status-codes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../../redux/actions";
import { addElementToArray } from '../../../util/UpdatePageUtil';

export default () => {

    const skills = useSelector(state => state.user.skills)
    const [frontEnd, setFrontEnd] = useState(skills.front_end);
    const [backEnd, setBackEnd] = useState(skills.back_end);
    const [database, setDatabase] = useState(skills.database);
    const id = useSelector(state => state.user._id)
    const tokenManager = useSelector(state => state.user.token_manager)
    const jwtToken = tokenManager[tokenManager.length - 1];
    const newFrontEndSkill = "", newBackEndSkill = "", newDatabaseSkill = "";
    const dispatch = useDispatch();

    const handleArrayChange = (event, array, index, hook) => {
        const value = event.target.value;
        hook(array.map((el, ind) => (ind === index) ? value : el))
    };

    const removeElement = (array, index, hook) => {
        hook(array.filter((el, ind) => ind !== index))
    }

    const handleFESubmit = (event) => {
        event.preventDefault();
        let skillDetails = { skills: { ...skills, front_end: frontEnd } }
        let userID = id;
        let token = jwtToken;
        updateUserApi(skillDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                dispatch(updateUserAction(
                    { skills: { ...response.data.data.skills, front_end: response.data.data.skills.front_end } }
                ));
            }
        }
        )
    }

    const handleBESubmit = (event) => {
        event.preventDefault();
        let skillDetails = { skills: { ...skills, back_end: backEnd } }
        let userID = id;
        let token = jwtToken;
        updateUserApi(skillDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                dispatch(updateUserAction(
                    { skills: { ...response.data.data.skills, back_end: response.data.data.skills.back_end } }
                ));
            }
        }
        )
    }

    const handleDBSubmit = (event) => {
        event.preventDefault();
        let skillDetails = { skills: { ...skills, database: database } }
        let userID = id;
        let token = jwtToken;
        updateUserApi(skillDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                dispatch(updateUserAction(
                    { skills: { ...response.data.data.skills, database: response.data.data.skills.database } }
                ));
            }
        }
        )
    }
    
    return (
        <div>
            <form onSubmit={handleFESubmit}>
                {frontEnd.map((fe, index) => (
                    <div key={index}>
                        <input name="front_end" value={fe} onChange={(e) => handleArrayChange(e, frontEnd, index, setFrontEnd)} />
                        <input type='button' value='remove' onClick={() => removeElement(frontEnd, index, setFrontEnd)} />
                    </div>
                ))
                }
                <input type='button' value='Add More' onClick={() => addElementToArray(frontEnd, newFrontEndSkill, setFrontEnd)} />
                <input type="submit" value="FrontEnd Skills Update" />
            </form>
            <form onSubmit={handleBESubmit}>
                {backEnd.map((be, index) => (
                    <div key={index}>
                        <input name="back_end" value={be} onChange={(e) => handleArrayChange(e, backEnd, index, setBackEnd)} />
                        <input type='button' value='remove' onClick={() => removeElement(backEnd, index, setBackEnd)} />
                    </div>
                ))}
                <input type='button' value='Add More' onClick={() => addElementToArray(backEnd, newBackEndSkill, setBackEnd)} />
                <input type="submit" value="BackEnd SkillsUpdate" />
            </form>
            <form onSubmit={handleDBSubmit}>
                {database.map((db, index) => (
                    <div key={index}>
                        <input name="database" value={db} onChange={(e) => handleArrayChange(e, database, index, setDatabase)} />
                        <input type='button' value='remove' onClick={() => removeElement(database, index, setDatabase)} />
                    </div>
                ))}
                <input type='button' value='Add More' onClick={() => addElementToArray(database, newDatabaseSkill, setDatabase)} />
                <input type="submit" value="Database Skill Update" />
            </form>
        </div>
    )
}
