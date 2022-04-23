import {executeQuery} from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const pid = req.body.pid

        //sample logic
        //let userData = await executeQuery("INSERT INTO 'cart' ('pid') VALUES (?);",[pid])
        //res.json({products})
        res.json({ success: true });
    }
}