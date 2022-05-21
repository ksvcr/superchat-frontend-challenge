import { useState, ChangeEvent, SyntheticEvent } from 'react';

import { TextInput } from 'shared/components/TextInput';

import { RepositoryParams } from 'shared/types';

type FormProps = {
  error?: string;
  onSubmit: (data: RepositoryParams) => void;
};

export const Form = ({ error, onSubmit }: FormProps) => {
  const [values, setValues] = useState<RepositoryParams>({
    name: '',
    owner: '',
    color: '#3b82f6'
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setValues(values => {
      return {
        ...values,
        [id]: value
      } as RepositoryParams;
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owner">
          Owner
        </label>
        <TextInput required id="owner" value={values.owner} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Repository name
        </label>
        <TextInput required id="name" value={values.name} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
          Color
        </label>
        <input type="color" required id="color" value={values.color} onChange={handleChange} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Generate link
        </button>
      </div>

      {error && <pre className="text-red-400">{error}</pre>}
    </form>
  );
};
