const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/users')

router.post('/signup', usersCtrl.create)
router.post('/login', usersCtrl.login)
router.post('/mood', usersCtrl.addMood);

module.exports = router




