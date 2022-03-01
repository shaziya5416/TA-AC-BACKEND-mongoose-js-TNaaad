var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var userSchema= new Schema({
    village:String,
    pin:Number,
    city:String,
    state:String,
    user:Schema.Types.ObjectId
})
