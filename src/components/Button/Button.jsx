import './Button.css'

function Button({ 
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false 
}) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  )
}

export default Button