export const Column = (
  { children, span, offset} : { 
    children: React.ReactNode,
    span?: number,
    offset?: number,
  }) => {
  return (
    <div className={`column${span ? ` is-${span}` : ''}${offset ? ` is-offset=${offset}` : ''}`}>
      {children}
    </div>
  )
}

export const Row = ({ multiLine = false, children, isDesktop } : { children: JSX.Element | JSX.Element[], isDesktop?: boolean, multiLine?: boolean }) => {
  return (
    <div className={`columns${multiLine ? ' is-multiline': ''}${isDesktop ? ' is-dektop': ''}`}>
      {children}
    </div>
  )
}