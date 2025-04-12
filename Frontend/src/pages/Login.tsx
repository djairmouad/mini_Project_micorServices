import React from "react";
import Button from "../UI/Button";
import image from "../assets/undraw_task-list_qe3p.svg"

const Login:React.FC=()=>{
    return <div className=" flex flex-col w-full h-full bg-[#efefef] justify-center items-center absolute">
        <div className=" w-[25%] max-sm:w-[70%]">
            <img src={image}/>
        </div>
        <form className=" w-[40%] max-sm:w-[80%] px-10 h-[60%] max-sm:h-[35%] flex flex-col items-center justify-around border border-white bg-[#f3f3f3] rounded-3xl pt-4" style={{boxShadow:"7px 9px 26px 4px darkgray"}}>
            <h1 className=" text-xl font-bold w-[90%] text-center">Welcome Back,shall we enter?</h1>
            <input className="w-[90%] border outline-none h-[15%] max-sm:h-[10%] rounded-md px-2 border-[#c9c9c9]" type="text" placeholder="Email" name="email"/>
            <input className="w-[90%] border outline-none h-[15%] max-sm:h-[10%]  rounded-md px-2  border-[#c9c9c9]" type="password" placeholder="Password" name="password"/>
            <div className=" w-[90%] flex flex-row justify-between items-start h-[20%]">
                <Button content="Sign In" buttonColor="white" width="35%" onClick={()=>{}}/>
                <Button content="Sign Up !!" buttonColor="transparent" width="35%" onClick={()=>{}}/>
            </div>
        </form>
    </div>
}


export default Login;