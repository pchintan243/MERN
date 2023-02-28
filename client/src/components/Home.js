import React, { useEffect, useState } from 'react';

const Home = () => {

    const [userName, setUserName] = useState('');
    // To see if user is login or not
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            console.log(data);
            // To get the data
            setUserName(data.name);
            // If you will get the data means user was login so we show value changing to true
            setShow(true);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userHomePage();
    }, [])

    return (
        <>
            <div style={{ height: "85vh" }} className='d-flex flex-column justify-content-center align-items-center fw-bold h4'>
                <p className='m-0'>
                    WELCOME
                </p>
                <h1 style={{ fontSize: "5rem" }}>{userName}</h1>
                {/* User login then it shows different content */}
                <h2>{show ? 'We are the MERN developer' : 'Happy to see you that'}</h2>
            </div>
        </>
    )
}

export default Home