import {executeQuery} from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {

        let products = await executeQuery("SELECT * FROM products")
        
        res.json({products})
    }
}