const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./configs/keys');
require('./models/User');
require('./models/Posts');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI)
    .then((res)=>{
        // console.log("connect res", res);
    })
    .catch((err)=>{
        // console.log("err", err);
    })

require('./routes/authRoutes')(app);

app.get('/', function (req, res) {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);