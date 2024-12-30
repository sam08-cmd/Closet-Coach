import React from "react";
import{Link} from "react-router-dom";
import styled from "styled-components";


const Conta = styled.div`
 display: flex; 
 flex-direction: column; 
 align-items: center; 
 justify-content: center; 
 height: 100vh; 
background-color: black ;
position:relaive;
`;

  
  const Logo = styled.div`
  margin-bottom:100px
  text-align:centre;
  `;

  const LogoImage = styled.div`
  width: 100px;
  height:100px;
   background: url('./logo.jpeg')no-repeat center center;
   background-size:contain;
  `;

  const LogoText = styled.h1`
  font-family: 'Cursive';
   color:rgb(250, 31, 221);
   
   `;

  
   

    const Button = styled.button`
     background: #ff69b4;
     color: white;
     border: none;
     padding: 10px 20px;
     margin: 10px;
     cursor: pointer;
     border-radius: 5px;
     width:200px;
     transition: background 0.3s ease;

     @media(max-width: 768px){
     width: 150px;
     }
     `;
     

  const StartPage = () => { 
    return (
      <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff068b" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
         <Conta>
          
          <Logo>
          <LogoImage/>
          <LogoText>ClosetCoach</LogoText>
          </Logo>
          
          
           
          <p  style={{fontSize:20,color:'whitesmoke'}}>
                 ClosetCoach
          </p>
          <p style={{fontSize:15,color:'whitesmoke'}} >
            WelCome to Closet Coach !!!!
          </p>
          
          <Button><Link to="/sign">CREATE ACCOUNT</Link></Button>
         <Button><Link to="/login">LOG IN</Link></Button>
        </Conta>
         </>
       ); 
                    }; 
  export default StartPage;