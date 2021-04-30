import FirstPerson from "./FirstPerson";
import SecondPerson from "./SecondPerson";
import Form from "./Form";

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages}= props;
    const chat = chats && chats[activeChat];

    const renderReadReceipts=(message, myMessage)=>
        chat.people.map((person,index)=> person.last_read===message.id && (
            <div
                key={'read_${index}'}
                className="read-receipt"
                style={{
                    float: myMessage? 'right' : 'left', 
                    backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                }}
            />
        ));


    const renderMessages = () => { //generate message
        const keys = Object.keys(messages); //put messages to keys
        return keys.map((key, index)=>{
            const message = messages[key]; //dynamically take message w/ key
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const myMessage = userName === message.sender.userName;

            return(
                <div key={'msg_${index}'} style={{width: '100%'}}>
                    <div className= "message-block">
                        {
                            myMessage
                            ? <FirstPerson message = {message} />
                            : <SecondPerson message = {message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className= "read-receipts" style={{marginRight: myMessage ? '18px' : '0px', marginLeft: myMessage ? '0px': '68px'}}>
                        {renderReadReceipts(message,myMessage)}
                    </div>

                </div>
            );
        });
    };

    if(!chat) return 'Loading...';
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className = "chat-subtitle">
                    {chat.people.map((person)=>`${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className="message-form-container">
                <Form {...props} chatId = {activeChat} />
            </div>
        </div>
    );
};

export default ChatFeed;