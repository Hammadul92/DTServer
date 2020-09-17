const passport = require('passport');
const bcrypt = require('bcrypt')

const mongoose = require('mongoose');
const User = mongoose.model('users');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

async function checkPassword(password, hash) { // updated
    const isSame = await bcrypt.compare(password, hash); // updated
    return isSame;  
}



module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current-user', (req, res )=>{
        res.send(req.user)
    });

    app.post('/api/signup', (req, res) => {
        let email = req.query.email;
        let password = req.query.password;
        if(!email || !password){
           res.status("400");
           res.send({message: "Invalid details!"});
        } else {
            User.findOne({ email: email }).then(retrivedUser => {
                if(retrivedUser){
                    res.status("409")
                    res.send({message: "User Already Exists! Login or choose another user id"});
                }else{
                    hashPassword(password).then(hash => {
                        new User({ email: email, passwordHash: hash }).save().then( user => {
                            res.status("200")
                            res.send({message: "Your Account has been successfully created."});
                        });
                    })
                    
                }
            })

        }
     });

     app.post('/api/login', (req, res) => {
        let email = req.query.email;
        let password = req.query.password;
        if(!email || !password){
           res.status("400");
           res.send({message: "Invalid details!"});
        } else {
            User.findOne({ email: email }).then(retrivedUser => {
                if(retrivedUser){
                    checkPassword(password, retrivedUser.passwordHash).then(isSame => {
                        if(isSame){
                            res.status("200");
                            res.send(retrivedUser);
                        }else{
                            res.status("400");
                            res.send({message: "Incorrect username or password."});
                        }

                    })
                    
                }else{
                    res.status("400");
                    res.send({message: "Incorrect username or password."});
                }
            })

        }
     });

    // app.get('/api/login', (req, res)=> {
    //     req.session.user = {user: '1345678435'}
    //     res.send(req.session)
    // })

}
