import { ClientError } from 'graphql-request';

export const getClientErrorMessages = (error: ClientError): string[] => {
  const { errors = [] } = error.response;
  const messages = errors.map(({ message }) => message);

  return messages;
};
