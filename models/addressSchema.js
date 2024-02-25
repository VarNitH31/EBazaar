const mongoose=require("mongoose");


const addressSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    cart:{
        type:Object,
        required:true
    }
});

const Address=mongoose.model("Address",addressSchema)

module.exports=Address;