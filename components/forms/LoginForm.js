import { useRouter } from 'next/router'
import { loginUser } from '../utils/UserHandler'

export const LoginForm = () => {
    let router = useRouter()

    //this function is called when submitting the form
    async function onSubmit(e) {
        console.log(e)
        e.preventDefault() // prevents a page refresh on user submit
        let user = e.target.user.value
        let pass = e.target.pass.value

        let logged_in = await loginUser(user, pass)
        if(logged_in) router.push("/user")
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