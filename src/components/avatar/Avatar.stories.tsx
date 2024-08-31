// src\components\avatar\Avatar.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = () => <Avatar />;

export const Default = Template.bind({});