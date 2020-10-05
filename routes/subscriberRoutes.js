const mongoose = require('mongoose');
const Subscriber = mongoose.model('subscribers');

module.exports = (app) => {
    
     app.post('/api/subscribe', (req, res) => {
        let email = req.query.email;
        if(!email){
           res.status("400");
           res.send({message: "Invalid details!"});
        } else {
            Subscriber.findOne({ email: email }).then(retrivedSubscriber => {
                if(retrivedSubscriber){
                    res.status("409")
                    res.send({message: retrivedSubscriber.email + " is already a list member."});
                    
                }else{
                    new Subscriber({ email: email}).save().then(subscriber => {
                        res.status("200")
                        res.send({message: "Thank you for signing up. Keep an eye out for your first email."});
                    });
                }
            })

        }
     });

}
