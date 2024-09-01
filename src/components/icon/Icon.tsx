// src\components\icon\Icon.tsx

import React from 'react';

import { CaretUpDown } from '../../assets/icons/caretUpDown';
import { ChevronDown } from '../../assets/icons/chevronDown';
import { ChevronLeft } from '../../assets/icons/chevronLeft';
import { ChevronRight } from '../../assets/icons/chevronRight';
import { Eye } from '../../assets/icons/eye';
import { Funnel } from '../../assets/icons/funnel';
import { Trash } from '../../assets/icons/trash';
import { XMark } from '../../assets/icons/xMark';

type IconProps = {
  /**
   * Tipo ('caretUpDown', 'chevronDown', 'chevronLeft', 'chevronRight', 'eye', 'funnel', 'trash' o 'xMark')
   */
  type: 'caretUpDown' | 'chevronDown' | 'chevronLeft' | 'chevronRight' | 'eye' | 'funnel' | 'trash' | 'xMark',

  /**
   * Nombre de la clase que tendrá el path del svg
   */
  pathClassName: string
};

export const Icon: React.FC<IconProps> = ({
  type,
  pathClassName
}) => {
  const selectedSvg = {
    caretUpDown: CaretUpDown,
    chevronDown: ChevronDown,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    eye: Eye,
    funnel: Funnel,
    trash: Trash,
    xMark: XMark
  }[type];

  return React.createElement(selectedSvg, { pathClassName });
};