module.exports = {
  db: {
    user: process.env.DBUSER,
    pass: process.env.DBPASS,
    database: 'express_store',
    connectionString: 'localhost:5432'
  },
  smtp: {
    address: process.env.SMTP_ADDRESS
  }
}
