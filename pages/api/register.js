import { executeQuery } from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const username = req.body.user
        const password = req.body.pass

        let userData = await executeQuery("SELECT * FROM person WHERE user=?",[username])
        //res.send(userData)

        if(userData.length == 0 ) {
            //add user
            try {
                let register = await executeQuery("INSERT INTO person (user, pass) VALUES (?,?)",[username,password])
                res.status(201).json(register)
            } catch(err) {
                res.status(400).json(err)
            }
        } else {
            //username already exists
            res.json({ success: false });
        }
    }
}