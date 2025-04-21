import { MdMoreVert } from "react-icons/md";
import Modal from "../UI/Modal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../util/https";
import TasksType from "../types/type";
import Spinner from "../UI/Spinner";
export default function AllTasks() {
  const [edit, setEdit] = useState<number | undefined>(undefined);
  const [showModal, setShowModal] = useState<{
    name: string | undefined;
    desc: string | undefined;
    type: string | undefined;
    id: number;
  }>();
  
  const [open, setOpen] = useState<boolean>(false);
  const { data} = useLoaderData() as { data: any[] }; 
  const navigation = useNavigation();
  const [tasks,setTasks]=useState(data)
  const {mutate}=useMutation({
    mutationKey:["Delete"],
    mutationFn:deleteTask,
    onSuccess: (_, variables) => {
      const deletedId = variables.id;
      setTasks((prev: any[]) =>
        prev.map((group) => ({
          ...group,
          children: group.children.filter((task) => task.id !== deletedId),
        }))
      );
      setEdit(undefined); // Close dropdown menu if open
    },
  })
  function handleMenu(id: number) {
    if (id === edit) {
      return setEdit(undefined);
    }
    setEdit(id);
  }

  function handleEdit(id: number, desc: string, name: string,type:string) {
    setShowModal({ name, desc, type,id });
    setOpen((prev) => !prev);
    setEdit(undefined);
  }
  function handleDelete(id:number){
    mutate({id});
    }
  function onCloseModal() {
    setOpen(false);
  }
  function handleChangeData(newData:TasksType){
    setTasks(newData)
  }
  if (navigation.state === "loading") {
    return (
      <div className="w-full flex justify-center py-10">
        <Spinner />
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-row  justify-around pt-7 h-fit px-1"
    >
      {tasks?.map((item, index:number) => {
        return (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            key={`${item.type}-${index}`}
            className=" w-[30%] h-fit cursor-pointer"
          >
            <div className=" flex flex-row gap-1.5 items-center px-0.5 py-2 pr-3.5">
              <span
                className="w-[10px] h-[10px] rounded-full"
                style={{
                  backgroundColor:
                    item.type === "Start"
                      ? "blue"
                      : item.type === "Progress"
                      ? "yellow"
                      : "green",
                }}
              ></span>

              <h1 className=" text-lg font-medium">{item.type}</h1>
              <span className="ml-auto text-sm text-gray-400">
                {item.children.length} tasks
              </span>
            </div>
            
            <div className=" bg-[#cfd8ed80] px-4 py-4 rounded-2xl flex flex-col gap-5">
            <AnimatePresence mode="popLayout">
              {item.children.map((element) => {
                  const hoverColor = 
                  item.type === "Start" ? "#E6F2FF" :
                  item.type === "Progress" ? "#FFF9D9" :
                  "#E8F5E9";                           // Soft green
             
                return (
                  <motion.div 
                  key={element.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  layout
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: hoverColor ,
                    zIndex:10
                  }}
                    className=" flex flex-col border-1 rounded-xl border-[#c6d2ec] bg-white px-3 py-2 gap-3"
                  >
                    <div className=" flex flex-row justify-between w-full items-center relative">
                      <h2 className=" text-lg font-medium text-black  capitalize">
                        {element.name}
                      </h2>
                      <MdMoreVert
                        className=" text-lg cursor-pointer"
                        onClick={() => handleMenu(element.id)}
                      />
                      {edit === element.id && (
                        <motion.div
                        animate={{zIndex:10}}
                        whileHover={{zIndex:10,scale:1.1}}
                          style={{
                            right:
                              item.type !== "Completed" ? "-120px" : "-35px",
                          }}
                          className=" flex flex-col w-[120px] absolute -right-30 top-4 rounded-xl p-1 border-1 border-[#c6d2ec] bg-white z-10"
                        >
                          <button
                            onClick={() =>
                              handleEdit(element.id, element.desc, element.name,item.type)
                            }
                            style={{ fontFamily: "sans-serif" }}
                            className="font-medium cursor-pointer rounded-l-sm text-left px-1 hover:bg-[#dde8ff] border-b border-b-[#c6d2ec]"
                          >
                            Edit
                          </button>
                          <button
                          onClick={()=>handleDelete(element.id)}
                            style={{ fontFamily: "sans-serif" }}
                            className="font-medium cursor-pointer rounded-l-sm text-left px-1 hover:bg-[#dde8ff]"
                          >
                            Delete
                          </button>
                        </motion.div>
                      )}
                    </div>
                    <p className=" text-sm text-[#a6a6a6]">{element.desc}</p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            </div>
            
          </motion.div>
        );
      })}
      <AnimatePresence>
        {open && (
          <Modal
          open={open}
          name={showModal?.name}
          desc={showModal?.desc}
          type={showModal?.type}
          id={showModal?.id}
          onClose={onCloseModal}
          setData={handleChangeData}
          data={tasks}
        />
        
        )}
      </AnimatePresence>
    </motion.div>
  );
}
