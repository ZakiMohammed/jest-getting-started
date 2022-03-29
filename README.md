# Unit Testing

Testing individual units of code.

```
JEST
Mocha
Chai
Jasmine
```

Checkout the trend: https://www.npmtrends.com/chai-vs-jest-vs-mocha-vs-jasmine

Checkout the JEST: https://jestjs.io/

#### Install JEST
```
npm i jest
npm i @types/jest
```

#### Creating Script in package.json
```
"scripts": {
	"test": "jest",
}
```

#### Creating a Function
sum.js
```
const sum = (num1, num2) => num1 + num2

module.exports = sum
```

#### Writing Test Case
sum.test.js
```
const sum = require('./sum')

test('should add num 1 and num 2', () => {
    expect(sum(10, 20)).toBe(30)
})
```

#### Execute Test Cases
```
npm test

> jest@1.0.0 test
> jest

 PASS  basics/sum.test.js
  √ should add num 1 and num 2 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.666 s, estimated 1 s
Ran all test suites.

```

#### Extra Scripts
```
"scripts": {
	"test": "jest",
	"test-watch": "jest --watchAll",
	"test-verbose": "jest --verbose",
	"test-coverage": "jest --coverage",
	"test-fat": "jest --watchAll --verbose --coverage",
}
```

#### Extra Executes
```
npm test
npm run test-watch
npm run test-verbose
npm run test-coverage
npm run test-fat
```

#### Topics to explore

1. Matchers
2. Mocks
3. Spies
4. Configurations
5. Third-party packages