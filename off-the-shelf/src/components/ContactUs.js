import React from "react";

function Contact() {

   function handleSubmit(e){
    e.preventDefault();
    return(
       alert('Your message was sent successfully, have a nice day!')
      //  console.log('you submitted');
    )
    }

  return (
    <div className="Contact">
      <h2>We would love to hear from you:</h2>
      <p>Fill out the section below with any questions, comments, or concerns.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required/>
          <input type="text" placeholder="Last Name" required/>
          <input type="email" placeholder="Email" required/>
          <textarea rows="10" placeholder="Type your message here..." required/>
          <button id="formSub" type="submit" value="Send Message" >Send Message</button>
        </form>
    </div>
  );
}

export default Contact;
