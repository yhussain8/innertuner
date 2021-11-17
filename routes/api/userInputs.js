const express = require('express')
const router = express.Router()
const userInputsCtrl = require('../../controllers/userInputs')

router.post('/:id/mood', userInputsCtrl.updateMood);

router.post('/:id/weeklyMood', userInputsCtrl.weeklyMood);

module.exports = router