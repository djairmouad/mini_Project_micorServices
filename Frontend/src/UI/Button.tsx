import React from "react"
import {motion} from "framer-motion"

const Button:React.FC<{content:string,width:string,buttonColor:string,onClick:()=>void,textColor:string | undefined,borderColor:string,hoverColor:string}>=({content,buttonColor,onClick,width,textColor,borderColor,hoverColor})=>{
    return <motion.button 
    transition={{ duration: 0.4, ease: "easeOut" ,type:"spring",stiffness:150}}
        whileHover={{scale:1.1,backgroundColor:hoverColor}}
    style={{width:width,backgroundColor:buttonColor,fontFamily:"sans-serif",color:textColor || "black",borderColor:borderColor}} className=" px-1 py-2 font-medium cursor-pointer"  onClick={onClick}>{content}</motion.button >
}
export default Button;