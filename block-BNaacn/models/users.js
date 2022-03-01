var mongoose= require("mongoose");
var Schema= mongoose.Schema;

var articleSchema= new Schema({
    title:String,
    likes:{Type:Number,default:0},
    tags:[String],
    description:String,
    createdAt:{Type:Date,default:Date.now}
})

var userSchema= new Schema({
    name:{Type:String},
    email:{Type:String,lowercase:true},
    age:{Type:Number,default:0},
    password:{Type:String,minlength:5}
})

var addressSchema= new Schema({
    village:{Type:String,required:true},
    city:{Type:String, required:true},
    pin:{Type:Number},
    state:{Type:String},
    user:Schema.Types.ObjectId
},
{
    timestamps:true,
})

let User = mongoose.models(`User`,userSchema);

module.exports=User;

module.exports = mongoose.model("Address", addressSchema);

module.exports = mongoose.model("Article", articleSchema);