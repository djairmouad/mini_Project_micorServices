import React from "react"


const Button:React.FC<{content:string,width:string,buttonColor:string,onClick:()=>void,textColore:string | undefined}>=({content,buttonColor,onClick,width,textColore})=>{
    return <button style={{width:width,backgroundColor:buttonColor,fontFamily:"sans-serif",color:textColore || "black"}} className=" px-1 py-2 font-medium cursor-pointer"  onClick={onClick}>{content}</button>
}
export default Button;