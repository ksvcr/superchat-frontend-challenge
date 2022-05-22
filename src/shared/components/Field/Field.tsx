import { ReactNode } from 'react';

type FieldProps = {
  children: ReactNode;
  label?: string;
  id: string;
};

export const Field = ({ children, id, label }: FieldProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
          {label}
        </label>
      )}

      {children}
    </div>
  );
};
