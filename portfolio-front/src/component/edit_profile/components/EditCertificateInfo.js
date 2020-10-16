import React, { useState } from 'react';
import { updateUserApi } from "../../../api/user_api";
import { StatusCodes } from "http-status-codes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../../redux/actions";
import { handleArrayChangeEvent, removeElementFromArray, addElementToArray } from '../../../util/UpdatePageUtil';

export default () => {

    const [certificates, setCertificates] = useState(useSelector(state => state.user.certificates));
    const id = useSelector(state => state.user._id)
    const tokenManager = useSelector(state => state.user.token_manager)
    const jwtToken = tokenManager[tokenManager.length - 1 ];
    const dispatch = useDispatch();
    const newCertificate = { name: "", description : "", expires_on : new Date().toISOString().split('T')[0] };

    const certificateView = () => {
        return certificates.map((cer,index) => (
            <div key={index}>
                <input name="name" value={cer.name} onChange={(e) => handleArrayChangeEvent(e,certificates,index,setCertificates)} />
                <input name="description" value={cer.description} onChange={(e) => handleArrayChangeEvent(e,certificates,index,setCertificates)} />
                <input name="expires_on" type="date" value={cer.expires_on.split('T')[0]} onChange={(e) => handleArrayChangeEvent(e,certificates,index,setCertificates)} />
               <input type='button' value='remove' onClick={() => removeElementFromArray(certificates,index,setCertificates)} />
           </div>
          ))
    }  

    const handleSubmitCertificates = (event) => {
        event.preventDefault();
        let certificatesDetails = { certificates : certificates };
        let userID = id;
        let token = jwtToken;
        updateUserApi(certificatesDetails, userID, token).then((response) => {
            if (response.status === StatusCodes.OK) {
                dispatch(updateUserAction({ certificates : response.data.data.certificates}));
            }
        }
        )
    }

    return (
        <div>
             <form onSubmit={handleSubmitCertificates}>
                         {certificateView()}
                         <input type='button' value='Add More' onClick={() => addElementToArray(certificates,newCertificate,setCertificates)}/>
                         <input type="submit" value="Update" />
                    </form>
        </div>
    )
}


