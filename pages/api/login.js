import {executeQuery} from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const username = req.body.user
        const password = req.body.pass

        let userData = await executeQuery("SELECT * FROM users WHERE user=?",[username])
        //res.send(userData)

        if(userData[0]["pass"] == password) {
            //password matches
            res.json({ success: true });
        } else {
            //password does not match
            res.json({ success: false });
        }
    }
}