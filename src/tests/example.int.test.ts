import axios from 'axios'

const { APP_URL = 'http://localhost' } = process.env

test('should be alive', (done) => {
    axios
        .get(`${APP_URL}/healthcheck`)
        .then((res) => {
            expect(res.status).toBe(200)

            done()
        })
        .catch((error) => {
            expect(error).toBeNull()

            done()
        })
})
