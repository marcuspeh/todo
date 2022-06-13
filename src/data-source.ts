import 'reflect-metadata';
import { DataSource } from 'typeorm';

import todo from './entity/todo'


export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    todo
    ],
  synchronize: false,
  logging: false,
  migrations: [
    "src/migration/**/*.ts"
  ],
  subscribers: [],
});
