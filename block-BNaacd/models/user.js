var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var userSchema= new Schema({
    name:String,
    age:Number,
    email:String
})

var newUserSchema= new Schema({
    name:{type:String},
    age:{type:Number,default:0},
    email:{type:String,lowercase:true}
})