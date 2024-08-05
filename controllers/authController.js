const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../config/db')

const register = async (req, res) => {
    const {username, email, password} = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = await db.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, hashedPassword])

        res.status(201).json(result[0])
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: "Internal server error"})
    }
}
module.exports = {register}