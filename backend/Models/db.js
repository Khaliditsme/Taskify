
const mongoose =require('mongoose')

const db_url = process.env.MONGO_URI;

// return a promise that needs to be resolved
mongoose.connect(db_url)
    .then(()=>{
        console.log('DB is Connected')
    })
    .catch((err)=>{
        console.log('MongoDB connection error --- ',err);
    })