import { Menu } from '../../components/Menu';
import { LogInButton } from '../../components/buttons/LogInButton'
import { RegisterButton } from '../../components/buttons/RegisterButton'
import { Footer } from '../../components/Footer'



export default function Login() {

    return (
        <div>
            <Menu />

            

            <div className="h-96 flex">
                <span className="mt-5 ml-5">
                    <span className="oswald text-xl">User Login/Registration<br /></span>
                    <span>
                        If you already have an account, click the button below to login.<br />
                        Otherwise you can create a new account.
                    </span>
                    <span className="flex">
                        <LogInButton />
                        <span className="mx-2">or</span>
                        <RegisterButton />
                    </span>
                </span>

            </div>

            <Footer />
        </div>
    )
}