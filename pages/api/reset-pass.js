import {executeQuery} from "../../config/db"
import { Base64 } from 'js-base64';

// Routes
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json('Post requests only')
    } else if (req.method === 'POST') {
        const oldPassword = req.body.oldPass
        const password = req.body.pass
        const username = req.body.user
        // encrypt the password
        let encrypted_oldPass = Base64.encode(oldPassword)
        let encrypted_newPass = Base64.encode(password)
        
        let userData = await executeQuery("select * from person",[])

        for(let u in userData) {
            if(u == username) {
                if(userData[u]["pass"] == password) {
                    res.json({ success: true });
                }
            }
        }

        res.send(userData)


        /*
        //find user
        let user = db.find(x => x.user.toString() === username.toString());
        
        if(encrypted_oldPass == user["encrypted_pass"]) {
            
            user.encrypted_pass = encrypted_newPass;
            
            fs.writeFile("../../database/db.json", JSON.stringify(test, null, 4));



            res.json({ success: true });
        } else {
            res.json({ success: false });
        }*/
    }
}