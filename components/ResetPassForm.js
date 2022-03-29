import { useRouter } from 'next/router'
import { useState } from 'react';

export const ResetPassForm = () => {
    let router = useRouter()
    //these are states which hold your input
    //ex: 'userInput' is the variable which holds your input and 'setUserInput' is the function that changes this variable
    const [user, setUser] = useState(''); // '' is the initial state value
    const [oldPass, setOldPass] = useState(''); // '' is the initial state value
    const [newPass, setNewPass] = useState(''); // '' is the initial state value
    const [confirmPass, setConfirmPass] = useState(''); // '' is the initial state value

    //this function is called when submitting the form
    async function onSubmit(e) {
        e.preventDefault()

        if (newPass != confirmPass) {
            alert("your passwords do not match")
        } else {
            //call database here
            const res = await fetch('/api/reset-pass', {
                method: 'POST',
                body: JSON.stringify({ pass: confirmPass, user: user, oldPass: oldPass }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )

            const data = await res.json()

            if(data["success"] == false) {
                alert("username or password is incorrect")
            } else {
                alert("Your password has been updated")
                router.push("/user/login")
            }
        }

    }

    //render the form page
    return (
        <div className="mt-5 mx-5">
            <h1>Reset your Password:</h1>
            <form onSubmit={onSubmit}>
                <label >Username: </label>
                <input className="border" type="text" value={user} onInput={e => setUser(e.target.value)} /><br />
                <label >Old Password: </label>
                <input className="border" type="password" value={oldPass} onInput={e => setOldPass(e.target.value)} /><br /><br />
                <label >New Password: </label>
                <input className="border" type="password" value={newPass} onInput={e => setNewPass(e.target.value)} /><br />
                <label >Confirm New Password: </label>
                <input className="border" type="password" value={confirmPass} onInput={e => setConfirmPass(e.target.value)} /><br /><br />
                <input className="bg-blue-500" type="submit" value="Submit" />
            </form>
        </div>
    )
}