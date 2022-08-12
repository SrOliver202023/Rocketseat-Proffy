// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  preset: 'ts-jest',
  // rootDir: '.',
  // moduleFileExtensions: ['js', 'json', 'ts'],
  // testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/../src/shared/$1',
    '^@modules/(.*)$': '<rootDir>/../src/modules/$1',
  },
};
