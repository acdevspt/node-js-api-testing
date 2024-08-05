const db = require('../config/db')

const getAllUsers = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM users"
        )
        res.json(result.rows)
    } catch {
        res.status(500).json({error: "Internal server error"})
    }
}

module.exports = {getAllUsers}