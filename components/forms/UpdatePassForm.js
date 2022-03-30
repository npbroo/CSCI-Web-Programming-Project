import { useRouter } from 'next/router'

export const UpdatePassForm = () => {
    let router = useRouter()

    //this function is called when submitting the form
    async function onSubmit(e) {
        e.preventDefault()
        let user = localStorage.getItem("username")
        let oldPass = e.target.oldPass.value
        let newPass = e.target.newPass.value
        let confirmPass = e.target.confirmPass.value

        // validate the entries
        if (user == "") {
            alert("please type a username")
        } else if (oldPass == "" || newPass == "") {
            alert("please type a password")
        } else if (newPass != confirmPass) {
            alert("your passwords do not match")
        } else {
            //call database here
            const res = await fetch('/api/update-pass', {
                method: 'POST',
                body: JSON.stringify({ pass: confirmPass, user: user, oldPass: oldPass }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()

            if(data["success"] == false) {
                alert("Your password is incorrect")
            } else {
                alert("Your password has been updated")
                router.reload()
            }
        }
    }

    //render the form page
    return (
        <div className="odyssey-bg p-5 rounded-lg">
            <form onSubmit={onSubmit}>
                <div>Old Password: </div>
                <input className="border w-full" type="password"  name="oldPass" id="oldPass"/><br />
                <div>New Password: </div>
                <input className="border w-full" type="password"  name="newPass" id="newPass"/><br />
                <div>Confirm Password: </div>
                <input className="border w-full" type="password"  name="confirmPass" id="confirmPass"/><br /><br />
                <input className="custom-btn p-2" type="submit" value="Submit" />
            </form>
        </div>
    )
}