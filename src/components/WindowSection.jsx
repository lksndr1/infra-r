import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useState, useEffect } from 'react'

export default function WindowSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    function openModal() {
        setIsModalOpen(true)
    }

    return (
        <section>
            <h3>Window</h3>

            <Button style={{ marginBottom: '1rem' }} buttonClicked={openModal}>Show info</Button>

            <Modal open={isModalOpen}>
                <h3>Info</h3>
                <p>Inframet-r is...</p>
                <Button buttonClicked={() => setIsModalOpen(false)}>Close window</Button>
            </Modal>

            {loading && <p>Loading...</p>}

            {
                !loading && <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            }
        </section >
    )
}