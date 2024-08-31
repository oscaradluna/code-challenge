// src\components\button\Button.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Define si el botón será primario o secundario.'
    },
    label: {
      control: 'text',
      description: 'Texto a mostrar.'
    },
    onClick: {
      action: 'clicked',
      description: 'Función que se ejecutará al hacer click el botón.'
    }
  },
  args: {
    primary: true,
    label: 'Buscar',
    onClick: () => {}
  }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Buscar'
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Volver'
};