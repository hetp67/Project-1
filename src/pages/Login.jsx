import { useState } from "react";

function Login({onLogin}) {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
          const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                onLogin();
            }
            else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("An error occurred during login / server might be down");
        }
    };


    return (
        <div style ={{ maxWidth: "300px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <br />
                <button type="submit">Login</button>
                {/*<button type="button" onClick={onNewUser}>New User</button>*/}
                
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Login;
   



    {/*const handleSubmit = (e) => {
        e.preventDefault();
       /*if (email && password) {
        onLogin();
       } else {
          setError("Invalid email or password");
       
       const storedUserData = JSON.parse(localStorage.getItem("userData"));
       if (!storedUserData) {
        setError("No registered user found. Please register first.");
        return;
       }
        if (email === storedUserData.email && password === storedUserData.password) {
            onLogin();
        } else {
            setError("Invalid email or password");
        }
    };
    */}

    