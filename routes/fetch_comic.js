const express= require("express")
const getController = require("../controllers/get_comics_controller/getController")
const fetchSpecificController = require("../controllers/get_comics_controller/fetchSpecificController")


const router=express.Router()

//fetch all comic books
router.get('/get_comic',getController)

//fetch specific comic book
router.get('/get_book/:_id',fetchSpecificController)


module.exports=router