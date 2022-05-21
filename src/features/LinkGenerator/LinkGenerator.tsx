import { useCallback } from 'react';

import { RepositoryParams } from 'shared/types';
import { useGetRepository } from 'shared/hooks';
import { RepositoryCard } from 'shared/components/RepositoryCard';

import { Form } from './components/Form';

export const LinkGenerator = () => {
  const {
    handleGetRepository,
    meta: { error, data }
  } = useGetRepository();

  const handleSubmit = useCallback(
    (data: RepositoryParams) => {
      handleGetRepository(data);
    },
    [handleGetRepository]
  );

  return (
    <>
      <div className="mb-5">
        <h2 className="text-2xl mb-4">Github link generator</h2>
        <Form onSubmit={handleSubmit} error={error} />
      </div>

      {data && (
        <div className="mb-5">
          <h2 className="text-2xl mb-4">Preview</h2>
          <RepositoryCard data={data} />
        </div>
      )}
    </>
  );
};
