import "dotenv/config";

export const PORT: number = Number(process.env.PORT);
export const NODE_ENV:string = String(process.env.NODE_ENV);
export const DB_HOST:string = String(process.env.DB_HOST);
export const DB_PORT:number = Number(process.env.DB_PORT);
export const DB_USERNAME:string = String(process.env.DB_USERNAME);
export const DB_PASSWORD:string = String(process.env.DB_PASSWORD);
export const DB_NAME:string = String(process.env.DB_NAME);

