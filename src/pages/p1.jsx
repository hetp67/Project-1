import { useState } from "react";
function P1({onRegister} ) {
    const [name,setName]=useState("");
    const[number,setNumber]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [address,setAddress]=useState("");
    const [error,setError]=useState("");
      const handleSubmit = (e) => {
        e.preventDefault();
        if (name && number && age && gender && address) {
            onRegister();
        } else {
            setError("Please fill all fields");
        }
    }

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <h2>Personal Information Form</h2> 
            <form onSubmit={handleSubmit}>
                <input
                    type="text"     
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input  
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    placeholder="Phone Number"
                />
                <input  
                    type="number"                       
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required            
                    placeholder="Age"
                />
                <input  
                    type="text"                       
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required            
                    placeholder="Gender"
                />
                <input      
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="Address"
                />
                <button type="submit">Submit</button>
                {/*<button type="button" onClick={onAlreadyRegistered}>Already Registered</button>*/}
            </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default P1; 
            