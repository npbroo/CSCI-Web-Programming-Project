import { useRouter } from 'next/router'
import { useState } from 'react';
import { setGlobalState } from "../state/global_states";

export const LoginForm = () => {
    let router = useRouter()

    //these are states which hold your input
    //ex: 'userInput' is the variable which holds your input and 'setUserInput' is the function that changes this variable
    const [user, setUser] = useState(''); // '' is the initial state value
    const [pass, setPass] = useState(''); // '' is the initial state value

    //this function is called when submitting the form
    async function onSubmit(e) {
        e.preventDefault()

        //call database here
        const res = await fetch('/api/try-login', {
            method: 'POST',
            body: JSON.stringify({ user: user, pass: pass }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        console.log(data)

        //alert("success")

        if (data["success"]) {
            setGlobalState("logged_in", true)
            localStorage.setItem("logged_in", true)
            router.push("/user")
        } else {
            alert("cannot login. Wrong username or password.")
        }
    

}

//render the form page
return (
    <div className="mt-5 mx-5">
        <h1>Register new account:</h1>
        <form onSubmit={onSubmit}>
            <label >Username: </label>
            <input className="border" type="text" value={user} onInput={e => setUser(e.target.value)} /><br />
            <label >Password: </label>
            <input className="border" type="password" value={pass} onInput={e => setPass(e.target.value)} /><br />
            <input className="bg-blue-500" type="submit" value="Login" />
        </form>
    </div>
)
}