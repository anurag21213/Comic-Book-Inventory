const express = require('express')
const createController = require('../controllers/comic_management_controllers/createController')
const editController = require('../controllers/comic_management_controllers/editController')
const deleteController = require('../controllers/comic_management_controllers/deleteController')

const router = express.Router()


//create api for comics
router.post('/create', createController)

//edit api
router.post('/edit/:_id', editController)

//delete api
router.delete('/delete/:_id', deleteController)

module.exports = router