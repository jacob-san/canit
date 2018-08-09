const express = require('express');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');

const app = express();

require('./routes/authRoutes')(app);

app.get('/', function (req, res) {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);