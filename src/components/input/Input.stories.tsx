// src\components\input\Input.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Identidicador del campo.'
    },
    label: {
      control: 'text',
      description: 'Nombre del campo.'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del campo.'
    },
    onChange: {
      description: "Función que se ejecutará al cambiar el valor."
    }
  },
  args: {
   id: 'search',
   label: 'Búsqueda',
   onChange: () => {}
  }
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'search',
  label: 'Búsqueda'
};