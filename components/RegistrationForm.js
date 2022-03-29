import { useRouter } from 'next/router'
import { useState } from 'react';

export const RegistrationForm = () => {
    let router = useRouter()

    //these are states which hold your input
    //ex: 'userInput' is the variable which holds your input and 'setUserInput' is the function that changes this variable
    const [user, setUser] = useState(''); // '' is the initial state value
    const [newPass, setNewPass] = useState(''); // '' is the initial state value
    const [confirmPass, setConfirmPass] = useState(''); // '' is the initial state value

    //this function is called when submitting the form
    async function onSubmit(e) {
        e.preventDefault()

        if (newPass != confirmPass) {
            alert("your passwords do not match")
        } else {
            //call database here
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ pass: confirmPass, user: user}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            console.log(data)
            if(data["success"] == false) {
                alert("username already exists")
            } else {
                router.push("/user/login")
            }
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
                <input className="border" type="password" value={newPass} onInput={e => setNewPass(e.target.value)} /><br />
                <label >Confirm Password: </label>
                <input className="border" type="password" value={confirmPass} onInput={e => setConfirmPass(e.target.value)} /><br /><br />
                <input className="bg-blue-500" type="submit" value="Submit" />
            </form>
        </div>
    )
}