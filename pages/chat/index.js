import chatStyles from '../../styles/chat.module.css'
import ChatForm from './chat-form'
import { useEffect, useState } from 'react'

export default function Chat({}) {
    const [name, setName] = useState("")
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        const name = window.localStorage.getItem("name")

        if (!name) {
            window.location.href = "/auth"
        }
        setName(name)
    }, [])

    const getPageData = async () => {
        const response = await fetch(`/api/chat`, {
            method: "get",
        });
        const data = await response.json()
        const currentData = JSON.parse(data.chatList)
        setChatList(currentData)
    }

    useEffect(() => {
        // 每隔 5 秒检查一次
        const interval = setInterval(getPageData, 2000);
        return () => clearInterval(interval);
      }, []);

    return <div className={chatStyles.container}>
        <ChatForm name={name} key={name} />
        <div className={chatStyles.chatList}>
            {
                chatList.map(item => {
                    const itemData = JSON.parse(item)
                    return <div key={itemData.date} className={itemData.name === name ? chatStyles.me : chatStyles.other}>
                        <p className={chatStyles.authInfo}>
                            <span>{itemData.name}</span>
                            <span> ( {itemData.date} )</span>
                        </p>
                        <p className={chatStyles.message}>{itemData.message}</p>
                    </div>
                })
            }
        </div>
    </div>
}
