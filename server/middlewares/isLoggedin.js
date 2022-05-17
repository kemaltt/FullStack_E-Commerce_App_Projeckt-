const jwt = require('jsonwebtoken')

const isLoggedIn = (req, res, next) => {

    try {
        const { token } = req.headers
        jwt.verify(token, process.env.AUTH_SEC_KEY, (err, decoded) => {
            if (err) return res.status(403).send('Unauthorized!')
            req.token = token;
            next();
        })
    } catch (error) {
        res.send('Invalid input')
    }

}
module.exports = isLoggedIn;