interface IconProps {
  className?: string,
  icon: string,
}

export const Icon = ({ className, icon } : IconProps) => {
  return (
    <span className={`icon ${className ?? ''}`}>
      <i className={icon}/>
    </span>
  );
};

export const IconText = ({ icon, text } : { icon: string, text: string}) => {
  return (
    <span className="icon-text">
      <Icon icon={icon} />
      <span>{text}</span>
    </span>
  );
};

