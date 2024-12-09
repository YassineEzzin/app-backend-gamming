const express = require ('express')

const router = express.Router();

const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}=require('../controllers/productController')

router.get('/',getProducts);
router.get('/:id',getProductById);
router.post('/',addProduct);
router.put('/',updateProduct);
router.delete('/',deleteProduct);
module.exports = router ;