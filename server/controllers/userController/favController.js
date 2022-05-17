const jwt_decode = require('jwt-decode');
const Products = require('../../models/productsModel');
const Users = require('../../models/usersMode');

exports.addFav = async(req, res) => {
    try {
        const { id } = req.params;
        const { token } = req.headers;
        const user = jwt_decode(token)
        console.log(user);
        const userId = user.userId
        if (!id) return res.send('Invalid id')
        let product = await Products.findById(id);
        if (!product) return res.send('No product found')
        const userInfo = await Users.findById(userId)
        if (!userInfo.favs.find(el => el._id == id)) {
            userInfo.favs.push(product);
            userInfo.password = null
            userInfo.save();
            res.send(userInfo);
        } else {
            res.send('Already added')
        }
    } catch (error) {
        console.log(error.message);
        res.send('Error')
    }
}
exports.deleteFav = async(req, res) => {
    try {
        const { id } = req.params
        const { token } = req.headers
        const user = jwt_decode(token);
        const { userId } = user;
        if (!id) return res.send('Invalid id')
        let product = await Products.findById(id);
        if (!product) return res.send('No product found')
        const userInfo = await Users.findById(userId);
        if (userInfo.favs.find(el => el._id == id)) {
            const newFavs = userInfo.favs.filter(el => el._id = id)
            userId.favs = newFavs;
            userInfo.save()
            userInfo.password = null;
            res.send(userInfo)
        } else {
            res.send('No such a fav')
        }
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
}