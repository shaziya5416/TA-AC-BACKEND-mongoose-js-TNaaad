var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var userSchema= new Schema({
    village:String,
    pin:Number,
    city:String,
    password:{Type:String,maxlength:20,minlength:8},
    createdAt:{Type:Date,default:Date.now}
})
