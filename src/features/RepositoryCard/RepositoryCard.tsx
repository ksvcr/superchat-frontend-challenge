import Image from 'next/image';

import { RepositoryData, RepositoryParams } from 'shared/types';
import { ICONS } from 'shared/constants/icons';

import { StarIcon } from './components/StarIcon';
import { ForkIcon } from './components/ForkIcon';
import { ActionLink } from './components/ActionLink';

type RepositoryCardProps = {
  data: RepositoryData;
  params: RepositoryParams;
};

export const RepositoryCard = ({ data, params }: RepositoryCardProps) => {
  return (
    <div className="bg-white flex block shadow-md rounded">
      <div className="flex items-center text-center text-4xl px-8 py-6" style={{ backgroundColor: params.color }}>
        {ICONS[params.icon]}
      </div>

      <div className="px-8 pt-6 pb-8">
        <div className="flex items-center mb-4 ">
          <h2 className="text-xl font-bold leading-none text-gray-900">{data.name}</h2>
          <div className="ml-auto flex items-center">
            <div className="rounded-full border border-gray-200 overflow-hidden">
              <Image width="20" height="20" layout="raw" className="block" src={data.owner.avatarUrl} alt="" />
            </div>

            <div className="ml-2 text-xs"> {data.owner.login}</div>
          </div>
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
