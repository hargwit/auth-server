import axios from 'axios'
import faker from 'faker'

const { APP_URL = 'http://localhost' } = process.env

test('should be alive', async () => {
    await axios
        .get(`${APP_URL}/healthcheck`)
        .then((res) => {
            expect(res.status).toBe(200)
        })
        .catch((error) => {
            expect(error).toBeNull()
        })
})

test('should be able to sign up', async () => {
    await axios
        .post(`${APP_URL}/signup`, {
            email: faker.internet.email(),
            password: 'StrongPassword1@',
        })
        .then((res) => {
            expect(res.status).toBe(200)

            expect(res.headers['set-cookie']).not.toBeUndefined()
        })
        .catch((error) => {
            expect(error).toBeNull()
        })
})
