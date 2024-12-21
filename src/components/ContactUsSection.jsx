import Button from './Button/Button'
import { useState } from 'react'

export default function ContactUsSection() {
    const [name, setName] = useState('')
    const [theme, setTheme] = useState('help')
    const [hasError, setHasError] = useState(false)

    function handleNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    function handleThemeChange(event) {
        setTheme(event.target.value)
    }

    return (
        <section>
            <h3>Contact Us</h3>

            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={name}
                    style={{
                        border: hasError ? '2px solid red' : null,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="theme">Theme:</label>
                <select id="theme" className="control" value={theme} onChange={handleThemeChange}>
                    <option value="wishes">Wishes</option>
                    <option value="help">Help</option>
                    <option value="partnership">Parthership</option>
                    <option value="other">Other</option>
                </select>

                <Button disabled={hasError} isActive={!hasError}>Sent</Button>
            </form>
        </section>
    )
}