import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();
// TODO: Esta data no esta siendo utilizada ya que no se esta usando una base de datos
const pool = new Pool({
  user: process.env.PGUSER ?? 'postgres',
  host: process.env.PGHOST ?? 'localhost',
  database: process.env.PGDATABASE ?? 'dbGameMarket_auth',
  password: process.env.PGPASSWORD ?? 'admin',
  port: parseInt(process.env.PGPORT ?? '5432', 10),
});