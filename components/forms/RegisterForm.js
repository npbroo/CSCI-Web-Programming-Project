import { useRouter } from 'next/router'
import { registerUser } from '../utils/UserHandler'

export const RegisterForm = () => {
    let router = useRouter()

    //this function is called when submitting the form
    async function onSubmit(e) {
        e.preventDefault() // prevents a page refresh on form submit
        let user = e.target.user.value
        let pass = e.target.pass.value
        let confirmPass = e.target.confirmPass.value

        if(await registerUser(user, pass, confirmPass)) {
            router.push("/user/login")
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