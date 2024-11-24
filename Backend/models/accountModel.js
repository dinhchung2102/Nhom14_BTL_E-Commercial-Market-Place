const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required:true,
        default:"user"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User',  
        required: true
    }
});

const Account = mongoose.model("Account", accountSchema);
module.exports  =  Account