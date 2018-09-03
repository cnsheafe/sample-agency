import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export default abstract class Base {
  @PrimaryGeneratedColumn()
  private id: number

  @CreateDateColumn({ type: 'timestamptz' })
  private createdAt: string

  @UpdateDateColumn({ type: 'timestamptz' })
  private updatedAt: string
}
