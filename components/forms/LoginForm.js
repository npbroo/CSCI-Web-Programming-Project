import { useRouter } from 'next/router'
import Link from 'next/link';

export const LoginForm = () => {
    let router = useRouter()

    //this function is called when submitting the form
    async function onSubmit(e) {
        console.log(e)
        e.preventDefault()
        let user = e.target.user.value
        let pass = e.target.pass.value

        // validate the entries
        if (user == "") {
            alert("please type a username")
        } else if (pass == "") {
            alert("please type a password")
        } else {
            // call database here
            const res = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ user: user, pass: pass }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            console.log(data)

            if (data["success"]) {
                localStorage.setItem("logged_in", true)
                localStorage.setItem("username", user)
                router.push("/user")
            } else {
                alert("Cannot login. Wrong username or password.")
            }
        }
    }

//render the form page
return (
    <div className="odyssey-bg p-5 rounded-lg">
        <form onSubmit={onSubmit}>
            <div >Username:</div>
            <input className="border w-full" type="text" id="user" name="user"/><br />
            <div >Password: </div>
            <input className="border w-full" type="password" id="pass" name="pass"/><br /><br/>
            <input className="custom-btn" type="submit" id="login" name="login" value="Login" />
        </form>
        
    </div>
)
}