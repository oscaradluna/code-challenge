// src\components\select\Select.tsx

import { useState } from "react";
import classNames from "classnames";
import { Icon } from "../icon/Icon";

type SelectProps = {
  /**
   * Lista de opciones que se mostrarán
   * 
   * @param [].value Valor de la opción
   * @param [].label Texto de la opción
   */
  options: {
    value: string,
    label: string
  }[],

  /**
   * Valor de la opción seleccionada
   */
  value: string,

  /**
   * Función que se ejecutará al cambiar de opción
   * 
   * @returns Valor de la nueva opción seleccionada
   */
  onChange: (value: string) => void
};

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const optionSelected = options.find(option => option.value === value);

  const handleOptionSelected = (value: string) => {
    onChange(value);
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <div
        className="select"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="select__label"
        >{optionSelected?.label}</span>

        <Icon
          type="chevronDown"
          pathClassName={classNames(
            'select__icon',
            {'rotate-180': isOpen}
          )}
        />
      </div>
      
      <div
        className={classNames(
          'select__list',
          {'h-0 opacity-0': !isOpen}
        )}
      >
        {options.map((option) => (
          <div
            className={classNames(
              'group',
              'select__option',
              {'bg-primary border-primary': option.value === value}
            )}
            onClick={() => handleOptionSelected(option.value)}
          >
            <span
              className={classNames(
                'select__label',
                'select__option-label',
                {'text-dark': option.value === value}
              )}
            >{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};