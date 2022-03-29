const sum = require('./sum')

test('should add num 1 and num 2', () => {
    expect(sum(10, 20)).toBe(30)
})

test('should be 0 if num 1 and num 2 null', () => {
    expect(sum(null, null)).toBe(0)
})