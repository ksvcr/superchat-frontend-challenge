import { useCallback } from 'react';

import { RepositoryParams } from 'shared/types';
import { useGetRepository } from 'shared/hooks';

import { Form } from './components/Form';

export const LinkGenerator = () => {
  const {
    handleGetRepository,
    meta: { error }
  } = useGetRepository();

  const handleSubmit = useCallback(
    (data: RepositoryParams) => {
      handleGetRepository(data);
    },
    [handleGetRepository]
  );

  return (
    <>
      <h2 className="text-2xl mb-4">Github link generator</h2>
      <Form onSubmit={handleSubmit} error={error} />
    </>
  );
};
