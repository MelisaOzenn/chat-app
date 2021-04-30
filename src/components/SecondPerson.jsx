const SecondPerson = ({lastMessage, message}) => {
    const isItFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return(
        <div className="message-row">
            {isItFirstMessage && (
                <div
                className="message-avatar"
                style= {{backgroundImage: message.sender && `url(${message.sender.avatar})`}}
                />
            )}
            {message.attachments && message.attachments.length > 0
                ? (
                    <img
                        src = {message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{marginLeft: isItFirstMessage ? '4px': '48px'}} 
                    />
                ) : (
                    <div className ="message" style={{float: 'left', backgroundColor:'#D8BFD8',marginLeft: isItFirstMessage ? '4px': '48px'}}>
                        {message.text}
                    </div>
                )                    
            }
        </div>
    );
};

export default SecondPerson;