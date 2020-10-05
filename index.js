const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');
require('./models/user');
require('./models/subscriber');
require('./services/passport');

var cors = require('cors');



const app = express();


app.use(
    cookieSession({ 
        maxAge: 30 * 24 * 60 * 60* 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });


var corsOptions = {
    origin: [keys.origin],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200 
}
// app.use(cors(corsOptions));

require('./routes/authRoutes')(app);
require('./routes/subscriberRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT)