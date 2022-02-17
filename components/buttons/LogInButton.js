import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { setGlobalState } from "../../state/global_states";

export const LogInButton = () => {

    let router = useRouter()
    useEffect(() => {
        console.log(localStorage.getItem("logged_in"))
        if(localStorage.getItem("logged_in") == "true") {
            router.push("/user")
        } else {
            localStorage.setItem("logged_in", false)
        }
    }, []);

    const logIn = () => {
        setGlobalState("logged_in", true)
        localStorage.setItem("logged_in", true)
        router.push("/user")
    }

    return (
        <button onClick={logIn} className="flex odyssey-bg rounded w-20">
                <div className="m-auto">Log In</div>
        </button>
    );

}