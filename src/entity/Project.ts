import { Entity, Column, OneToMany } from 'typeorm'
import Base from './__Base'
import { IProject } from '../routes/projects/project.interface'
import Employee from './Employee'

@Entity()
export default class Project extends Base {
  constructor (project: IProject) {
    super()
    if (project) {
      const { name, description, budget, startDate, endDate } = project
      this.name = name
      this.description = description
      this.budget = budget
      this.startDate = startDate
      this.endDate = endDate
    }
  }

  @OneToMany((type) => Employee, (employee) => employee.project)
  employees: Employee[]

  @Column({ length: 100 })
  name: string

  @Column('text')
  description: string

  @Column('money')
  budget: number

  @Column({
    type: 'date',
    nullable: true,
  })
  startDate?: string

  @Column({
    type: 'date',
    nullable: true,
  })
  endDate?: string
}
