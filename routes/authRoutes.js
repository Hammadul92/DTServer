const passport = require('passport');
const bcrypt = require('bcrypt');


const mongoose = require('mongoose');
const User = mongoose.model('users');

const keys = require('./../config/keys');

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
    
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect(keys.domain + '/account')
    });

    app.get('/api/logout',  (req, res) => {
        req.logout();
        res.redirect(keys.domain + '/')
    });

    app.get('/api/current_user', (req, res )=>{
        res.send(req.user)
    });

    app.post('/api/signup', (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        let companyName = req.body.companyName;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        if(!email || !password){
           res.status("400");
           res.send({message: "Invalid details!"});
        } else {
            User.findOne({ email: email }).then(retrivedUser => {
                if(retrivedUser){
                    res.status("409")
                    res.send({error: "User Already Exists! Login or choose another user id"});
                }else{
                    hashPassword(password).then(hash => {
                        var d = Date(Date.now()); 
                        date = d.toString();
                        new User({ email: email, 
                            passwordHash: hash, 
                            date: date, 
                            lastLogin: date, 
                            firstName: firstName, 
                            lastName: lastName,
                            isAdmin: false, 
                            companyName: companyName}).save().then( user => {
                                res.status("200")
                                res.send(user);
                            });
                        })
                    
                }
            })

        }
     });

     app.post('/api/login', (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        if(!email || !password){
           res.status("400");
           res.send({message: "Invalid details!"});
        } else {
            User.findOne({ email: email }).then(retrivedUser => {
                if(retrivedUser){
                    if(retrivedUser.passwordHash){
                        checkPassword(password, retrivedUser.passwordHash).then(isSame => {
                            if(isSame){
                                res.status("200");
                                res.send(retrivedUser);
                            }else{
                                res.status("401");
                                res.send({error: "Incorrect username or password."});
                            }
    
                        })
                    }else{
                        res.status("401");
                        res.send({error: "Incorrect username or password."});
                    }
            
                }else{
                    res.status("401");
                    res.send({error: "Incorrect username or password."});
                }
            })

        }
     });

    // app.get('/api/login', (req, res)=> {
    //     req.session.user = {user: '1345678435'}
    //     res.send(req.session)
    // })

}
