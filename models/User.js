const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: { type : String , required:true  },
    email: {type : String , requored : true , unique : true},
    password : { type : String , require : true},
    role:{type : String , default : 'user' } ,

});

userSchema.statics.signup = async function (name,email,password){
 
  
    const exists = await this.findOne({email})
    if(exists){
        throw new Error('Email already in use')
        
    }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password,salt)
  const user = await this.create({ name, email,password : hash})
           return user     

}


userSchema.statics.login = async function (name,email,password){
     const user = await  findOne({email})
     if(!user){
        throw Error('incorrect email')
     }

     const match = await bcrypt.compare(password, user.password)
     if (!match){
        throw Error('Incorrect password')
     }
     return user
}





module.exports = mongoose.model ('User', userSchema);
//userSchema.pre('save', async function (next) {
  //  if (!this.isModified('password')) return next();
   // this.password= await bcrypt.hash ( this.password , 10);
   // next();
//});