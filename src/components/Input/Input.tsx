import { memo } from 'react';
import { generateKey } from '../../utils/generateKey';
// import styles from './Input.module.css';

import { InputProps } from './Input.props';

const Input = memo(({ value, setValue, setData }: InputProps) => {
  console.log('input');

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() =>
          setData((prev) => [
            ...prev,
            { checked: false, value: value, id: generateKey(10) },
          ])
        }
      >
        Add
      </button>
    </div>
  );
});

export default Input;
