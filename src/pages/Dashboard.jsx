function Dashboard({onLogout}) {
    return(
        <div style={{padding:"20x"}}>
        <h1>Welcome User!!</h1>
        <p>You are Logged in.</p>
        <button onClick={onLogout}style={{marginTop:"20px", }}>Logout</button> 
        </div>
    );
}   
export default Dashboard;