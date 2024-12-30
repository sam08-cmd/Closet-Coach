import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import StartPage from './StartPage';
import SignUp from './SignUp'; 
import LoginPage from './LoginPage'; 
import './App.css'; 
function App() { 
  return ( 
  <Router> 
    
      <Routes> 
      <Route path="/" element={<StartPage />} />
        <Route path="/sign" element={<SignUp />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        </Routes> 
        
        </Router> 
        );
      }
export default App;
