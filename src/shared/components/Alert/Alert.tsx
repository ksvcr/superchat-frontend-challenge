import { ReactNode } from 'react';

type AlertProps = {
  type?: 'info' | 'error' | 'warning' | 'success';
  children: ReactNode;
};

const getTypeClasses = (type: AlertProps['type']) => {
  switch (type) {
    case 'info':
      return 'bg-blue-100 text-blue-700';
    case 'error':
      return 'bg-red-100 text-red-700';
    case 'warning':
      return 'bg-yellow-100 text-yellow-700';
    case 'success':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-blue-100 text-blue-700';
  }
};

export const Alert = ({ children, type = 'info' }: AlertProps) => {
  const className = `${getTypeClasses(type)} p-4 mb-4 rounded-lg`;
  return (
    <div className={className} role="alert">
      {children}
    </div>
  );
};
