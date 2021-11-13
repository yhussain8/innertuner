const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

async function create(req, res) {
   try {
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
      const user = await User.create({name: req.body.name, email:req.body.email, password:hashedPassword,})
   
      // creating a jwt: 
      // the first parameter specifies what we want to put into the token (in this case, our user document)
      // the second parameter is a "secret" code. This lets our server verify if an incoming jwt is legit or not.
      const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '30d' })
      res.status(200).json(token) // send it to the frontend
   } catch (err) {
      res.status(400).json(err)
   }
 }
 
 async function login(req, res) {
   try {
      const user = await User.findOne({ email: req.body.email })
      console.log(user)
      
      // check password. if it's bad throw an error.
      if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error('Password Error')

   
      // if we got to this line, password is ok. give user a new token.
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' })
      
      res.status(200).json(token)
   } catch (err) {
      res.status(400).json('Bad Credentials')
   }
}

module.exports = {create, login}