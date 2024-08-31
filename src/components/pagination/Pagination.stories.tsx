// src\components\pagination\Pagination.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pages: {
      control: 'number',
      description: 'Número total de páginas.'
    },
    page: {
      control: 'number',
      description: 'Página actual.'
    },
    onChange: {
      description: 'Función que se ejecutará al cambiar de página.'
    }
  },
  args: {
    pages: 2,
    page: 1,
    onChange: () => {}
  }
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  pages: 2,
  page: 1,
  onChange: () => {}
};