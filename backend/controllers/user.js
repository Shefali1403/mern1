const User= require('../models/user');
const handleGETuser= async(req,res)=>{
    const alldbuser= await User.find({});
    return res.json(alldbuser);
}
const handleGETuserid=async(req,res)=>{
    const user= await User.findById(req.params.id);
    return res.json(user);
}
const handlePOSTuser=async(req,res)=>{
    const body= req.body;
    await User.create({
        name:body.name,
        email:body.email,
        age:body.age,
    })
    return res.json({status:"success post req"});

}
const handlePATCHuser= async(req,res)=>{
    const {id}=req.params;
    const {name,email,age}=req.body;
    try{

      const updateUser=  await User.findByIdAndUpdate(id, req.body,{
        new:true,
      });
    res.status(200).json(updateUser);}
    catch(err){

        res.status(500).json({error:err.message});
    }
}
const handleDELuser= async(req,res)=>{
    const {id}=req.params;
    try{

      const singleUser=  await User.findByIdAndDelete({_id:id});
      res.status(200).json(singleUser);
    }catch(error){

        res.status(500).json({error:error.message});
    }
}
module.exports={
    handleGETuser,
    handleGETuserid,
    handlePOSTuser,
    handlePATCHuser,
    handleDELuser,
}