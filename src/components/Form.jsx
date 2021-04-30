import {useState} from 'react';
import{sendMessage,isTyping} from 'react-chat-engine';
import {SendOutlined, PictureOutlined} from '@ant-design/icons';

const Form = (props) => {
    const [value,setValue] = useState('');
    const{chatId, creds} = props;

    const handleSubmit=(event)=>{
        event.preventDefault(); 
        const text= value.trim();
        if(text.length>0) sendMessage(creds, chatId, {text});
        setValue(''); //after sending, reset the value
    };

    const handleChange =(event)=>{
        setValue(event.target.value);
        isTyping(props,chatId);
    };

    const handleUpload=(event)=>{
        sendMessage(creds, chatId, {files: event.target.files, text:''});
    };

    /*const value=()=>{

    }*/

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder= "Send a message"
                value= {value}
                onChange= {handleChange}
                onSubmit= {handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />  
                </span>
            </label>
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{display:'none'}}
                onChange={handleUpload.bind(this)}            
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
};

export default Form;