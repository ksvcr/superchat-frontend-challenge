export type ApiError = {
  message: string;
  statusCode: number;
};

export type ErrorProps = { error: ApiError };
