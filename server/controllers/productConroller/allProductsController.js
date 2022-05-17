const mongoose = require('mongoose')
const Products = require('../../models/productsModel')

const allProductsController = async(req, res) => {
    try {
        const { keyword, min_price, max_price, taxonomy_id, page } = req.body;
        if (page <= 0) page = 1
        let query = {};
        keyword ? query.title = new RegExp(keyword, 'i') : null
        min_price ? query.price = {
            ['$gte']: min_price
        } : null
        max_price ? query.price = {
            ['$lte']: max_price
        } : null;
        max_price && max_price ? query.price = {
            ['$gte']: min_price,
            ['$lte']: max_price
        } : null
        taxonomy_id ? query.taxonomy_id = taxonomy_id : null
        const products = await Products.find(query).limit(20).skip((page - 1) * 20);
        res.status(200).json({
            message: 'success',
            data: products
        })
        console.log(products.length);
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = allProductsController