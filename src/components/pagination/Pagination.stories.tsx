// src\components\pagination\Pagination.stories.tsx

import { useState } from 'react';
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
    onChange: () => {}
  }
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.page);

  return (
    <Pagination
      {...args}
      page={currentPage}
      onChange={(newCurrentPage) => setCurrentPage(newCurrentPage)}
    />
  )
};

export const Default = Template.bind({});
Default.args = {
  pages: 2,
  page: 1
};