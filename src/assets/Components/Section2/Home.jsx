import "../../CSS/Home/Home.css"

import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";


export default function Home(){


    return (
        <div>
            
        <Part1 />
        <div className="black" style={{backgroundColor:"#3b3939"}}>
            <div className="stick"></div>
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />


        </div>
          
        </div>
    )
}