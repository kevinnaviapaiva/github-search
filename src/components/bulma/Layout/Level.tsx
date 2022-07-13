interface LevelProps {
  children?: JSX.Element | JSX.Element[] | undefined | string,
  className?: string, 
}

const Level = ({ children, className}: LevelProps) => {
  return (
    <div className={`level ${className ?? ''}`}>
      {children}
    </div>
  )
};

const Item = ({ children, className}: LevelProps) => {
  return (
    <div className={`level-item ${className ?? ''}`}>
      {children}
    </div>
  )
};

const Left = ({ children, className}: LevelProps) => {
  return (
    <div className={`level-left ${className ?? ''}`}>
      {children}
    </div>
  )
};

const Right = ({ children, className}: LevelProps) => {
  return (
    <div className={`level-right ${className ?? ''}`}>
      {children}
    </div>
  )
};

Level.Item = Item;
Level.Left = Left;
Level.Right = Right;

export default Level;