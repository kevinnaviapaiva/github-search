interface MediaProps {
  children?: JSX.Element | JSX.Element[] | undefined | string,
  className?: string, 
}

const Media = ({ children, className}: MediaProps) => {
  return (
    <article className={`media ${className ?? ''}`}>
      {children}
    </article>
  )
};

const Content = ({ children, className}: MediaProps) => {
  return (
    <div className={`media-content ${className ?? ''}`}>
      {children}
    </div>
  )
};

const Left = ({ children, className}: MediaProps) => {
  return (
    <div className={`media-left ${className ?? ''}`}>
      {children}
    </div>
  )
};

const Right = ({ children, className}: MediaProps) => {
  return (
    <div className={`media-right ${className ?? ''}`}>
      {children}
    </div>
  )
};

const List = ({ children, className}: MediaProps) => {
  return (
    <div className={`media-list ${className ?? ''}`}>
      {children}
    </div>
  )
};

Media.Content = Content;
Media.Left = Left;
Media.Right = Right;
Media.List = List;

export default Media;