// db connection
const  mongoose = require('mongoose');
const connectDB = async ()=>{

  try {
    await mongoose.connect(process.env.MONGO_URL).then(
        console.log('from db')
    )

  } catch (error) {
    console.log(error.message)
  }


}
module.exports = connectDB;