const mongoose = require('mongoose')
const Products = require('../../models/productsModel')

const oneProductController = async(req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            Products.findById(id).then((response) => {
                    res.status(200).json({
                        message: 'success',
                        data: response
                    })
                })
                .catch(err => res.send('invalid id'))
        }
    } catch (error) {
        res.send(error.message)
    }

}
module.exports = oneProductController