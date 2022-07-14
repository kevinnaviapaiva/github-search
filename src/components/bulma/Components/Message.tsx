interface MessageProps {
  className?: string, 
  message: string,
  onClose?: Function,
  title: string,
}

export const Message = ({ className, message, onClose, title } : MessageProps) => {
  return (
    <>
      <article className={`message ${className ?? ''}`}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete" onClick={() => {onClose && onClose()}}/>
        </div>
        <div className="message-body">
          {message}
        </div>
      </article>
    </>
  );
}