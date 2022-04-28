import {executeQuery} from "../../config/db"

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const username = req.body.username
        let uid = await executeQuery("SELECT userid FROM `users` WHERE user = ?", [username])
      
        
        let orders = await executeQuery("SELECT products.title, products.price, orders.quantity, orders.time FROM orders INNER JOIN products ON orders.productid = products.pid WHERE userid = ?", [uid[0]["userid"]])
        
        res.json({orders})
    }
}