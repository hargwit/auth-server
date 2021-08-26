/**
 * Represents a person using the system
 */
type User = {
    // The email address of the user
    email: string
    // Verifies whether or not the given password is correct
    verifyPassword: (password: string) => boolean
}

/**
 * Builds a user from its parts
 */
const userFactory = ({ email, password: usersPassword }: { email: string; password: string }): User => ({
    email,
    verifyPassword: (password: string) => usersPassword === password,
})

/**
 * Persists users
 */
type UserRepository = {
    /**
     * Creates a user from its details and a password
     */
    create: (user: User, password: string) => Promise<User>
}

export { User, userFactory, UserRepository }
