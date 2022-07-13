interface HeroProps {
  children?: JSX.Element | JSX.Element[] | undefined | string,
  className?: string, 
}

const Hero = ({ children, className}: HeroProps) => {
  return (
    <div className={`hero ${className ?? ''}`}>
      {children}
    </div>
  )
};

const Head = ({ children, className}: HeroProps) => {
  return (
    <div className={`hero-head ${className ?? ''}`}>
      {children}
    </div>
  )
};

const Body = ({ children, className}: HeroProps) => {
  return (
    <div className={`hero-body ${className ?? ''}`}>
      {children}
    </div>
  )
};

Hero.Body = Body;
Hero.Head = Head;

export default Hero;