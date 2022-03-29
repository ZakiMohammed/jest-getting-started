const sub = require('./sub')

test('should subtract num 1 and num 2', () => {
    expect(sub(20, 10)).toBe(10)
})