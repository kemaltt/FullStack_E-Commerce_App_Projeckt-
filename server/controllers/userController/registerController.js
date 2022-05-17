const Users = require('../../models/usersMode')
const User = require('../../models/usersMode')
const registerController = async() => {
    try {
        const { email, password, name, surname } = req.body
        if (!email || !password || !name || !surname) return res.send('Please fill in the blanks!')
        const emailControl = await Users.findOne({ email: email })
        if (emailControl) return res.send('This user is already registered');
        const newUser = await new Users({
            name: name,
            surname: surname,
            email: email,
            password: bcrypt.hashSync(password, 8)
        });
        newUser.save()
            .then(() => res.status(200).send('success'))
            .catch((err) => res.send('Saving error'))
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
}

module.exports = registerController