import {executeQuery} from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const timestamp = req.body.timestamp
        const username = req.body.username
        const pid = req.body.pid
        const qty = req.body.qty

        let uid
        try {
            uid = await executeQuery("SELECT userid FROM `users` WHERE user = ?", [username])
            uid = uid[0]["userid"]
        } catch(err) {
            res.json({ success: "uid fail" });
        }

        try {
            await executeQuery("INSERT INTO `orders` (`oid`, `quantity`, `productid`, `userid`, `time`) VALUES (NULL, ?, ?, ?, ?)", [qty, pid, uid, timestamp])
            res.json({ success: true });
        } catch(err) {
            res.json({ success: "insert failed" });
        }
    }
}