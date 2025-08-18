import React, { useState, useEffect} from "react";




function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");


 // Clear status message after 1 minute
 useEffect(() => {
   const timer = setTimeout(() => {
     setStatus("");
   }, 60000);  // 1 min
   return () => clearTimeout(timer);
 }, [status]);





  //handle input changes and update status


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value });
  };

  //handle form submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");
     try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
            method : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        if(response.ok){
            setStatus("Message Sent Succesfully!");
            
            setFormData({name:"", email:"", message:""});
        }else{
             setStatus("Failed to send message.");
             console.error("Failed to send message:", response.statusText);
        }

     }catch(error){
       setStatus("Error sending message. Please try again.");
       console.error("Error sending message:", error);


     };
     

  };

  
    return (
        <div className="contact">
            <h2 >Contact</h2>
            <p>
                If you would like to get in touch, feel free to reach out via email or connect with me on social media.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
            <input className="contact-form-input"
            type="text"
            name="name"
            placeholder="yourname"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <br />
              <input className="contact-form-input"
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange}
          required 
        />
        <br />
              <textarea className="contact-form-textarea"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required 
        />
        <br />

         <button className="contact-form-button" type="submit">Send</button>


            </form>

             {status && <p>{status}</p>}
        </div>
    );
}

export default Contact;
