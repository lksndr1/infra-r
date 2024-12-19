import logo from '/infra-logo.jpg'
import { useState } from 'react'

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
        <header>
            <img src={logo} alt="infra" />
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}