import React from 'react'

const navbarStyle = {
     display: "flex",
      justifyContent: "space-around",
      alignIfems: "center" , 
      backgroundColor: "white" ,
      boxShadow: '-3px -7px 20px 20px rgb(218, 218, 218) ', 
      height: "50px"

    }; 
const buttonStyleAcceuil={backgroundColor:"red",
color:"White" ,
border:"none" , 
width:"100px"
};
const buttonsecond={...buttonStyleAcceuil, backgroundColor:"red"}  
function CustomNavbar() {
    const user = "Zeineb Sahli";
    const userIntable = user.split(" ");
    const caracterOne = userIntable[0][0];
    const caracterTwo = userIntable[1][0];
    return (
        <div style={navbarStyle}>
            <button style={buttonStyleAcceuil}> Acceuil </button>
            <button style={buttonsecond}> {`${caracterOne}.${caracterTwo}`} </button>

        </div>
    ) 
}; 

export default CustomNavbar  
