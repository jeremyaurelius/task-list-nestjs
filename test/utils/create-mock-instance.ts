import { fromPairs } from 'lodash';

/**
 * Returns a mock object with the same instance methods as UserRepository.
 *
 * Each instance method in UserRepository is mocked using jest.fn()
 */
export function createMockInstance<T>(myClass): T {
  const instanceMethodNames = Object.getOwnPropertyNames(
    myClass.prototype,
  ).filter((p) => p !== 'constructor');
  const mock = fromPairs(instanceMethodNames.map((n) => [n, jest.fn()]));
  return mock as any;
}
