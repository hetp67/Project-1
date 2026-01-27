import { useState } from "react";

function Registration({onRegisterSuccesful}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("All fields are required");
      return;
    }
    // Storing data locally
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    

    // for now just showing success
    setMessage("Registration successful ✅");

    // clear form
    setName("");
    setEmail("");
    setPassword("");
  

  setTimeout(() => {
  onRegisterSuccesful();  
  },2000);
};
  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Register</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;


{/*import { useState } from "react";
function P1({onRegistersuccessful} ) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const[number,setNumber]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [address,setAddress]=useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setMessage("All fields are required");
          //  onRegistersuccessful();
           return;
        } 
         // for now just showing success
            setMessage("Registration Successful✅");
        else {
            setError("Please fill all fields");
            // clear form
            setName("");
            setEmail("");
            setPassword("");
        }
    
    setTimeout(()=>{
        onRegistersuccessful();

    },2000);
};

    return (
        <div style={{ maxWidth: "300px", margin: "50x auto" }}>
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
                <input
                     type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"      
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br/>
                <button type="submit">Submit</button>
                <button type="button" onClick={onAlreadyRegistered}>Already Registered</button>
            </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default P1; */}
            