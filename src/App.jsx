import { useState } from 'react'
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
      {currentPage === "register" && <P1/>}
      {currentPage === "login" && (isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ))}
       </div>
  )
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
   
    

