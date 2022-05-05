const { createPool } = require("mysql")
const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    port: 3306,
    database: "final_project",
});

pool.getConnection((err) => {
    if (err) {
        console.log("Error connecting to database")
    } else {
        console.log("Connected to db")
    }
})

export const executeQuery=(query,arrayParams) => {
    return new Promise((resolve, reject)=>{
        try{
            pool.query(query, arrayParams, (err,data)=> {
                if(err) {
                    console.log('error in executing the query')
                    reject(err)
                }
                resolve(data)
            })
        } catch(err) {
            reject(err)
        }
    }
    )
}

module.exports = {executeQuery}