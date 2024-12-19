import logo from '/infra-logo.jpg'

export default function Header() {
    const [now, setNow] = useState[newDate]

    return (
        <header>
            <img src={logo} alt="infra" />
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}