import { useRef } from "react"
import "../../CSS/Home/Part1.css"
import {roles} from "../../Data"


export default function Part1(){
    let Designation = useRef("")
    let index= 1

    setInterval(()=>{
        Designation.current.innerText= roles[index++]
        
        if(index >=roles.length ){
            index =0;
        }
    },4000)

    return (
        <div className="part1Main">
            {/* <p className="hello">Welcome to my portfolio! </p> */}
            <p className="iam noto-sans-elymaic-regular">I'm</p>
           <div className="fullname">
            <div className="fname"> 


             <div className="space1"><div className="bigname">M</div><div className="bigname"><span style={{color:"red"}}>O</span></div>
            <div className="bigname"><span style={{color:"red"}}>H</span></div><div className="bigname">I</div>
            <div className="bigname">T</div></div></div>



            <div className="lname"><div className="bigname"><span style={{color:"red"}}>M</span></div><div className="bigname"><span style={{color:"red"}}>I</span></div>
            <div className="bigname">S</div><div className="bigname">H</div>
            <div className="bigname">R</div><div className="bigname">A</div></div>
            </div>
            <div ref={Designation} className="roles teko">Fullstack Developer</div>
            <div className="tripleArrow"><svg  xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-83 240-323l42-42 198 198 198-198 42 42L480-83Zm0-246L240-569l42-42 198 198 198-198 42 42-240 240Zm0-246L240-815l42-42 198 198 198-198 42 42-240 240Z"/></svg></div>
            
        </div>
    )
}