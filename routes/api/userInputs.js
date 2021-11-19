const express = require('express')
const router = express.Router()
const userInputsCtrl = require('../../controllers/userInputs')

router.post('/:id/mood', userInputsCtrl.updateMood)
router.post('/:id/habit', userInputsCtrl.updateHabit)

router.post('/:id/weeklyMood', userInputsCtrl.weeklyMood)
router.post('/:id/weeklyHabit', userInputsCtrl.weeklyHabit)

module.exports = router