import React, { useState } from 'react';
import { updateUserApi } from "../../../api/user_api";
import { StatusCodes } from "http-status-codes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../../redux/actions";
import { handleArrayChangeEvent, removeElementFromArray, addElementToArray } from '../../../util/UpdatePageUtil';

export default () => {

    const [projects, setProjects] = useState(useSelector(state => state.user.acedemic_project));
    const id = useSelector(state => state.user._id)
    const tokenManager = useSelector(state => state.user.token_manager)
    const jwtToken = tokenManager[tokenManager.length - 1 ];
    const dispatch = useDispatch();
    const newProject = { name: "", description : "" };

    const projectView = () => {
        return projects.map((proj,index) => (
            <div key={index}>
               <input  name="name" value={proj.name} onChange={(e) => handleArrayChangeEvent(e,projects,index,setProjects)} />
               <input name="description" value={proj.description} onChange={(e) => handleArrayChangeEvent(e,projects,index,setProjects)} />
               <input type='button' value='remove' onClick={() => removeElementFromArray(projects,index,setProjects)} />
           </div>
          ))
    }  

    const handleSubmitProject = (event) => {
        event.preventDefault();
        let projectDetails = { acedemic_project : projects };
        let userID = id;
        let token = jwtToken;
        updateUserApi(projectDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                let ap =  [...response.data.data.acedemic_project]
                dispatch(updateUserAction({ acedemic_project : ap}));
            }
        }
        )
    }

    return (
        <div>
             <form onSubmit={handleSubmitProject}>
                         {projectView()}
                         <input type='button' value='Add More' onClick={() => addElementToArray(projects,newProject,setProjects)}/>
                         <input type="submit" value="Update" />
                    </form>
        </div>
    )
}


