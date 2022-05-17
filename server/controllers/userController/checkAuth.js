const jwt_decode = require('jwt-decode');
const Users = require('../../models/usersMode');

const checkAuth = async(req, res) => {
    try {
        const token = req.token
        if (!token) return res.status(400).send('Token undefind')
        const user = jwt_decode(token)
        const userId = user.userId;
        if (!userId) return res.status(400).send('No user')
        const userInfo = await Users.findById(userId)
    } catch (error) {

    }
}

module.exports = checkAuth