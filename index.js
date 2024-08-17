
const express = require('express')
const app = express()      // express framework get initialised
require('dotenv').config()
require('./Models/db')
const PORT = process.env.PORT || 8080; 
const TaskRouter = require('./Routes/TaskRouter')
const bodyParser = require('body-parser');
const cors = require('cors')

app.get('/',(req,res)=>{
    res.send("Hello from the server")
})

app.use(cors()) 
app.use(bodyParser.json())
app.use(express.json())
// will be used only when the url patter in '/task'
app.use("/tasks", TaskRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port = ${PORT}`)
})