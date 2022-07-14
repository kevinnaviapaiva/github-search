import { PropsWithChildren } from "react"

export interface ContainerProps {
  className?: string,
}

export const Container = ({ children, className } : PropsWithChildren<ContainerProps>) => {
  return (
    <div className={`container ${className ?? ''}`}>
      {children}
    </div>
  )
}