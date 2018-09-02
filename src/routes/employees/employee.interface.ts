import Project from "../../entity/Project";

export interface IEmployee {
  firstname: string
  lastname: string
  title: string
  salary: number
  startDate?: string
  endDate?: string
  project?: Project
}