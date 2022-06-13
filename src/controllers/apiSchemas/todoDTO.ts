import { IsDefined, IsString } from 'class-validator'

export class todoIdDTO {
    @IsDefined()
    @IsString()
    id: string
}

export class newTodoDTO {    
    @IsDefined()
    @IsString()
    task: string
}

export class updateTodoDTO {
    @IsDefined()
    @IsString()
    id: string
    
    @IsDefined()
    @IsString()
    task: string
}