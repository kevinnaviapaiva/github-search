import { PropsWithChildren } from "react"

interface ContentProps {
  className?: string,
}

export const Content = ({ children, className } : PropsWithChildren<ContentProps>) => {
  return <div className={`content ${className ?? ''}`}>
    {children}
  </div>
}