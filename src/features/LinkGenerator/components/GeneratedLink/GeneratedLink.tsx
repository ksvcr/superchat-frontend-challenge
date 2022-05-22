import { ReactNode } from 'react';
import Link from 'next/link';

import { Button } from 'shared/components/Button';
import { copyToClipboard } from 'shared/utils/copyToClipboard';

type GeneratedLinkProps = {
  href: string;
  children: ReactNode;
};

export const GeneratedLink = ({ children, href }: GeneratedLinkProps) => {
  const handleCopy = () => {
    copyToClipboard(href);
  };

  return (
    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white">
      <div className="truncate mb-4">
        <Link href={href}>
          <a className="text-lg text-blue-500 underline text-ellipsis overflow-hidden">{children}</a>
        </Link>
      </div>

      <Button type="button" onClick={handleCopy}>
        Copy
      </Button>
    </div>
  );
};
