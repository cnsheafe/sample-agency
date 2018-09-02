import { ServerRoute } from "hapi";
import Employee from '../../entity/Employee'
import { IEmployee } from './employee.interface'
import { parseUndefinedPayload, parseRelationsFromQuery } from "../../lib/parsers";

const getOne: ServerRoute = {
  method: 'GET',
  path: '/employees/{id}',
  handler: async (req, h) => {
    const { id } = req.params

    const rel = parseRelationsFromQuery(req.query, { project: true })
    const employee = await h.context.getOne(Employee, id, rel)

    return h.response(employee).code(200)
  }
}

const createOne: ServerRoute = {
  method: 'POST',
  path: '/employees',
  options: {
    payload: { allow: ['application/json'] }
  },
  handler: async (req, h) => {
    const {
      firstname,
      lastname,
      title,
      salary,
      startDate,
      endDate,
      project,
    } = req.payload as IEmployee

    const employee = new Employee({
      firstname, lastname, title, salary, startDate, endDate, project,
    })

    // Function is bound to the context via server.config.ts
    await h.context.createOne(employee)

    return h.response(`Employee "${firstname} ${lastname}" successfully created.`)
      .code(201)
  }
}

const updateOne: ServerRoute = {
  method: 'PATCH',
  path: '/employees/{id}',
  options: {
    payload: { allow: ['application/json'] }
  },
  handler: async (req, h) => {
    const {
      firstname, lastname, title, salary, startDate, endDate,
    } = req.payload as IEmployee
    const { id } = req.params

    const filtered = parseUndefinedPayload({
      firstname, lastname, title, salary, startDate, endDate,
    })

    await h.context.updateOne(Employee, id, filtered)

    return h.response().code(204)
  }
}

const assignProject: ServerRoute = {
  method: 'PATCH',
  path: '/employees/{id}/assign',
  options: {
    payload: { allow: ['application/json'] }
  },
  handler: async (req, h) => {
    const { projectId } = req.payload as { projectId: string }
    const { id } = req.params

    const instance = await h.context
      .bindModelOneToMany(Employee, 'project', id, projectId)

    return h.response().code(204)
  }
}

export default [createOne, getOne, updateOne, assignProject]