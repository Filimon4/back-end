import { registerAs } from "@nestjs/config"
import { configDotenv } from "dotenv"
import { DataSource, DataSourceOptions } from "typeorm"

configDotenv();

const config = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'admin',
  database: 'notion_db',
  entities: ['dist/**/*.entity.js'],
  migrations: ['./src/db/migrations/*.{ts,js}'],
  synchronize: false,
}

export default registerAs('database', () => (config))
export const postgresDataSource = new DataSource(config as DataSourceOptions) 