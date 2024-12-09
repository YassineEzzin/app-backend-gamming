const User = require('../models/User')
const jwt =require('jsonwebtoken')
const createToken =(_id)=>{
    return jwt.sign({_id}, process.env.JWT_SECRET,{ expiresIn: '3d'})
    
  }
exports.register = async (req,res)=>{

const {name , email , password}=req.body ;
try {
    const user = User.signup(name,email,password)
    const token = createToken(user._id)
    res.status(200).json({email,token});

} catch (error) {
    res.status(400).json({error : error.message});

}


}
exports.login = async (req,res)=>{
    const {email , password}= req.body;
    try {
        const user = await User.findOne({email})
        if (!user) throw new Error ('Invalid User');

       
        
    
    
        res.json({message:"login user"});

    
    
    } catch (error) {
        res.status(401).json({error:error.message})
    }
};