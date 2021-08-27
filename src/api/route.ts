import { Handler, Router } from 'express'

/**
 * Represents an API route.
 */
type Route = {
    method: string
    url: string
    handler: Handler
}

/**
 * Creates an express Router and registers the routes with it.
 */
const createRouter = (routes: Route[] = []): Router => {
    const router = Router()

    routes.forEach(({ method, url, handler }) => {
        const fn = router[method]

        fn.apply(null, router, url, handler)
    })

    return router
}

/**
 * Represents an API. These can be composed to create a larger API.
 */
type API = {
    rootUrl: string
    routes: Route[]
}

export { Route, API, createRouter }
