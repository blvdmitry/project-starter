import { ErrorResponse } from 'apollo-link-error';
import { GraphQLError } from 'graphql';

type THandleError = (gqlError: ErrorResponse, callback: (error: GraphQLError) => void) => void;

export const handleError: THandleError = (gqlError, callback) => {
  if (!gqlError.graphQLErrors) return;

  gqlError.graphQLErrors.forEach((error: GraphQLError) => callback(error));
};
