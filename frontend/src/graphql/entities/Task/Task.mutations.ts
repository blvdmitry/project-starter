import client from 'graphql/client';
import { complete, create } from './Task.schema';

const update = (cache: any) => {
  Object.keys(cache.data.data).forEach((key) => {
    key.match(/^Task/) && cache.data.delete(key);
  });

  client.reFetchObservableQueries();
};

export const completeTask = async (id: number) => {
  return client.mutate({
    mutation: complete,
    variables: { id },
    update,
  });
};

export const createTask = async (task: any) => {
  return client.mutate({
    mutation: create,
    variables: { task },
    update,
  });
};
