interface ButtonProps {
  children?: React.ReactNode,
  className?: string,
  onClick?: Function,
};

export const Button = ({ className, children, onClick } : ButtonProps) => {
  return (
    <button 
      className={`button ${className}`} 
      onClick={() => {
        if(onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  )
}