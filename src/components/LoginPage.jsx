import {useState} from 'react';
import axios from 'axios';
//import { WindowsOutlined } from '@ant-design/icons';

const LoginPage=()=>{
    const[username, setUsername]= useState('');
    const[password, setPassword]= useState('');
    const[error, setError] = useState('');

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const authObject= {'Project-ID': "09afebf2-3ee9-4dfb-9d50-94bd38e773d6", 'User-Name': username, 'User-Secret': password}
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');
        }catch(err){
            setError('Wrong username or password, but I wont tell you which one :p');
        }    
    };

    return(
        <div className="wrapper">
            <div className="loginpart">
                <h1 className="title">Mel's Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chat</span>
                        </button>
                    </div>
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
}

export default LoginPage;