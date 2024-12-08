const User = require('../models/User')
const jwt =require('jsonwebtoken')

exports.register = async (req,res)=>{

const {name , email , password}=req.body ;
try {
    const user = new user ({name , email , password});
    await user.save();
    res.status(201).json({message : 'User registred successfully'});

} catch (error) {
    res.status(400).json({error : error.message});

}


}
exports.login = async (req,res)=>{
    const {email , password}= req.body;
    try {
        const user = await User.findOne({email})
        if (!user) throw new Error ('Invalid User');

       
        const token = jwt.sign({ id:user._id,   role:user.role},process.env.JWT_SECRET , {expiresIn : '1h'} )
    
    
        res.json({token});

    
    
    } catch (error) {
        res.status(401).json({error:error.message})
    }
};