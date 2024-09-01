// src/components/button/Button.tsx

type ButtonProps = {
  /**
   * Define si el botón será primario o secundario
   */
  primary: boolean,

  /**
   * Texto a mostrar
   */
  label: string,

  /**
   * Función que se ejecutará al hacer click el botón
   */
  onClick?: () => void
};

export const Button: React.FC<ButtonProps> = ({
  primary,
  label,
  onClick
}) => {
  const primaryClass = primary
    ? 'button--primary'
    : 'button--secondary';

  return (
    <button
      type="button"
      className={`button ${primaryClass}`}
      onClick={onClick}
    >{label}</button>
  );
};