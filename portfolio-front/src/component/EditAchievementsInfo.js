import React, { useState } from 'react';
import { updateUserApi } from "../api/user_api";
import { StatusCodes } from "http-status-codes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../redux/actions";
import { handleArrayChangeEvent, removeElementFromArray, addElementToArray } from '../util/UpdatePageUtil';

export default () => {
 
    const [achievements, setAchievements] = useState(useSelector(state => state.user.achievements));
    const id = useSelector(state => state.user._id)
    const tokenManager = useSelector(state => state.user.token_manager)
    const jwtToken = tokenManager[tokenManager.length - 1 ];
    const dispatch = useDispatch();
    const newAchievement = { name: "", description: "", time: new Date().toISOString().split('T')[0] };

   

    const achievementView = () => {
        return achievements.map((ach, index) => (
            <div key={index}>
                <input name="name" value={ach.name} onChange={(e) => handleArrayChangeEvent(e, achievements, index, setAchievements)} />
                <input name="description" value={ach.description} onChange={(e) => handleArrayChangeEvent(e, achievements, index, setAchievements)} />
                <input name="time" type="date" value={ach.time.split('T')[0]} onChange={(e) => handleArrayChangeEvent(e, achievements, index, setAchievements)} />
                <input type='button' value='remove' onClick={() => removeElementFromArray(achievements, index, setAchievements)} />
            </div>
        ))

    }

    const handleSubmitAchievement = (event) => {
        event.preventDefault();
        let achievementDetails = { achievements: achievements };
        let userID = id;
        let token = jwtToken;
        updateUserApi(achievementDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                dispatch(updateUserAction({ achievements: response.data.data.achievements }));
            }
        }
        )

    }

    return (
        <div>
            <form onSubmit={handleSubmitAchievement}>
                {achievementView()}
                <input type='button' value='Add More' onClick={() => addElementToArray(achievements, newAchievement, setAchievements)} />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}


