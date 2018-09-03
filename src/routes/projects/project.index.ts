import { ServerRoute } from 'hapi'
import Project from '../../entity/Project'
import { IProject } from './project.interface'

const createOne: ServerRoute = {
  method: 'POST',
  path: '/projects',
  options: {
    payload: { allow: ['application/json'] },
  },
  handler: async (req, h) => {
    const { name, description, budget, startDate, endDate } = req.payload as IProject

    const project = new Project({
      name,
      description,
      budget,
      startDate,
      endDate,
    })

    // Function is bound to the context via server.config.ts
    await h.context.createOne(project)

    return h.response(`Project "${name}" successfully created.`).code(201)
  },
}

const getOne: ServerRoute = {
  method: 'GET',
  path: '/projects/{id}',
  handler: async (req, h) => {
    const { id } = req.params

    const project = await h.context.getOne(Project, id)

    return h.response(project).code(200)
  },
}

export default [createOne, getOne]
