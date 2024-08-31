// src\components\badge\Badge.tsx

type BadgeProps = {
  /**
   * Texto a mostrar
   */
  label: string,

  /**
   * Color de fondo ('success', 'warning' o 'danger')
   */
  status: 'success' | 'warning' | 'danger',
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  status
}) => {
  const statusClass = {
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger'
  }[status];

  return (
    <div className={`badge ${statusClass}`}>
      <span
        className="badge__label"
      >{ label }</span>
    </div>
  );
};