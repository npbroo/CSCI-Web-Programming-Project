import {executeQuery} from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const pid = req.body.pid

        let product = await executeQuery("SELECT * FROM products WHERE pid=?",[pid])
        
        res.json({product})
    }
}