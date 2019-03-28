import React from 'react';
import { graphql } from 'react-apollo';
import Button from 'components/Button';
import client from 'graphql/client';
import s from './Tasks.pcss';
import { query, complete, create } from './Tasks.schema';
import * as T from './Tasks.types';

const Task = (props: T.Task) => {
  const handleClick = async () => {
    await client.mutate({
      mutation: complete,
      variables: { id: props.id },
    });
  };

  return (
    <div className={s.task}>
      <div className={s.content}>
        <div className={s.title}>{ props.title }</div>
        <div className={s.text}>{ props.description }</div>
      </div>
      <Button text="Complete" onClick={handleClick} />
    </div>
  );
};

const Tasks = (props: T.Props) => {
  const { data } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await client.mutate({
      mutation: create,
      variables: { task: { title: value } },
    });
    setValue('');
  };

  return (
    <div className={s.root}>
      <div className={s.inner}>
        { data && data.tasks && data.tasks.map(task => <Task {...task} />) }

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder="Enter task name"
            onChange={handleChange}
            className={s.field}
          />
        </form>
      </div>
    </div>
  );
};

export default graphql(query)(Tasks);
