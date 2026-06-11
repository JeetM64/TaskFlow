const app = require("./src/app.js")
const connectDB = require("./src/config/db.js")



connectDB().then(()=>{
    app.listen(5000,()=>{
       console.log(`app running on port 5000`)
   })
})



