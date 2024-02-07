#!/bin/bash
set -e

# Iniciar sesión en PostgreSQL
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE dbGameMarket;
EOSQL

# Ejecutar scripts SQL en la base de datos 'dbGameMarket'
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname dbGameMarket <<-EOSQL
    \i '/scripts/create_schema.sql';
    \i '/scripts/insert_data.sql';
EOSQL
