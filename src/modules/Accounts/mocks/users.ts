import { UserRepository } from '../users'

/**
 * Builds a mock implementation of a UserRepository.
 *
 * @param overides This argument will be spread onto the returned object, allows for overiding default functionality.
 */
const mockUserRepositoryFactory = (overides: Partial<UserRepository> = {}): UserRepository => ({
    create: jest.fn((user) => Promise.resolve(user)),
    ...overides,
})

export { mockUserRepositoryFactory }
