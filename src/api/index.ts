import { Application } from 'express'

import { api as authApi } from './auth'
import { createRouter } from './route'

const configure = ({ app }: { app: Application }): void => {
    const apis = [authApi]

    apis.forEach((api) => {
        const { rootUrl, routes } = api()

        app.use(rootUrl, createRouter(routes))
    })
}

export { configure }
