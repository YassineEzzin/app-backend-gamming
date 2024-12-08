const mongoose = require ('mongoose');


const prodyctSchema = new mongoose.Schema ({
    name : {  type : String , required : true   },
    description : {    type : String },
    price : {  type : Number , required : true   },
    stock :{  type : Number , required : true},
    category : { type : String , required : true   },
    images : [String],
});


module.exports = mongoose.model('Product', productSchema );

