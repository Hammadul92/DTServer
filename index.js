const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/user');
require('./models/subscriber');
require('./services/passport');

const app = express();


app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
//   }));


app.use(
    cookieSession({ 
        maxAge: 30 * 24 * 60 * 60* 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });


require('./routes/authRoutes')(app);
require('./routes/subscriberRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT)