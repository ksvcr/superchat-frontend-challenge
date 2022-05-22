import { InputHTMLAttributes } from 'react';

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>;

export const TextInput = ({ value, id, onChange, ...props }: TextInputProps) => {
  return (
    <input
      type="text"
      className="border rounded w-full py-2 px-3 text-gray-700"
      value={value}
      id={id}
      onChange={onChange}
      {...props}
    />
  );
};
