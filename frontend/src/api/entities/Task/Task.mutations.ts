import client, { updateCache } from 'api/client';
import schema from './Task.graphql';
import * as TTask from 'api/entities/Task/Task.types';

export const completeTask = async (id: number) => {
  return client.mutate({
    mutation: schema.CompleteTask,
    variables: { id },
    update: updateCache('Task'),
  });
};

export const createTask = async (task: Partial<TTask.Entity>) => {
  return client.mutate({
    mutation: schema.CreateTask,
    variables: { task },
    update: updateCache('Task'),
  });
};
