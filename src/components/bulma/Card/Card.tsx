import { Title } from "../Title/Title";

const Card = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

const Content = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="card-content">
      {children}
    </div>
  );
};

const Header = ({ icon, title } : { icon?: React.ReactNode, title: string }) => {
  return (
    <div className="card-header">
      <p className="card-header-icon">
        <Title size={4}>{title}</Title>
      </p>
      {icon && <button className="card-header-icon">
        {icon}
      </button>}
    </div>
  );
};

const Image = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="card-image">
      {children}
    </div>
  );
};

const Footer = ({ children } : { children: React.ReactNode }) => {
  return (
    <footer className="card-footer">
      {children}
    </footer>
  );
};

const FooterItem = ({ children } : { children: React.ReactNode | any[] }) => {
  return (
    <div className="card-footer-item">
      {children}
    </div>
  )
};



Card.Content = Content;
Card.Footer = Footer;
Card.FooterItem = FooterItem;
Card.Header = Header;
Card.Image = Image;

export default Card;