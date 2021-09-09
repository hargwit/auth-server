import { User } from './users'

export class UserNotFound extends Error {
    constructor({ id, query }: { id?: string; query?: Partial<User> }) {
        super(id ? `User ${id} not found.` : `User not found by query ${query}`)

        this.name = 'UserNotFound'
    }
}
