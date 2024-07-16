const mongoose= require('mongoose');
const connectdb= async(url)=>{
    return mongoose.connect(url);
}
module.exports=connectdb;