import React from "react";
import { useState } from "react";

function landing({onNavigate}) {
    return(
        <div style={{height: "77vh", width: "90vw", margin: "0", padding: "50px", backgroundColor: "#109ac895", textAlign: "center"}}>
            <h1>Welcome to our Application</h1>
            <nav style={{display: "flex", justifyContent: "center", alignItems: "center", gap:"15px", marginBottom: "20px", flexDirection: "row"}}>
            <button style={{ backgroundColor:"#ce2222"}}onClick={() => onNavigate('register')}>Register</button>
            <button style={{ backgroundColor:"#ce2222"}}onClick={() => onNavigate('login')}>Login</button>
            <button style={{ backgroundColor:"#ce2222"}}onClick={() => onNavigate('home')}>Home</button>
            <button style={{ backgroundColor:"#ce2222"}}onClick={() => onNavigate('about')}>About</button>
            <button style={{ backgroundColor:"#ce2222"}}onClick={() => onNavigate('contact')}>Contact</button>
            </nav>
            <div>
                <p>This is the landing page. Please register or login to continue.</p>  
            </div> 
        </div>
    );
}  
export default landing;