const db = require('./db')

const getUsers = () => {
    return db.fetchFromDb()
}

module.exports = {
    getUsers
};
