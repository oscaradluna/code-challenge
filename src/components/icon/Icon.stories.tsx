// src\components\icon\Icon.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['chevronDown', 'chevronLeft', 'chevronRight', 'eye', 'funnel', 'trash', 'xMark'],
      description: 'Tipo de icono que se mostrará.'
    },
    pathClassName: {
      control: 'text',
      description: 'Nombre de la clase que tendrá el path del svg.'
    }
  },
  args: {
    type: 'chevronDown',
    pathClassName: 'fill-primary'
  }
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const ChevronDown = Template.bind({});
ChevronDown.args = {
  type: 'chevronDown',
  pathClassName: 'fill-active'
}

export const ChevronLeft = Template.bind({});
ChevronLeft.args = {
  type: 'chevronLeft',
  pathClassName: 'fill-active'
}

export const ChevronRight = Template.bind({});
ChevronRight.args = {
  type: 'chevronRight',
  pathClassName: 'fill-active'
}

export const Eye = Template.bind({});
Eye.args = {
  type: 'eye',
  pathClassName: 'stroke-active'
}

export const Funnel = Template.bind({});
Funnel.args = {
  type: 'funnel',
  pathClassName: 'fill-active'
}

export const Trash = Template.bind({});
Trash.args = {
  type: 'trash',
  pathClassName: 'stroke-active'
}

export const XMark = Template.bind({});
XMark.args = {
  type: 'xMark',
  pathClassName: 'fill-active'
}