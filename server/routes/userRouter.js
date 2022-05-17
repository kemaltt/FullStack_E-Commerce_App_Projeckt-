const router = require('express').Router();
const registerController = require('../controllers/userController/registerController')
const loginController = require('../controllers/userController/loginController')
const isLoggedIn = require('../middlewares/isLoggedin')
const { addFav, deleteFav } = require('../controllers/userController/favController')
const checkAuth = require('../controllers/userController/checkAuth')



router.post('/register', registerController)
router.post('/login', loginController)
router.post('/fav/:id', isLoggedIn, addFav);
router.post('/fav/:id', isLoggedIn, deleteFav);
router.get('/checkAuth', checkAuth)

// POST=>'/register'=>req.body
// POST=>'/login'=>req.body
// POST=>'/fav/:id'=>req.params
// DELETE=>'/fav/:id'=>req.params
// GET=>'/checkAuth'=>req.headers


module.exports = router