const db = require("../models/dbcon")

exports.getApplication = (req, res) => {

    let sql = "SELECT * FROM application"

    db.query(sql, (err, result)=>{
        if(err) {
            throw err
        } else {
            res.send(result)
        }
    })

};


exports.createApplication = (req, res) => {
    const {appname, planname, creator} = req.body

    let sql = "INSERT INTO application (appname, plans, creator) VALUES (?,?,?)"

    db.query(sql, [appname,planname,creator],(err, result)=>{
        if(err){
            throw err
        } else {
            res.json("App successfully created")
        }
    })


}