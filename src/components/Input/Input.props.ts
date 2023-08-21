import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TodoTypes } from '../../types/Todo';

export type InputProps = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<TodoTypes[]>>;
};
