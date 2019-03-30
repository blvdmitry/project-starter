import React from 'react';
import { graphql } from 'react-apollo';
import Button from 'components/Button';
import { createTask, completeTask } from 'graphql/entities/Task/Task.mutations';
import * as TTask from 'graphql/entities/Task/Task.types';
import { handleError } from 'graphql/utilities';
import s from './Tasks.pcss';
import { query } from './Tasks.schema';
import * as T from './Tasks.types';

const Task = (props: TTask.Entity) => {
  const handleClick = async () => {
    return completeTask(props.id);
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

    await createTask({ title: value });
    setValue('');
  };

  const handleErrorClick = async () => {
    try {
      await completeTask(0);
    } catch (e) {
      handleError(e, e => console.log(e));
    }
  };

  return (
    <div className={s.root}>
      <div className={s.inner}>
        { data && data.tasks && data.tasks.map(task => <Task key={task.id} {...task} />) }

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder="Enter task name"
            onChange={handleChange}
            className={s.field}
          />
        </form>

        <Button className={s.error} text="Trigger error" onClick={handleErrorClick} />
      </div>
    </div>
  );
};

export default graphql(query)(Tasks);
