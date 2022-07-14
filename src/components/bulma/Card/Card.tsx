import { PropsWithChildren } from "react";
import { Button } from "../Elements/Button";
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

const Header = ({ icon, title, onClick } : { icon?: React.ReactNode, onClick?: Function, title: string }) => {
  return (
    <div className="card-header">
      <p className="card-header-title">
        <Title size={4}>{title}</Title>
      </p>
      {icon && <Button className="card-header-icon" onClick={() => { onClick && onClick() }}>{icon}</Button>}
    </div>
  );
};

const Image = ({ children, className } : PropsWithChildren<{ className: string }>) => {
  return (
    <div className={`card-image ${className ?? ''}`}>
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