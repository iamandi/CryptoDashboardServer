const userDB = require('./db/user-db');
const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();




const PORT = 4000;
app.listen(4000, () => console.log(`Server on ${PORT}`));