import 'reflect-metadata'
import { DataSource } from 'typeorm'

import Todo from './entity/todo'
import User from './entity/user'
import Token from './entity/token'


require('dotenv').config()
export const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    Todo,
    User,
    Token,
    ],
  synchronize: false,
  logging: false,
  migrations: [
    "src/migration/*.ts"
  ],
  subscribers: [],
})
