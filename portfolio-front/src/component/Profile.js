import React from 'react';
import { useSelector } from 'react-redux';
import {  Link } from "react-router-dom";

export default () => {

    const user = useSelector(state => state.user)
    return (
        <div>
             { <Link to="/editprofile">Edit Profile</Link> }
           { user.username }
        </div>
    )
}

