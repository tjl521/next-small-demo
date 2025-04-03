import { useState } from "react"
import chatStyles from '../../styles/chat.module.css'

 const ChatForm = ({ name }) => {

    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await fetch(`/api/chat`, {
            method: "POST",
            body: JSON.stringify({
                message,
                date: new Date(),
                name,
            }),
        });
        setMessage("")
    }

    const handleChange = (e) => {
        const value = e.target.value
        setMessage(value)
    }

    return <div className={chatStyles.chatFormContainer}>
        <div className={chatStyles.chatFormMain}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={message} onChange={handleChange} />
                <button>发送</button>
            </form>
        </div>
    </div>
 }

 export default ChatForm