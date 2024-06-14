module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  // rootDir is the parent of the test directory
  // this is so that we can access imports in src folder easily
  rootDir: '../',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    // allows imports using absolute paths for <rootDir>/src
    '^src/(.*)$': '<rootDir>/src/$1',
    // allows imports using absolute paths for <rootDir>/test
    '^test/(.*)$': '<rootDir>/test/$1',
  },
};
