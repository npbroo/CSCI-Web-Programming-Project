import {executeQuery} from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const oldPassword = req.body.oldPass
        const password = req.body.pass
        const username = req.body.user
        
        let userData = await executeQuery("SELECT * FROM users WHERE user=?",[username])
        //res.send(userData)

        if(userData.length == 0 ) {
            res.json({ success: false });
        } else {
            if(userData[0]["pass"] == oldPassword) {
                //password matches, update old password
                let updatePass = await executeQuery("UPDATE users SET pass=? WHERE user=?", [password, username])
                res.status(201).json(updatePass)
            } else {
                //password does not match
                res.json({ success: false });
            }
        }
    }
}