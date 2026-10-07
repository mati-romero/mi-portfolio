import "./Button.css"

function Button({ children, href = "#", variant = "primary",  className = "", download = false, blank = true }) {
  return (
    <a
      href={href}
      className={`custom-button custom-button--${variant} ${className}`}
      target={download ? undefined : blank ? "_blank" : undefined}
      rel={download ? undefined : "noopener noreferrer"}
      download={download || undefined}
    >
      {children}
    </a>
  )
}

export default Button