import { mockUserRepositoryFactory, fakeUser } from './mocks'
import { accountsFactory } from './accounts'

test('should be able to get user', async () => {
    const testUser = fakeUser()

    const mockUserRepository = mockUserRepositoryFactory({
        get: (id) => Promise.resolve({ id, ...testUser }),
    })

    const accounts = accountsFactory({ userRepository: mockUserRepository })

    const user = await accounts.get(testUser.id)

    expect(user.id).toEqual(testUser.id)
})
