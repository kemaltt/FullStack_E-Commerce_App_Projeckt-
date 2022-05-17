const mongoose = require('mongoose')

const connectFunction = () => {
    mongoose.connect('mongodb://localhost:27017/eCommerce')
        .then(() => console.log('Connected to the db'))
        .catch(err => console.log(err))
}

connectFunction();