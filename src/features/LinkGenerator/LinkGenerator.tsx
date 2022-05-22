import { useCallback, useState } from 'react';

import { RepositoryParams } from 'shared/types';
import { useGetRepository } from 'shared/hooks';
import { RepositoryCard } from 'shared/components/RepositoryCard';
import { Spinner } from 'shared/components/Spinner';

import { Form } from './components/Form';
import { GeneratedLink } from './components/GeneratedLink';
import { generateLink } from 'shared/utils';

export const LinkGenerator = () => {
  const [link, setLink] = useState<string>();

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

      {data && (
        <div className="mb-10">
          <h2 className="text-2xl mb-4">Preview</h2>
          <RepositoryCard data={data} />
        </div>
      )}
    </>
  );
};
