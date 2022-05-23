import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from './Alert';

export default {
  title: 'Shared/Alert',
  argTypes: {
    children: {
      control: { type: 'text' }
    }
  },
  component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  children: 'content'
};
