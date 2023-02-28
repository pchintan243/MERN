import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();

    // Promises
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        }).then((res) => {

            // first check type value after that payload value will be true to navbar
            // It means user can go navigate to login page
            dispatch({ type: "USER", payload: false });
            navigate('/login', { replace: true });

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    });

    return (
        <>
            Logout
        </>
    )
}

export default Logout