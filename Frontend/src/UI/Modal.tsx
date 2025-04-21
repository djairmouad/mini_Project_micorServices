import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { UpdateTask } from "../util/https";
import TasksType from "../types/type"
const Modal: React.FC<{
  name: string | undefined;
  desc: string | undefined;
  type: string | undefined;
  open: boolean;
  id: number | undefined;
  onClose: () => void;
  setData:(param:TasksType)=>void;
  data:TasksType;
}> = ({ name, desc, type, open, id, onClose,setData,data }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const typeRef = useRef<string>(type || "Start");
  const { mutate } = useMutation({
    mutationKey: ["update", id],
    mutationFn: UpdateTask,
    onError: (error) => {
      console.error("Update failed:", error);
    },
  });

  useEffect(() => {
    if (open) {
      dialog?.current?.showModal();
      typeRef.current = type || "Start";
      if (nameRef.current) nameRef.current.value = name || "";
      if (descRef.current) descRef.current.value = desc || "";
    } else {
      dialog?.current?.close();
    }
  }, [open, name, desc, type]);

  const handleSave = () => {
    mutate({
      id,
      name: nameRef.current?.value || "",
      desc: descRef.current?.value || "",
      type: typeRef.current,
    });
    const newData: TasksType = data.map((element) => {
      const updatedChildren = element.children.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: nameRef?.current?.value || item.name,
            desc: descRef?.current?.value || item.desc,
          };
        }
        return item;
      });
    
      return {
        ...element,
        type: typeRef?.current || element.type,
        children: updatedChildren,
      };
    });
    
  setData(newData);
  onClose();
  };

  return createPortal(
    <AnimatePresence>
      {open && (
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
            <h1 style={{ fontSize: "20px", fontWeight: 600 }}>Edit Task</h1>

            {/* Name */}
            <div>
              <label>Task Name</label>
              <input
                type="text"
                placeholder="Name"
                ref={nameRef}
                defaultValue={name}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "14px",
                  backgroundColor: "#f9fafb",
                }}
              />
            </div>

            {/* Description */}
            <div>
              <label>Description</label>
              <textarea
                ref={descRef}
                placeholder="Description"
                defaultValue={desc}
                style={{
                  width: "100%",
                  height: "120px",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "14px",
                  resize: "vertical",
                  backgroundColor: "#f9fafb",
                }}
              />
            </div>

            {/* Status */}
            <div>
              <label>Status</label>
              <div style={{ display: "flex", gap: "16px" }}>
                {["Start", "Progress", "Completed"].map((status) => (
                  <label key={status}>
                    <input
                      type="radio"
                      name="status"
                      value={status}
                      defaultChecked={type === status}
                      onChange={() => (typeRef.current = status)}
                    />
                    {status}
                  </label>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              <Button
                content="Cancel"
                width="80px"
                buttonColor="#f3f4f6"
                onClick={onClose}
                textColor="#374151"
                borderColor="#f3f4f6"
                hoverColor="#e5e7eb"
              />
              <Button
                content="Save"
                width="80px"
                buttonColor="#3b82f6"
                textColor="white"
                onClick={handleSave}
                borderColor="#3b82f6"
                hoverColor="#2563eb"
              />
            </div>
          </form>
        </motion.dialog>
      )}
    </AnimatePresence>,
    document.getElementById("modal")!
  );
};

export default Modal;
