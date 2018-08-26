import { ServerRoute } from "hapi";

const hello: ServerRoute = {
  method: 'GET',
  path: '/hello',
  handler: async (req, h) => {
    return h.response('hello world!')
      .code(200)
  }
}

export default [hello]