import logo from '/infra-logo.jpg'

export default function Header() {
    const now = new Date()

    return (
        <header>
            <img src={logo} alt="infra" />
            {/* <h3>Title</h3> */}
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}