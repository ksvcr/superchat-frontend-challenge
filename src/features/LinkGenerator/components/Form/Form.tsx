import { useState, ChangeEvent, SyntheticEvent } from 'react';

import { TextInput } from 'shared/components/TextInput';
import { Button } from 'shared/components/Button';
import { Alert } from 'shared/components/Alert';
import { Field } from 'shared/components/Field';
import { Select, Option } from 'shared/components/Select';
import { ICONS } from 'shared/constants/icons';

import { RepositoryParams } from 'shared/types';

type FormProps = {
  error?: string;
  loading?: boolean;
  onSubmit: (data: RepositoryParams) => void;
};

const options: Option[] = Object.entries(ICONS).map(([value, label]) => ({ value, label }));

export const Form = ({ error, loading, onSubmit }: FormProps) => {
  const [values, setValues] = useState<RepositoryParams>({
    name: '',
    owner: '',
    color: '#9dc1fb',
    icon: 'pumpkin'
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <form className="shadow-md rounded px-8 pt-6 pb-8 bg-white" onSubmit={handleSubmit}>
      <Field label="Owner" id="owner">
        <TextInput required id="owner" value={values.owner} onChange={handleChange} />
      </Field>
      <Field label="Repository name" id="name">
        <TextInput required id="name" value={values.name} onChange={handleChange} />
      </Field>
      <Field label="Icon" id="icon">
        <Select id="icon" options={options} value={values.icon} onChange={handleChange} />
      </Field>
      <Field label="Color" id="color">
        <input
          className="border rounded bg-white"
          type="color"
          id="color"
          value={values.color}
          onChange={handleChange}
        />
      </Field>
      <Button loading={loading} type="submit">
        {loading ? 'Generating...' : 'Generate'}
      </Button>

      {error && (
        <div className="mt-4">
          <Alert type="error">{error}</Alert>
        </div>
      )}
    </form>
  );
};
