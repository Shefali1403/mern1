const express= require('express');
const {handleGETuser,handleGETuserid,handlePOSTuser,handlePATCHuser,handleDELuser}=require('../controllers/user');
const router= express.Router();
router.route("/").get(handleGETuser).post(handlePOSTuser);
router.route("/:id").get(handleGETuserid).patch(handlePATCHuser).delete(handleDELuser);
module.exports=router;