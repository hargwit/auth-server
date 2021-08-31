import dotenv from 'dotenv'
import { load } from './infrastructure/loaders'

dotenv.config()

const { PORT = 3000 } = process.env

const startServer = () => {
    const app = load()

    app.listen(PORT, () => {
        console.log(`
            ###########################################
                   Server listening on port ${PORT}
            ###########################################
        `)
    })
}

startServer()
