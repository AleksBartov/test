const express = require('express'), bodyParser = require('body-parser'), cors = require('cors'),
        morgan = require('morgan');


const {sequelize} = require('./models');
const config = require('./config/config');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync()
    .then(() => {
        app.listen(config.port)
    })
