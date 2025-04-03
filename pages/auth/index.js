import { useState } from "react"

export default function Auth() {
    const [name, setName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            return alert("请输入姓名")
        }
        window.localStorage.setItem("name", name)
        window.location.href = "/chat"
    }

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        setName(value)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>姓名</label>
                <input type="text" value={name} onChange={handleChange} placeholder="请输入名称" />
            </div>
            <button type="submit">保存</button>
        </form>
    </div>
}