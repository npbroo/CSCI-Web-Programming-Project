import { useRouter } from 'next/router'

export const RegisterForm = () => {
    let router = useRouter()

    //this function is called when submitting the form
    async function onSubmit(e) {
        e.preventDefault() // prevents page refresh on form submit
        let user = e.target.user.value
        let pass = e.target.pass.value
        let confirmPass = e.target.confirmPass.value

        //validate the entries
        if (user == "") {
            alert("please type a username")
        } else if (pass == "") {
            alert("please type a password")
        } else if (pass != confirmPass) {
            alert("your passwords do not match")
        } else {
            //call database here
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ pass: pass, user: user}),
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
        <div className="odyssey-bg p-5 rounded-lg">
            <form onSubmit={onSubmit}>
                <div >Username: </div>
                <input className="border w-full" type="text" name="user" id="user" /><br />
                <div >Password: </div>
                <input className="border w-full" type="password" name="pass" id="pass"/><br />
                <div >Confirm Password: </div>
                <input className="border w-full" type="password" name="confirmPass" id="confirmPass"/><br /><br />
                <input className="custom-btn" type="submit" value="Submit" />
            </form>
        </div>
    )
}