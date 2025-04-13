import { BiTask } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import image from "../assets/undraw_checklist_bwxa.svg"
import profile from "../assets/Screenshot 2025-04-12 231107.png"
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
export default function Task() {
  return (
    <div className="absolute w-full h-full flex bg-[#f4f4f4]">
      <ul className="w-[20%] flex flex-col items-center bg-[#fcfcfc] pt-4 gap-2 gap-5">
        <div className=" w-[80%] pb-5">
            <img src={image}/>
        </div>
        <li className="w-full flex justify-center">
          <NavLink
            to="/task"
            className={({ isActive }) =>
              `flex items-center gap-2 w-[80%] p-2 rounded ${
                isActive ? "bg-[#efefef] text-black" : "text-[#afb4b8]"
              }`
            
            }
          >
            <BiTask />
            Tasks
          </NavLink>
        </li>
        <li className="w-full flex justify-center">
          <NavLink
            to="createTask"
            className={({ isActive }) =>
              `flex items-center gap-2 w-[80%] p-2 rounded ${
               isActive ? "bg-[#efefef] text-black" : "text-[#afb4b8]"
              }`
            }
          >
            <FaPlus />
            Create Task
          </NavLink>
        </li>
      </ul>
      <div className="w-[80%] flex-col ">
       <header className=" flex flex-row w-full justify-between bg-[#fcfcfc] h-[10%] pl-3">
        <ul className="flex flex-row items-center w-[25%] relative">
        <CiSearch className=" absolute top-[50%] w-[10%] -translate-y-[50%] " />
        <input type="text" placeholder=" Search Task..." className=" outline-none w-full bg-[#f4f4f4] py-1  px-6 rounded-xl text-[#9ea1a6]"/>
        </ul>
        <ul className=" flex flex-row gap-1.5 items-center  w-[11%]">
            <li><IoIosHelpCircleOutline className=" text-2xl" /></li>
            <li> <img className=" w-[50px] h-[50px] rounded-full" src={profile}/></li>
        </ul>
       </header>
      </div>
    </div>
  );
}
