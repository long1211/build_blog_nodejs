const express = require("express")
const router = express.Router()
const adminController = require('../controller/admin.controller')

router.get('/', adminController.index)
router.post('/topic', adminController.postTopic)

module.exports = router