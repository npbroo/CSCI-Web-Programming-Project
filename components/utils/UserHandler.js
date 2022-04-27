// This class contains all functionality for managing users
import { setGlobalState } from "../../state/global_states";

// sends a post request to the api to register a new user with the username, password, and confirmation password
// validates the confirm password mathces the password and that the username doesnt already exist
// returns true if the user was successfully logged in and false otherwise
// This is an async command so you must use the 'await' keyword
// NOTE: API route logic is saved under 'pages/api/*'
export const registerUser = async function registerUser(user, pass, confirmPass) {
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
            return false
        } else {
            return true
        }
    }
}

// sends a post request to the api to log a user in based on their username and password
// returns true if the user was successfully logged in and false otherwise
// This is an async command so you must use the 'await' keyword
// NOTE: API route logic is saved under 'pages/api/*'
export const loginUser = async function loginUser(user, pass) {
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
            return true
        } else {
            alert("Cannot login. Wrong username or password.")
            return false
        }
    }
}

// logs the current user out
export const logOutUser = function logOutUser() {
    setGlobalState("logged_in", false)
    localStorage.setItem("logged_in", false)
    localStorage.setItem("username", "")
    localStorage.setItem("cart", "")
    return true
}


// sends a post request to the api to update the currently logged in users password
// validates the old password mathces the user's current passwrod, and that the confirm password matches the new password
// returns true if the user's pass was successfully updated and false otherwise
// This is an async command so you must use the 'await' keyword
// NOTE: API route logic is saved under 'pages/api/*'
export const updateUserPass = async function updateUserPass(user, oldPass, newPass, confirmPass) {
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
            return false
        } else {
            alert("Your password has been updated")
            return true
        }
    }
}