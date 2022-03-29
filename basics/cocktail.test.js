const cocktail = require('./cocktail')

describe('Cocktail', () => {
    test('should check holiday', () => {
        expect(cocktail.isHoliday()).toBeFalsy()
    })

    describe('Fruits', () => {

        let fruits = []

        beforeEach(() => {
            fruits = cocktail.getFruits()
        })

        test('should contain Apple', () => {
            expect(fruits).toContain('Apple')
        })

        test('should not contain Banana', () => {
            expect(fruits).not.toContain('Banana')
        })

        test('should be more than or equal to 3', () => {
            expect(fruits.length).toBeGreaterThanOrEqual(3)
        })
    })

    test('should get user', () => {
        const user = cocktail.getUser()
        expect(user).toEqual({
            id: 1,
            name: 'John'
        })
    })

    test('should not be sad', () => {
        expect(cocktail.getSad()).toBeNull()
    })

    describe('Split Names', () => {
        test('should get first and last names', () => {
            const names = cocktail.splitNames('John Doe')
            expect(names.first).toBe('John')
            expect(names.last).toBe('Doe')
        })

        test('should get only first name', () => {
            const names = cocktail.splitNames('John')
            expect(names.first).toBe('John')
            expect(names.last).toBeUndefined()
        })

        test('should get only last name', () => {
            const names = cocktail.splitNames(' Doe')
            expect(names.first).toBeFalsy()
            expect(names.last).toBe('Doe')
        })

        test('should not get names in case of empty full name', () => {
            const names = cocktail.splitNames('')
            expect(names).toBeFalsy()
        })

        test('should not get names in case of null full name', () => {
            const names = cocktail.splitNames(null)
            expect(names).toBeFalsy()
        })
    })

})
