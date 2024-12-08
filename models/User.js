const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: { type : String , required:true  },
    email: {type : String , requored : true , unique : true},
    password : { type : String , require : true},
    role:{type : String , default : 'user' } ,

});



userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password= await bcrypt.hash ( this.password , 10);
    next();
});


module.exports = mongoose.model ('User', userSchema);
