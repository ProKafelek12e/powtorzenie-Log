const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())
const port = 3000

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"logowanie"
})
con.connect((err)=>{
    if(err) console.log(err)
    else console.log("connected to database")
})

app.get("/log/:login/:password",(req,res)=>{
    const login = req.params.login
    const pass = req.params.password
    const sql = `SELECT upr FROM users WHERE login='${login}' AND pass = '${pass}'`
    con.query(sql,(err,result,fields)=>{
        if(err){
            console.log(err)
        }
        else{
            if(result.length==0){
                res.send([{upr:"brak"}])
            }
            else{
                res.send(result)
                console.log(result)
            }
        }
    })
})


app.listen(port)