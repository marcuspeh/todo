import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255,})
    task: string;

    @Column({default: false})
    done: boolean;

    @Column({type: "timestamptz", default: () => 'CURRENT_TIMESTAMP(3)'})
    create_at: Date;

    @Column({type: "timestamptz", default: () => 'CURRENT_TIMESTAMP(3)', onUpdate: 'CURRENT_TIMESTAMP(3)'})
    updated_at: Date;
}