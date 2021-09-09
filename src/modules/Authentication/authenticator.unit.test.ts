import { mockUserRepositoryFactory, fakeUser } from '../Accounts/mocks'
import { authenticatorFactory } from './authenticator'
import { IncorrectPassword } from './IncorrectPassword'

test('should throw on incorrect password', async () => {
    const testUser = fakeUser({
        password: 'TheRealPassword1@',
    })

    const mockUserRepository = mockUserRepositoryFactory({
        getBy: (props) => Promise.resolve({ ...props, ...testUser }),
    })

    const accounts = authenticatorFactory({ userRepository: mockUserRepository })

    expect(accounts.signIn(testUser.email, 'TheWrongPassword1@')).rejects.toThrow(IncorrectPassword)
})

test('should return user on success', async () => {
    const password = 'TheRealPassword1@'

    const testUser = fakeUser({
        password,
    })

    const mockUserRepository = mockUserRepositoryFactory({
        getBy: (props) => Promise.resolve({ ...props, ...testUser }),
    })

    const accounts = authenticatorFactory({ userRepository: mockUserRepository })

    const user = await accounts.signIn(testUser.email, password)

    expect(user.id).toEqual(testUser.id)
})
