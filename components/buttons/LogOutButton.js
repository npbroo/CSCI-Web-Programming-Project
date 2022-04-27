import { useRouter } from 'next/router'
import { logOutUser } from '../utils/UserHandler'

export const LogOutButton = (props) => {
    let router = useRouter()

    function logOut() {
        if(logOutUser()) {
            router.push("/")
        }
    }

    return (
        <>
        {props.button
        ?
        <button onClick={logOut} className="custom-btn">
            {props.text}
        </button>
        :
        <a onClick={logOut} className="ml-auto">{props.text}</a>
        }
        </>
    );

}