/* istanbul ignore file */

const fetchFromDb = () => {
    return [
        { id: 1, name: 'John' },
        { id: 2, name: 'Allen' },
        { id: 3, name: 'Marry' },
        { id: 4, name: 'Smith' },
    ]
}

module.exports = {
    fetchFromDb
}