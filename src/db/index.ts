import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

let connection: Connection;

export const initDb = async () => {
  connection = await createConnection();
};

export const getConnection = (): Connection => connection;
