import { InputHTMLAttributes } from 'react';

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const TextInput = ({ ...props }: TextInputProps) => {
  return <input type="text" className="border rounded w-full py-2 px-3 text-gray-700" {...props} />;
};
