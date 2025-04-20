import React from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import image from "../assets/undraw_off-road_34hg.svg";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
    const navigate=useNavigate();
function handleLogIn(){
  navigate("/")
}
  return (
    <div className="flex flex-row gap-9 max-sm:gap-0 max-sm:flex-col w-full h-full bg-[#efefef] justify-center items-center absolute">
      <motion.div
        className="w-[40%] max-sm:w-[70%] flex  items-end justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.1 }}
      >
        <img src={image} alt="Task list illustration" />
      </motion.div>

      <motion.form
      onSubmit={(e) => e.preventDefault()} 
        className="w-[40%] max-sm:w-[80%] px-10 h-[70%] max-sm:h-[45%] flex flex-col items-center justify-around border border-white bg-[#f3f3f3] rounded-3xl pt-4"
        style={{ boxShadow: "7px 9px 26px 4px darkgray" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-xl font-bold w-[90%] text-center">
          Create Your Account
        </h1>
        <input
          className="w-[90%] border outline-none h-[12%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
          type="text"
          placeholder="Full Name"
          name="name"
        />
        <input
          className="w-[90%] border outline-none h-[12%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="w-[90%] border outline-none h-[12%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
          type="password"
          placeholder="Password"
          name="password"
        />
        <div className="w-[90%] flex flex-row justify-between items-start h-[15%]">
          <Button
            borderColor=""
            content="Sign Up"
            buttonColor="#0284c7"  // Blue-600
            width="35%"
            onClick={() => {}}
            textColor="white"
            hoverColor="#0369a1"  // Blue-700
          />
          <Button
            content="Sign In"
            buttonColor="transparent"
            width="35%"
            onClick={handleLogIn}
            textColor="#0891b2"  // Cyan-600
            borderColor="#0891b2"
            hoverColor="transparent"  // Cyan-50
          />
        </div>
      </motion.form>
    </div>
  );
};

export default SignUp;