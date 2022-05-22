import { SelectHTMLAttributes, useMemo } from 'react';

export type Option = { value: string; label: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
};

export const Select = ({ options, ...props }: SelectProps) => {
  const selectOptions = useMemo(() => {
    return options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  }, [options]);

  return (
    <select className="border rounded w-full py-2 px-3 text-gray-700" {...props}>
      {selectOptions}
    </select>
  );
};
