export enum paths {
  index = '/',
  tasks = '/tasks/',
}

export enum names {
  index = 'index',
  tasks = 'tasks',
}

export const config = {
  name: names.index,
  path: paths.index,
  children: [{
    name: names.tasks,
    path: paths.tasks,
  }],
};
