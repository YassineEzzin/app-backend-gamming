const Product=require("../models/Product")




// GET ALL products

exports.getProducts = async(req,res)=>{


    try {
        
       const products = await Product.find();
       res.json(products)


    } catch (error) { 

        res.status(500).json({error:error.message});

        
    }
};


// Get single product by ID 
exports.getProductById= async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.json({error:err.message}).status(404)

        }
    } catch (error) {
        res.status(500).json({error:err.message});
    }
};


// admine roles !

//Admine : add a product

exports.addProduct = async (req,res)=>{
    const { name,description,price,stock,category }=req.body
    try {
        const product = await Product.create({name,description,price,stock,category})
        
        res.status(201).json(product);

    } catch (error) {
        res.status(400).json({error:err.messge});

    }
};
exports.updateProduct = async (req,res)=>{
   try {
    const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new:true});
   if(!product) return res.status(404).json({message:'Product not found'});
   res.json(product);
   } catch (error) {
    
     res.status(400).json({error:err.message})


   }



};


exports.deleteProduct = async (req,res)=>{
    try {
          
       const product = await Product.findByIdAndDelete(req.params.id);
       if(!product) return res.status(404).json({message:'Product Not found'})
        res.json({message:'Product deleted'});

    } catch (error) {
        res.status(500).json({error:err.mrssage}) 
    }
};


