import { IEmployee } from '../employees/employee.interface'

export interface IProject {
  name: string
  description: string
  budget: number
  employees?: IEmployee[]
  startDate?: string
  endDate?: string
}
