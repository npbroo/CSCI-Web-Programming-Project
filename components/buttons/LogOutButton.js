import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { setGlobalState } from "../../state/global_states";

export const LogOutButton = () => {
    let router = useRouter()
    useEffect(() => {
        console.log(localStorage.getItem("logged_in"))
        if(localStorage.getItem("logged_in") == "false") {
            router.push("/user/login")
        }
    }, []);

    const logOut = () => {
        setGlobalState("logged_in", false)
        localStorage.setItem("logged_in", false)
        router.push("/")
    }

    return (
        <button onClick={logOut} className="flex odyssey-bg rounded w-20">
                <div className="m-auto">Log Out</div>
        </button>
    );

}