import {useEffect,useState} from 'react';
import React from 'react';

function ApiDemo() {
    const [users , setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data) 
            setLoading(false);
        })
        .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div style ={{padding:"20px"}}>
            <h2>Api Data Fetching Demo</h2>
            {loading && <p>Loading...</p>}

            {users.map(user => (
                <div key={user.id} style={{border:"1px solid #ccc", marginBottom:"10px", padding:"10px", borderRadius:"5px"}}>
                   <p><strong>Name:</strong> {user.name}</p>
                   <p><strong>Email:</strong> {user.email}</p>
                </div>
            ))}
        </div>
    );
}
export default ApiDemo;

        