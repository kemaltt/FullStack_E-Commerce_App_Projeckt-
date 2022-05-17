const Users = require("../../models/usersMode")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginController = async(req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.send('Please fill in the blanks!')
        const emailControl = await Users.findOne({ email: email });
        if (!emailControl) return res.status(400).send('No user with this email!')
        const passwordMatch = bcrypt.compareSync(password, emailControl.password)
        console.log(passwordMatch);
        if (passwordMatch) return res.status(400).send('Wrong password')
        const userToken = jwt.sign({
            userId: emailControl._id
        }, process.env.AUTH_SEC_KEY)
        emailControl.password = null
        res.status(200).json({
            message: 'success',
            data: emailControl,
            token: userToken
        })
    } catch (error) {
        res.send(error.message)
        console.log(error.message);
    }

}

module.exports = loginController