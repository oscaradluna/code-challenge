// src\components\input\Input.tsx

type InputProps = {
  /**
   * Identidicador del campo.
   */
  id: string,

  /**
   * Nombre del campo.
   */
  label: string,

  /**
   * Placeholder del campo.
   */
  placeholder?: string,

  /**
   * Función que se ejecutará al cambiar el valor.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  onChange
}) => {
  return (
    <div className="input">
      <label
        htmlFor={id}
        className="input__label"
      >{label}</label>

      <input
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className="input__box"
      />
    </div>
  );
};