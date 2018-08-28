import { Entity, Column } from 'typeorm'
import Base from './__Base';
import { ICreateOneProjectPayload as IPayload } from '../routes/projects/project.interface';

@Entity()
export default class Project extends Base {
  constructor (fields: IPayload) {
    super()
    if (fields) {
      const { name, description, budget } = fields
      this.name = name
      this.description = description
      this.budget = budget
    }
  }

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
    nullable: true
  })
  endDate?: string
}
