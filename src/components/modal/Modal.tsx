// src\components\modal\Modal.tsx

import { Icon } from "../icon/Icon";
import { Button } from "../button/Button";

type ModalProps = {
  /**
   * Título del modal
   */
  title: string,

  /**
   * Lista de campos que se mostrarán
   * 
   * @param [].name Nombre del campo
   * @param [].value Valor del campo
   */
  fields: {
    name: string,
    value: string
  }[],

  /**
   * Función que se ejecutará al cerrar el modal
   */
  onClose: () => void
};

export const Modal: React.FC<ModalProps> = ({
  title,
  fields,
  onClose
}) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__head">
          <span
            className="modal__title"
          >{title}</span>

          <div
            className="group cursor-pointer"
            onClick={() => onClose}
          >
            <Icon
              type="xMark"
              pathClassName="modal__close"
            />
          </div>
        </div>

        <div className="modal__body">
          {fields.map((field, index) => (
            <div
              key={index}
              className="modal__field"
            >
              <span
                className="modal__field-name"
              >{field.name}</span>
              
              <span
                className="modal__field-value"
              >{field.value}</span>
            </div>
          ))}
        </div>

        <div className="modal__bottom">
          <Button
            primary={false}
            label="Volver"
            onClick={() => onClose}
          />
        </div>
      </div>
    </div>
  );
};