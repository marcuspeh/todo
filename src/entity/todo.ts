import { IsDefined, IsString, validate } from "class-validator"
import CustomError from "../errors/customError"
import { errorCode } from "../errors/errorCode"
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeUpdate, BeforeInsert, JoinColumn, ManyToOne } from "typeorm"
import User from "./user"

@Entity()
export default class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @IsDefined()
    @IsString()
    @Column({ length: 255 })
    title: string

    @IsDefined()
    @IsString()
    @Column()
    task: string

    @IsDefined()
    @ManyToOne(type => User, { eager: true })
    @JoinColumn()
    user: User

    @Column({ default: false })
    isDone: boolean

    @Column({ default: false })
    isDeleted: boolean

    @CreateDateColumn()
    public createAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    public async validateTodo() {
        const errors = await validate(this)

        if (errors.length > 0) {
            throw new CustomError(errorCode.ENTITY_VALIDATION_ERROR, errors.toString())
        }
    }
}