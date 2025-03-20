export interface IHTTPError extends Error {
  statusCode: number;
}

export interface IMongooseError extends Error {
  code: number;
}
