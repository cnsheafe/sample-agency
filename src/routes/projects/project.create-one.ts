import { ServerRoute, Lifecycle, HandlerDecorations } from "hapi";
import Project from "../../entity/Project";
import { ICreateOneProjectPayload as IPayload } from "./project.interface";

const createOneProject: Lifecycle.Method | HandlerDecorations = async (req, h) => {
  const {
    name, 
    description,
    budget
  } = req.payload as IPayload

  const project = new Project({ name, description, budget })

  // Function is bound to the context via server.config.ts
  await h.context.createOne(project)

  return h.response(`Project "${name}" successfully created.`)
    .code(201)
}

export default createOneProject