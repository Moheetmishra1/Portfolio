import { useState } from "react"
import axios from "axios"
import "../../CSS/Home/Part5.css"

export default function Part5(){

    let [feedback,setFeedback] = useState({name:"",email:"",mobile:0,message:""})

    function update({target:{value,name}}){
        console.log(name,value);
        setFeedback({...feedback,[name]:value})
    }

    let sendFeedback= async (e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:3000/portfoliofeedback/",feedback) 
        }catch(err){
            console.log(err);
        }
    }

    return <>
    
    <div className="feedbackBox">
        <div className="feedback">
            <h1 >Feedback <br />Form</h1>
            <h4 >Your feedback is important for our growth.</h4>

        </div>
        
        <div className="contact-form">
		<form action="post" method="post" onSubmit={sendFeedback}>
        <input type="name" placeholder="Your Name " name="name" required=""  onKeyUp={update} />
                <input type="email" placeholder="Your Email " name="email" required="" onKeyUp={update}  />
                <input type="mob" placeholder="Your Mobile Number" name="mobile" required="" onKeyUp={update}  />
                <textarea  id="" cols="35" rows="10" name="message" placeholder="How Can I Help You " required="" onKeyUp={update} ></textarea>
                <input type="submit" value="Send Message" class="submit" onclick="greeting()" required="" />
            </form>
        
        </div>
    
    </div>
    </>

    
}