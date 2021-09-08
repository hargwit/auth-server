import faker from 'faker'
import { userFactory, UserRepository, User } from '../users'

/**
 * Builds a fake user with random data for each field.
 *
 * @param overides This argument will be spread on the returned object, allows for overiding default values.
 */
const fakeUser = (overides: Partial<User> = {}): User => ({
    ...userFactory({
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }),
    ...overides,
})

/**
 * Builds a mock implementation of a UserRepository.
 *
 * @param overides This argument will be spread onto the returned object, allows for overiding default functionality.
 */
const mockUserRepositoryFactory = (overides: Partial<UserRepository> = {}): UserRepository => ({
    create: jest.fn((user) => Promise.resolve(user)),
    get: jest.fn((id) => Promise.resolve(userFactory({ id, email: '', password: '' }))),
    ...overides,
})

export { mockUserRepositoryFactory, fakeUser }
