import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd'

// Restricts access to certain users
// Also hides page content 
export const RestrictAccess = (props) => {
    let router = useRouter()
    const [visible, setVisible] = useState(false);

    //If user is not logged in, send them to the login page
    useEffect(() => {
        if(localStorage.getItem("logged_in") == "false") {
            router.push("/user/login")
        } else {
            setVisible(true)
        }
    }, []);

    return (
        <div>
        {visible
        ?
        <>
        {props.children}
        </>
        :
        <div className="w-screen h-96 mt-32 my-auto text-center">
                <Spin color="black" size="large" tip="Loading..."/>
        </div>
        }
        </div>
    );

}