const User = require('../models/user.js')
const UserInput = require('../models/userInput.js')

async function updateMood(req, res) {
	try {
		await UserInput.deleteMany({
			userId: req.body.userId,
			date: new Date(req.body.date),
			inputName: req.body.inputName
		})
		let userInput = await new UserInput(req.body)
		await userInput.save()
		res.status(200).json("Successfully updated user inputted mood data")
	} catch (err) {
		res.status(400).json("Error updating user input data")
	}
}

async function updateHabit(req, res) {
	try {
		await UserInput.deleteMany({
			userId: req.body.userId,
			date: new Date(req.body.date),
			inputName: req.body.inputName
		})
		let userInput = await new UserInput(req.body)
		await userInput.save()
		res.status(200).json("Successfully updated user inputted habit data")
	} catch (err) {
		res.status(400).json("Error updating user input data")
	}
}

async function weeklyMood(req, res) {
	try {
		let weeklyMood = await UserInput.find({
			userId: req.params.id,
			date: { '$gte': req.body.weekStartDate, '$lte': req.body.weekEndDate },
			inputName: 'mood'
		}).sort({ date: 1 })
		let weekDays = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su']
		let weekDayArray = [{ 'M': 0 }, { 'Tu': 0 }, { 'W': 0 }, { 'Th': 0 }, { 'F': 0 }, { 'Sa': 0 }, { 'Su': 0 }]
		let populatedArray = weeklyMood.map((dailyMood) => {
			let day = weekDays[dailyMood.date.getDay()]
			return { [day]: dailyMood.inputValue }
		})
		for (let i = 0; i < populatedArray.length; i++) {
			let object = populatedArray[i]
			let key = Object.keys(object)[0]
			let value = object[key]
			for (let j = 0; j < weekDayArray.length; j++) {
				let object2 = weekDayArray[j]
				let key2 = Object.keys(object2)[0]
				if (key2 === key) {
					weekDayArray[j][key] = value
				}
			}
		}
		res.status(200).json(weekDayArray)
	} catch (err) {
		res.status(400).json("Error fetching weekly mood data")
	}
}

async function weeklyHabit(req, res) {
	try {
		let weeklyHabit = await UserInput.find({
			userId: req.params.id,
			date: { '$gte': req.body.weekStartDate, '$lte': req.body.weekEndDate },
			inputName: req.body.inputName
		}).sort({ date: 1 })
		let weekDays = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su']
		let weekDayArray = [{ 'M': 0 }, { 'Tu': 0 }, { 'W': 0 }, { 'Th': 0 }, { 'F': 0 }, { 'Sa': 0 }, { 'Su': 0 }]
		let populatedArray = weeklyHabit.map((dailyHabit) => {
			let day = weekDays[dailyHabit.date.getDay()]
			return { [day]: dailyHabit.inputValue }
		})
		for (let i = 0; i < populatedArray.length; i++) {
			let object = populatedArray[i]
			let key = Object.keys(object)[0]
			let value = object[key]
			for (let j = 0; j < weekDayArray.length; j++) {
				let object2 = weekDayArray[j]
				let key2 = Object.keys(object2)[0]
				if (key2 === key) {
					weekDayArray[j][key] = value
				}
			}
		}
		res.status(200).json(weekDayArray)
	} catch (err) {
		res.status(400).json("Error fetching weekly habit data")
	}
}

module.exports = { updateMood, weeklyMood, updateHabit, weeklyHabit}