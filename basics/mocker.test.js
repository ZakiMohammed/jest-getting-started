const mocker = require('./mocker')
const db = require('./db')

let spyFetchFromDb

describe('Mocker', () => {
    beforeEach(() => {
        spyFetchFromDb = jest.spyOn(db, 'fetchFromDb')
        spyFetchFromDb.mockImplementation(() => ([
            { id: 1001, name: 'Test 1' },
            { id: 1002, name: 'Test 2' },
            { id: 1003, name: 'Test 3' },
        ]))
    })

    test('should get users', () => {
        const users = mocker.getUsers()

        expect(spyFetchFromDb).toHaveBeenCalled()
        expect(users[0].id).toBe(1001)
    })
})