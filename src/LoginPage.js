import {useState} from "react";
import './App.css';

function LoginPage() {
    const [formValues, setFormValues]=useState({ email: "",password: ""});
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit]=useState(false);

    const handleChange = (e) =>{
        const{name,value} = e.target;
    setFormValues({...formValues,[name]:value});
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
   
    const validate=(values) => {
        const errors={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email) {
            errors.email = "Email is required";
          } else if (!regex.test(values.email)){
            errors.email= "This is not a valid email";
          }
          if(!values.password) {
            errors.password = "Password is required";
          }  else if (values.password.length <8){
            errors.password= "Password must be more than 8 character";
          }
          else if (values.password.length > 10){
            errors.password= "Password must not exceed more than 10 character";
          }
          else if(!/[A-Z]/.test(values.password)) { 
            errors.password = "Password must contain at least one uppercase letter";
           }
           else if (!/[a-z]/.test(values.password)) { 
            errors.password = "Password must contain at least one lowercase letter"; 
           }
           else if (!/[0-9]/.test(values.password)) {
             errors.password = "Password must contain at least one digit"; 
           }
           else if (!/[!@#$%^&*]/.test(values.password)) { 
            errors.password = "Password must contain at least one special character";
          }
        
        return errors;
    };
    return ( 
    <div className="container">
         {Object.keys(formErrors).length === 0 && isSubmit && ( 
      <div className="success-message">Logged IN  successfully</div> 
      )}
      <div className="form-container">
     <form onSubmit={handleSubmit}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff068b" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
      </path></svg>
     <h1 style={{color:'whitesmoke'}}>Login</h1> 
      <div className="ui divider"></div>
       <div className="ui form"> 
        <div className="field"> 
        <label>Email</label> 
        <input
        type="email" 
        name="email" 
        placeholder="Email"
        value={formValues.email} 
        onChange={handleChange}
        /> 
        </div>
        <p style={{color:'whitesmoke'}}>{formErrors.email}</p>
         <div className="field">
        <label>Password</label> 
        <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formValues.password}
        onChange={handleChange} 
         /> 
        </div> 
        <p style={{color:'whitesmoke'}}>{formErrors.password}</p> 
        <button className="button">Login</button> 
       
         </div> 
         </form> 
         </div> 
         </div>
         ); 
       } 
    export default LoginPage;
