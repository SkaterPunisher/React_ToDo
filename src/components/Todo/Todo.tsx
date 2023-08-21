import { TodoProps } from './Todo.props';
import styles from './Todo.module.css';
import { memo } from 'react';

const Todo = memo(({ todo, setData }: TodoProps) => {
  console.log(todo);

  return (
    <div className={styles.wrapper}>
      <input
        type='checkbox'
        defaultChecked={todo.checked}
        onChange={() =>
          setData((prev) =>
            prev.map((t) =>
              t.id === todo.id ? { ...t, checked: !t.checked } : t
            )
          )
        }
      />
      <div>{todo.value}</div>
      <button
        onClick={() => setData((prev) => prev.filter((t) => t.id !== todo.id))}
      >
        X
      </button>
    </div>
  );
});

export default Todo;
