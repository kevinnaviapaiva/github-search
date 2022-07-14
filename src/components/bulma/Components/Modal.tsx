import { useEffect, useState } from "react";
import { Box } from "../Elements/Box";

interface ModalProps {
  active: boolean,
  children: React.ReactNode,
}

export const Modal = ({ active, children } : ModalProps) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <Box>
          {children}
        </Box>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={() => setIsActive(false)} />
    </div>
  );
};