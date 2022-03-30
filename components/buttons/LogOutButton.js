import { useRouter } from 'next/router'
import { setGlobalState } from "../../state/global_states";

export const LogOutButton = (props) => {
    let router = useRouter()

    const logOut = () => {
        setGlobalState("logged_in", false)
        localStorage.setItem("logged_in", false)
        router.push("/")
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