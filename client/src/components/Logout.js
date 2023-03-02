import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();

    // Withour async await method
    // then and catch method
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        }).then((res) => {

            // First check type value after that payload value will be false to navbar
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