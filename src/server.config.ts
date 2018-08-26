import { Server } from "hapi";
import 'reflect-metadata'
import hello from "./routes/hello/hello.index";
import { createConnection } from "typeorm";
import Project from "./entity/Project";
import projects from "./routes/projects/project.index";
import { createOne } from './db'

async function configServer(server: Server) {
  server.bind({ createOne })

  server.route(hello)
  server.route(projects)


  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'sample-agency',
    password: 'password',
    database: 'sample-agency',
    entities: [Project],
    synchronize: true,
    logging: false,
  })
}

export default configServer