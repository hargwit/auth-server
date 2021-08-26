import faker from 'faker'

import { mockUserRepositoryFactory } from './mocks'
import { registrationFactory } from './registration'

test('should be able to sign up', async () => {
    const mockUserRepository = mockUserRepositoryFactory()

    const registration = registrationFactory({ userRepository: mockUserRepository })

    await registration.signup(faker.internet.email(), 'StrongPassword1@')

    expect(mockUserRepository.create).toHaveBeenCalledTimes(1)
})
