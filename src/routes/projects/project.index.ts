import { ServerRoute } from "hapi";
import createOneProject from "./project.create-one";

const createOne: ServerRoute = {
  method: 'POST',
  path: '/projects',
  options: {
    payload: { allow: ['application/json'] }
  },
  handler: createOneProject
}

export default [createOne]