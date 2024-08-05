const pgp = require('pg-promise')(/* options */)
require('dotenv').config()

const db = pgp("postgres://username:password@localhost:5432/nodejsdb")

module.exports = db
