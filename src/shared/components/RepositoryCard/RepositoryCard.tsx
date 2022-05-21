import { RepositoryData } from 'shared/types';

type RepositoryCardProps = {
  data: RepositoryData;
};

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  return (
    <a
      href={data.url}
      target="_blank"
      className="bg-white block bg-white shadow-md hover:shadow-xl rounded px-8 pt-6 pb-8"
      rel="noreferrer"
    >
      {data.description}
    </a>
  );
};
