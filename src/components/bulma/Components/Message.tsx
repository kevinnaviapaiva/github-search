import { useState } from "react";

interface MessageProps {
  className?: string,
  message: string,
  title: string,
}

export const Message = ({ className, message, title } : MessageProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      {isActive && <article className={`message ${className ?? ''}`}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {message}
        </div>
      </article>}
    </>
  );
}