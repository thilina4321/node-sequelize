const Product = require('../model/Product')

exports.createProduct = async(req,res)=>{
    const {userId, name, price} = req.body
    console.log(userId);
    try {
        const product = await Product.create({name, price, userId})
        res.status(201).send({product})
    } catch (error) {
        res.status(500).send({error:error.message || 'Something went wrong'})
    }
}