import Base from './__Base'
import { Entity, Column, ManyToOne } from 'typeorm'
import Project from './Project'
import { IEmployee } from '../routes/employees/employee.interface'

@Entity()
export default class Employee extends Base {
  constructor (employee: IEmployee) {
    super()
    if (employee) {
      const {
        firstname, lastname, title, salary, startDate, endDate,
      } = employee

      this.firstname = firstname
      this.lastname = lastname
      this.title = title
      this.salary = salary
      this.startDate = startDate
      this.endDate = endDate
    }
  }

  @ManyToOne((type) => Project, (project) => project.employees)
  project: Project

  @Column({ length: 100 })
  firstname: string

  @Column({ length: 100 })
  lastname: string

  @Column({ length: 100 })
  title: string

  @Column('money')
  salary: number

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
