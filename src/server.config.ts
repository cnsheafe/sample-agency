import { Server } from 'hapi'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import Project from './entity/Project'
import projects from './routes/projects/project.index'
import { createOne, getOne, updateOne, bindModelOneToMany } from './db'
import Employee from './entity/Employee'
import employees from './routes/employees/employee.index'

async function configServer (server: Server) {
  // Bind database handlers to the server context
  server.bind({
    createOne,
    getOne,
    updateOne,
    bindModelOneToMany,
  })

  server.route(projects)
  server.route(employees)

  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'sample-agency',
    password: 'password',
    database: 'sample-agency',
    entities: [Project, Employee],
    synchronize: true,
    logging: false,
  })
}

export default configServer
