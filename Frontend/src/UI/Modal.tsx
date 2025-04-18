import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { motion ,AnimatePresence} from "framer-motion";
const Modal: React.FC<{
  name: string | undefined;
  desc: string | undefined;
  open: boolean | undefined;
  onClose: () => void;
}> = ({ name, desc, open, onClose }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog?.current?.showModal();
    } else {
      dialog?.current?.close();
    }
  }, [open]);

  return createPortal(
    <AnimatePresence>
     <motion.dialog
  ref={dialog}
  initial={{ opacity: 0, y: 20,x:-210 }}
  animate={{ opacity: 1, y: -200,x:-210 }}
  exit={{ opacity: 0, y: -20,x:-210 }}
  transition={{ duration: 0.3 }}
  style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    maxWidth: '90%',
    padding: 0,
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    backgroundColor: 'transparent',
    zIndex: 50
  }}>
     <form 
        method="dialog" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          gap: '20px'
        }}
      >
        <h1 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          margin: 0
        }}>
          Edit Task
        </h1>
        
        <div style={{ marginBottom: '8px' }}>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            fontSize: '14px',
            color: '#4b5563',
            fontWeight: 500
          }}>
            Task Name
          </label>
          <input 
            type="text" 
            placeholder="Name" 
            defaultValue={name}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '14px',
              outline: 'none',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box',
              backgroundColor: '#f9fafb'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '8px' }}>
          <label style={{
            display: 'block',
            marginBottom: '6px',
            fontSize: '14px',
            color: '#4b5563',
            fontWeight: 500
          }}>
            Description
          </label>
          <textarea 
            placeholder="Description" 
            defaultValue={desc}
            style={{
              width: '100%',
              height: '120px',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '14px',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box',
              backgroundColor: '#f9fafb'
            }}
          />
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: '8px'
        }}>
          <Button 
            content="Cancel" 
            width="80px" 
            buttonColor="#f3f4f6" 
            onClick={onClose} 
            textColor="#374151"
          />
          <Button 
            content="Save" 
            width="80px" 
            buttonColor="#3b82f6" 
            onClick={onClose} 
            textColor="white"
          />
        </div>
      </form>
  </motion.dialog>
    </AnimatePresence>,
    
    document.getElementById("modal")!
  );
}

export default Modal