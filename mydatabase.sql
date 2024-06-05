-- PostgreSQL SQL script to create a database and a table
CREATE DATABASE mydatabase;

\c mydatabase;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    city VARCHAR(100)
);
