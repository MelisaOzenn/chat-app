import {ChatEngine} from "react-chat-engine";
import "./App.css";
import LoginPage from './components/LoginPage';
import ChatFeed from "./components/ChatFeed";

const App = () => {

    //if there is no username, go to login page
    if(!localStorage.getItem('username')) return <LoginPage/>

    return(
        <ChatEngine
            publicKey = {"09afebf2-3ee9-4dfb-9d50-94bd38e773d6"}
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
            height="100vh"
        />
    );
};
export default App;