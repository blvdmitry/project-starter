const db = {};

export const get = (name, id) => db[name][id];

export const add = (name, id, data) => {
  if (!db[name]) db[name] = {};
  const nextData = { ...data, id };

  db[name][id] = nextData;
  return nextData;
};

export const remove = (name, id) => {
  if (!get(name, id)) return;
  delete db[name][id];
};

export const getList = (name, ids) => ids.map(id => get(name, id));
export const getAll = (name) => getList(name, Object.keys(db[name]));
export const update = (name, id, partialData) => add(name, id, { ...get(name, id), ...partialData });
