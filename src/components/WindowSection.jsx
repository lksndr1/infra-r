import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useState } from 'react'

export default function WindowSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
    }

    return (
        <section>
            <h3>Window</h3>

            <Button buttonClicked={openModal}>Show info</Button>

            <Modal open={isModalOpen}>
                <h3>Info</h3>
                <p>Inframet-r is...</p>
                <Button buttonClicked={() => setIsModalOpen(false)}>Close window</Button>
            </Modal>
        </section>
    )
}