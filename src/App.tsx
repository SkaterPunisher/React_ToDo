import { useState } from 'react';
import Todo from './components/Todo/Todo';
import { TodoTypes } from './types/Todo';
import { generateKey } from './utils/generateKey';

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState<TodoTypes[]>([]);

  return (
    <>
      <div>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() =>
            setData([
              ...data,
              { checked: false, value: value, id: generateKey(10) },
            ])
          }
        >
          Add
        </button>
      </div>
      <div>
        {data.map((todo) => {
          return <Todo key={todo.id} todo={todo} setData={setData} />;
        })}
      </div>
    </>
  );
}

export default App;
