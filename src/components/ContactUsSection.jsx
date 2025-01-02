import Button from './Button/Button'
import { useState, useRef } from 'react'

function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true)
        }
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKeyDown}
                className='control'
            />
        </div>
    )
}

export default function ContactUsSection() {
    const [form, setForm] = useState({
        name: '',
        theme: 'help',
        hasError: false
    })
    // const [name, setName] = useState('')
    // const [theme, setTheme] = useState('help')
    // const [hasError, setHasError] = useState(true)

    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    function handleThemeChange(event) {
        setTheme(event.target.value)
    }

    // function toggleError() {
    //     setHasError((prev) => !prev)
    // }

    return (
        <section>
            <h3>Contact Us</h3>

            {/* <Button buttonClicked={toggleError}>Toggle Error</Button> */}

            <form style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '2px solid red' : null,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="theme">Theme:</label>
                <select
                    id="theme"
                    className="control"
                    value={form.theme}
                    onChange={(event) =>
                        setForm((prev) => ({ ...prev, reason: event.target.value }))

                    }
                >
                    <option value="wishes">Wishes</option>
                    <option value="help">Help</option>
                    <option value="partnership">Parthership</option>
                    <option value="other">Other</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError}>Sent</Button>

            </form>
            <hr />
            <StateVsRef />
        </section>
    )
}