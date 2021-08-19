require('dotenv').config();  

const { connect} = require('mongoose');
module.exports = connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});