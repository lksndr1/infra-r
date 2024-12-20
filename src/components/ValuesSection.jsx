import Button from "./Button/Button"
import { values } from "../data"
import { useState } from 'react'

export default function ValuesSection() {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        setContentType(type)
    }

    return (
        <section>
            <h3>Main values of our company:</h3>
            <Button
                isActive={contentType === 'opennes'}
                buttonClicked={() => handleClick('opennes')}>
                First
            </Button>
            <Button
                isActive={contentType === 'responsibility'}
                buttonClicked={() => handleClick('responsibility')}>
                Second
            </Button>
            <Button
                isActive={contentType === 'innovation'}
                buttonClicked={() => handleClick('innovation')}>
                Third
            </Button>
            <Button
                isActive={contentType === 'quality'}
                buttonClicked={() => handleClick('quality')}>
                Fourth
            </Button>

            {!contentType && <p>Push the button</p>}

            {contentType && <p>{values[contentType]}</p>}

        </section>
    )
}