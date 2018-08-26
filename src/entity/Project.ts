import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm'

@Entity()
export default class Project {
  constructor (fields) {
    if (fields) {
      const { name, description, budget } = fields
      this.name = name
      this.description = description
      this.budget = budget
    }
  }

  @PrimaryGeneratedColumn()
  private id: number

  @CreateDateColumn({ type: 'timestamptz' })
  private createdAt: string

  @CreateDateColumn({type: 'timestamptz' })
  private updatedAt: string

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
