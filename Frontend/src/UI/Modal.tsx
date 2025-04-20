import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { UpdateTask } from "../util/https";


const Modal: React.FC<{
  name: string,
  desc: string,
  type: string,
  open: boolean,
  id: number ,
  onClose: () => void;
}> = ({ name, desc, type, open,id, onClose }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [taskName, setTaskName] = useState(name || "");
  const [taskDesc, setTaskDesc] = useState(desc || "");
  const [taskType, setTaskType] = useState(type || "Start");
 const {mutate}=useMutation({
  mutationKey:["update",id],
  mutationFn:UpdateTask
 })


  useEffect(() => {
    if (open) {
      dialog?.current?.showModal();
      // Reset form when opening
      setTaskName(name || "");
      setTaskDesc(desc || "");
      setTaskType(type || "start");
    } else {
      dialog?.current?.close();
    }
  }, [open, name, desc, type]);
 

  const handleSave = () => {
    mutate({id,name,desc,type})
  };
  

  return createPortal(
    <AnimatePresence>
      <motion.dialog
        ref={dialog}
        initial={{ opacity: 0, y: 20, x: -210 }}
        animate={{ opacity: 1, y: -250, x: -210 }}
        exit={{ opacity: 0, y: -20, x: -210 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          maxWidth: "90%",
          padding: 0,
          border: "none",
          borderRadius: "12px",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          backgroundColor: "transparent",
          zIndex: 50,
        }}
      >
        <form
          method="dialog"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "12px",
            gap: "20px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#1f2937",
              margin: 0,
            }}
          >
            Edit Task
          </h1>

          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                color: "#4b5563",
                fontWeight: 500,
              }}
            >
              Task Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
                backgroundColor: "#f9fafb",
              }}
            />
          </div>

          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                color: "#4b5563",
                fontWeight: 500,
              }}
            >
              Description
            </label>
            <textarea
              placeholder="Description"
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              style={{
                width: "100%",
                height: "120px",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
                backgroundColor: "#f9fafb",
              }}
            />
          </div>

          {/* Status Radio Buttons */}
          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "14px",
                color: "#4b5563",
                fontWeight: 500,
              }}
            >
              Status
            </label>
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="status"
                  value="start"
                  checked={taskType === "Start"}
                  onChange={() => setTaskType("Start")}
                  style={{
                    accentColor: "#3b82f6",
                    width: "16px",
                    height: "16px",
                    cursor: "pointer",
                  }}
                />
                <span>Start</span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="status"
                  value="progress"
                  checked={taskType === "Progress"}
                  onChange={() => setTaskType("Progress")}
                  style={{
                    accentColor: "#3b82f6",
                    width: "16px",
                    height: "16px",
                    cursor: "pointer",
                  }}
                />
                <span>Progress</span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="status"
                  value="completed"
                  checked={taskType === "Completed"}
                  onChange={() => setTaskType("completed")}
                  style={{
                    accentColor: "#3b82f6",
                    width: "16px",
                    height: "16px",
                    cursor: "pointer",
                  }}
                />
                <span>Completed</span>
              </label>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            <Button
              content="Cancel"
              width="80px"
              buttonColor="#f3f4f6"
              onClick={onClose}
              textColor="#374151"
              borderColor="#f3f4f6" // Added borderColor
              hoverColor="#e5e7eb" // Added hoverColor
            />
            <Button
  content="Save"
  width="80px"
  buttonColor="#3b82f6"
  textColor="white"
  onClick={handleSave} // Call handleSave function
  borderColor="#3b82f6" // Added borderColor
  hoverColor="#2563eb" // Added hoverColor
/>

          </div>
        </form>
      </motion.dialog>
    </AnimatePresence>,
    document.getElementById("modal")!
  );
};

export default Modal;
