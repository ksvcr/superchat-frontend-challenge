import { ReactNode, ButtonHTMLAttributes } from 'react';

import { Spinner } from 'shared/components/Spinner';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: ReactNode;
};

export const Button = ({ loading, children, ...props }: ButtonProps) => {
  return (
    <button
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center inline-flex items-center"
      {...props}
    >
      {loading && (
        <div className="inline">
          <Spinner size="sm" />
        </div>
      )}

      {children}
    </button>
  );
};
