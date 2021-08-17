import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const { PORT = 3000 } = process.env

const startServer = () => {
    const app = express()

    app.get('/healthcheck', (_, res) => res.status(200).send('OK'))

    app.listen(PORT, () => {
        console.log(`
            ###########################################
                   Server listening on port ${PORT}
            ###########################################
        `)
    })
}

startServer()
