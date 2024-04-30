import "./ContactFormStyles.css";
import { useForm, ValidationError } from '@formspree/react';
/*The useForm hook returns a state object and a handleSubmit function which you pass to the onSubmit form attribute. Combined,
 these provide a way to submit the form data via AJAX and update
 form state depending on the response received.
 
 
 */

const ContactForm = () => {

  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

  
  return (
    <div className="form-container">
    <form method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" id="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting}>Send</button>
            <ValidationError errors={state.errors} />
            {state.succeeded ? 
              <p >Thanks for your submission!</p>
              
              :""}       
            
        </form>
        
        </div>
        
    
  )
}

export default ContactForm