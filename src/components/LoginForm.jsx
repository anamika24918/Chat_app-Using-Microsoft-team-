import { useState } from "react";
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "f1e3044b-446a-49c8-b614-3da22b8f82af", 'User-Name': username, 'User-Secret': password }
        try {
            //username/password=>chatengine->give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
            //works out->logged in
        } catch (error) {
            setError('Oops,incorrect credentials.')
            //error->try with new username...
        }





    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Star Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;