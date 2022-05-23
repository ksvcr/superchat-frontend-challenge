import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

import type { RepositoryCardProps } from 'features/RepositoryCard';

import { RepositoryParams } from 'shared/types';
import { useGetRepository } from 'shared/hooks';
import { generateLink } from 'shared/utils';
import { Spinner } from 'shared/components/Spinner';

import { Form } from './components/Form';
import type { GeneratedLinkProps } from './components/GeneratedLink';

const RepositoryCard = dynamic<RepositoryCardProps>(
  () => import('features/RepositoryCard').then(mod => mod.RepositoryCard),
  { loading: () => <Spinner /> }
);

const GeneratedLink = dynamic<GeneratedLinkProps>(
  () => import('./components/GeneratedLink').then(mod => mod.GeneratedLink),
  { loading: () => <Spinner /> }
);

export const LinkGenerator = () => {
  const [link, setLink] = useState<string>();
  const [params, setParams] = useState<RepositoryParams>();

  const {
    handleGetRepository,
    meta: { error, data, isLoading }
  } = useGetRepository();

  const handleSubmit = useCallback(
    async (data: RepositoryParams) => {
      const res = await handleGetRepository(data);

      if (res) {
        const generatedLink = generateLink(data);
        setLink(generatedLink);
        setParams(data);
      }
    },
    [handleGetRepository]
  );

  return (
    <>
      <div className="mb-10">
        <h2 className="text-2xl mb-4">Github link generator</h2>
        <Form onSubmit={handleSubmit} loading={isLoading} error={error} />
      </div>

      {link && (
        <div className="mb-10">
          <h2 className="text-2xl mb-4">Generated link</h2>
          <GeneratedLink href={link}>{link}</GeneratedLink>
        </div>
      )}

      {data && params && (
        <div className="mb-10">
          <h2 className="text-2xl mb-4">Preview</h2>
          <RepositoryCard data={data} params={params} />
        </div>
      )}
    </>
  );
};
