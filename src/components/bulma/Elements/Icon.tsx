export const Icon = ({ icon } : { icon: string }) => {
  return (
    <span className="icon">
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

