require('dotenv').config();  

const { connect} = require('mongoose');

const createConnection = connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = createConnection;