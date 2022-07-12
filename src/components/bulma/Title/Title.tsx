interface TitleProps {
  children?: string,
  isSpaced?: boolean,
  margin?: string,
  size?: 1 | 2 | 3 | 4 | 5 | 6,
}

export const Title = ({ children, isSpaced, margin, size } : TitleProps) => (
  <div className={`title${size ? ` is-size-${size}` : ''} ${margin ?? ''}${isSpaced ? ' is-spaced' : ''}`}>
    {children}
  </div>
);

export const Subtitle = ({ children, isSpaced, size } : TitleProps) => (
  <div className={`subtitle${size ? ` is-size-${size}` : ''}${isSpaced ? ' is-spaced' : ''}`}>
    {children}
  </div>
);