
import { Pool } from 'pg';

console.log('Conectando a PostgreSQL con la siguiente configuración:');
console.log(`Host: ${process.env.PGHOST ?? 'localhost'}`);
console.log(`Database: ${process.env.PGDATABASE ?? 'dbGameMarket'}`);
console.log(`User: ${process.env.PGUSER ?? 'postgres'}`);
console.log(`Password: ${process.env.PGPASSWORD ? '********' : 'postgres'}`); // Oculta la contraseña
console.log(`Port: ${process.env.PGPORT ?? '5432'}`);


export const pool = new Pool({
  // configuración de la conexión
  user: process.env.PGUSER ?? 'postgres',
  host: process.env.PGHOST ?? 'db',
  database: process.env.PGDATABASE ?? 'dbGameMarket',
  password: process.env.PGPASSWORD ?? 'postgres',
  port: parseInt(process.env.PGPORT ?? '5432', 10),
});

export default pool;