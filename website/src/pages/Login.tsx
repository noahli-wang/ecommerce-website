import { useState } from 'react';


//Creating a simple log in function can be changed later to connect to a database
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <h1>Login</h1>

            <label>Email:</label>
            <br />
            <input 
                type="email" 
                placeholder="student@uwo.ca"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <div />
            <label>Password:</label>
            <br />
            <input 
                type="password" 
                placeholder="••••••••"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <div />
            
            <button style={{marginTop: "1.5rem"}}>
                Login
            </button>
        </div>
    )
}


