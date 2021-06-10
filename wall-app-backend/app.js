const app = require("./index")


const PORT = process.env.PORT || 4000

app.listen(PORT,(res, req) =>{
    console.log("Server Running")
})



module.exports = app 