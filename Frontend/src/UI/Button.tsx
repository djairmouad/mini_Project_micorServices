import React from "react"


const Button:React.FC<{content:string,width:string,buttonColor:string,onClick:()=>void}>=({content,buttonColor,onClick,width})=>{
    return <button style={{width:width,backgroundColor:buttonColor,fontFamily:"sans-serif"}} className=" px-1 py-2 rounded-2xl font-medium cursor-pointer"  onClick={onClick}>{content}</button>
}
export default Button;