import Image from 'next/image';

import { RepositoryData } from 'shared/types';

import { StarIcon } from './components/StarIcon';
import { ForkIcon } from './components/ForkIcon';
import { ActionLink } from './components/ActionLink';

type RepositoryCardProps = {
  data: RepositoryData;
};

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  return (
    <div className="bg-white flex block shadow-md rounded">
      <div className="flex items-center text-center px-8 py-6 bg-blue-200">
        <div>
          <Image width="40" height="40" className="rounded-full" src={data.owner.avatarUrl} alt="" />
          <div className="space-y-1 font-medium dark:text-white">
            <div>{data.owner.login}</div>
          </div>
        </div>
      </div>

      <div className="px-8 pt-6 pb-8">
        <div className="flex items-center mb-4 ">
          <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{data.name}</h2>
        </div>

        {data.description && <p>{data.description}</p>}

        <div className="mt-5 space-x-4">
          <ActionLink href={`${data.url}/fork`} icon={<ForkIcon />} count={data.forkCount}>
            Fork
          </ActionLink>

          <ActionLink href={data.url} icon={<StarIcon />} count={data.stargazerCount}>
            Add Star
          </ActionLink>
        </div>
      </div>
    </div>
  );
};
