import { useRouter } from 'next/router'
import { updateUserPass } from '../utils/UserHandler'

export const UpdatePassForm = () => {
    let router = useRouter()

    //this function is called when submitting the form
    async function onSubmit(e) {
        e.preventDefault()
        let user = localStorage.getItem("username")
        let oldPass = e.target.oldPass.value
        let newPass = e.target.newPass.value
        let confirmPass = e.target.confirmPass.value

        if(await updateUserPass(user, oldPass, newPass, confirmPass)) {
            router.reload()
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