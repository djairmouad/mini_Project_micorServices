import React, { FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import image from "../assets/undraw_task-list_qe3p.svg";
import {useNavigate} from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {loginFunc} from "../util/https"
const Login: React.FC = () => {
  const navigate=useNavigate()
  const {mutate}=useMutation({
    mutationFn:loginFunc,
    mutationKey:["login"],
    onSuccess:(data)=>{
     const token= data.token
     if(data.success){
      localStorage.setItem("token",token);
      return navigate("/task/AllTasks");
     }else{
      navigate("/");
     }
    }
  })
  function handleSignUp(){
    navigate("SignUp")
  }
  function handleLogin(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const Fd=new FormData(e.currentTarget);
    const data=Object.fromEntries( Fd.entries())
    const email:string=data.email;
    const password:string=data.password;
    mutate({email,password});
  }
  return (
    <div className="flex flex-col w-full h-full bg-[#efefef] justify-center items-center absolute">
      <motion.div
        className="w-[25%] max-sm:w-[70%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" ,type:"spring",stiffness:150}}
        whileHover={{scale:1.2}}
      >
        <img src={image} alt="Task list illustration" />
      </motion.div>

      <motion.form
      onSubmit={handleLogin} 
        className="w-[40%] max-sm:w-[80%] px-10 h-[60%] max-sm:h-[35%] flex flex-col items-center justify-around border border-white bg-[#f3f3f3] rounded-3xl pt-4"
        style={{ boxShadow: "7px 9px 26px 4px darkgray" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-xl font-bold w-[90%] text-center">
          Welcome Back, shall we enter?
        </h1>
        <input
          className="w-[90%] border outline-none h-[15%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className="w-[90%] border outline-none h-[15%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]"
          type="password"
          placeholder="Password"
          name="password"
        />
        <div className="w-[90%] flex flex-row justify-between items-start h-[20%]">
  <Button
  type="submit"
  borderColor=""
    content="Sign In"
    buttonColor="#0284c7"  // Blue-600
    width="35%"
    onClick={() => {}}
    textColor="white"
    hoverColor="#0369a1"  // Blue-700
  />
  <Button
  content="Sign Up !!"
  buttonColor="transparent"
  width="35%"
  onClick={handleSignUp}
  textColor="#0891b2"
  borderColor="#0891b2"
  hoverColor="transparent"
  type="button"  // Add this
/>
</div>
      </motion.form>
    </div>
  );
};

export default Login;