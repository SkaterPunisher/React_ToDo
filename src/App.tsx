import { useState } from 'react';
import Todo from './components/Todo/Todo';
import { TodoTypes } from './types/Todo';
import Input from './components/Input/Input';

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState<TodoTypes[]>([]);

  return (
    <>
      <Input value={value} setValue={setValue} setData={setData} />

      {data.map((todo) => {
        return <Todo key={todo.id} todo={todo} setData={setData} />;
      })}
    </>
  );
}

export default App;
