import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TodoTypes } from '../../types/Todo';

export type TodoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  todo: TodoTypes;
  setData: React.Dispatch<React.SetStateAction<TodoTypes[]>>;
};
