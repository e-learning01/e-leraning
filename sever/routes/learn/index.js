

const express = require('express');
const router = express.Router();
const {addItems,deleteItems,getItems} =require("../../controllers/learn")
router.post("/add",addItems)
router.delete("/delete",deleteItems)
router.get("/",getItems)

module.exports=router