const router = require('express').Router()

const allProductsController = require('../controllers/productConroller/allProductsController')
const oneProductController = require('../controllers/productConroller/oneProductController')

router.post('/', allProductsController)
router.get('detail/:id', oneProductController)

module.exports = router