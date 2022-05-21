import { ClientError } from 'graphql-request';

import { ApiError } from 'shared/types';

const getClientErrorMessages = (error: ClientError): string[] => {
  const { errors = [] } = error.response;
  const messages = errors.map(({ message }) => message);

  return messages;
};

export const getApiError = (error: unknown): ApiError => {
  let message = 'Something went wrong';
  let statusCode = 500;

  if (error instanceof ClientError) {
    const messages = getClientErrorMessages(error);
    message = messages.join(', ');
    statusCode = !error.response.data.repository ? 404 : 400;
  }

  return { message, statusCode };
};
