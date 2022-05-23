import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RepositoryCard } from './RepositoryCard';

export default {
  title: 'Features/RepositoryCard',
  component: RepositoryCard
} as ComponentMeta<typeof RepositoryCard>;

const Template: ComponentStory<typeof RepositoryCard> = args => <RepositoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    name: 'react',
    description: 'description',
    url: '/',
    stargazerCount: 1,
    forkCount: 1,
    owner: {
      login: 'facebook',
      avatarUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP'
    }
  },
  params: {
    owner: '',
    name: 'react',
    color: '#f5f5f5',
    icon: 'pumpkin'
  }
};
