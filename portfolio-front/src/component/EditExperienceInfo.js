import React, { useState } from 'react';
import { updateUserApi } from "../api/user_api";
import { StatusCodes } from "http-status-codes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../redux/actions";
import { handleArrayChangeEvent, removeElementFromArray, addElementToArray } from '../util/UpdatePageUtil';

export default () => {

    const [experience, setExperience] = useState(useSelector(state => state.user.professional_experience));
    const id = useSelector(state => state.user._id)
    const tokenManager = useSelector(state => state.user.token_manager)
    const jwtToken = tokenManager[tokenManager.length - 1 ];
    const dispatch = useDispatch();
    const newExperience = { company_name: "", description: "", time_period : "" };

    const experienceView = () => {
        return experience.map((exp,index) => (
            <div key={index}>
                <input name="company_name" value={exp.company_name} onChange={(e) => handleArrayChangeEvent(e,experience,index,setExperience)} />
               <input name="description" value={exp.description} onChange={(e) => handleArrayChangeEvent(e,experience,index,setExperience)} />
               <input  name="time_period" value={exp.time_period} onChange={(e) => handleArrayChangeEvent(e,experience,index,setExperience)} />
               <input type='button' value='remove' onClick={() => removeElementFromArray(experience,index,setExperience)} />
           </div>
          ))

    }  

    const handleSubmitExpirence = (event) => {
        event.preventDefault();
        let experienceDetails = { professional_experience : experience };
        let userID = id;
        let token = jwtToken;
        updateUserApi(experienceDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                dispatch(updateUserAction({ professional_experience : response.data.data.professional_experience}));
            }
        }
        )

    }

    return (
        <div>
             <form onSubmit={handleSubmitExpirence}>
                         {experienceView()}
                         <input type='button' value='Add More' onClick={() => addElementToArray(experience,newExperience,setExperience)}/>
                         <input type="submit" value="Update" />
                    </form>
        </div>
    )
}


