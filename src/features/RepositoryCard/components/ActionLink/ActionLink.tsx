import { Children, ReactNode } from 'react';

type ActionLinkProps = {
  href: string;
  icon?: ReactNode;
  count?: number;
  children: ReactNode;
};

export const ActionLink = ({ href, icon, count, children }: ActionLinkProps) => {
  return (
    <a
      href={href}
      className="inline-flex items-center py-2 px-4 text-xs font-medium text-gray-900 bg-white rounded border border-gray-200 focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-gray-300"
    >
      {icon && <div className="mr-2 -ml-1">{icon}</div>}
      {children}
      {count !== undefined && (
        <span className="inline-flex items-center justify-center px-1 ml-2 text-xs bg-gray-200 font-semibold rounded-full">
          {count}
        </span>
      )}
    </a>
  );
};
