import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Login from './pages/Login.jsx'
import P1 from './pages/p1.jsx'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx' 
import Apidemo from './pages/ApiDemo.jsx'

function App() {
  // const [currentPage, setCurrentPage] = useState('register');
  const [page, setPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // session restore on refresh

  useEffect(
    () => {
      const user=JSON.parse(localStorage.getItem("user"));
      if(user && user.isLoggedIn){
        setIsLoggedIn(true);
      }
    },[]
  );
  

  return (
    <div>
      {page === "landing" && <Landing onNavigate={setPage} />}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      {page === "api" && <Apidemo/>}
  
      {page === "register" && <P1 onRegisterSuccesful={() => {
        setPage("login");
      }} />}
  
      {page === "login" && <Login onLogin={() => {
        setIsLoggedIn(true);
        setPage("dashboard");
      }} />}

      {page === "dashboard" && (isLoggedIn ? (
        <Dashboard onLogout={() => { 
          setIsLoggedIn(false); 
          localStorage.removeItem("user");
          setPage("landing");
        }} />
      ) : (
        <Login onLogin={() => {
          setIsLoggedIn(true);
          setPage("dashboard");
        }} />
      )
      )}

      {/*Dev button*/}
      {/*<button onClick={()=> setPage("api")}>ApiDemo</button>*/}
    
    </div>
  );
}
export default App;



{/*currentPage === "register" && <P1 onRegisterSuccesful={() => 
        setCurrentPage("login")} />} 
      {currentPage === "login" && (isLoggedIn ? (
        <h2>Welcome, User !</h2>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ))}

{/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login.jsx'
import P1 from './pages/p1.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState("register");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {currentPage === "register" && <P1 onRegistersuccessful={()=> setCurrentPage("Login")}/>}
      {currentPage === "login" && (isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ))}
       </div>
  );
}

export default App




      {/*{!isRegistered ? (
        // Show registration first
        <P1 onRegister={() => setIsRegistered(true)} onAlreadyRegistered={() => setIsRegistered(true)} /> 
      ) 
      : !isLoggedIn ? (
        // After registration, show login
        <Login onLogin={() => setIsLoggedIn(true)} onNewUser={() => setIsRegistered(false)} />
      ) : (
        // After login, show welcome
        <h1>Welcome, User!</h1>
      )}*/}
   
    

