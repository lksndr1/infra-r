import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useState, useEffect, useCallback } from 'react'
import useInput from '../hooks/useInput'

export default function WindowSection() {
    const input = useInput()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

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

            {!loading && (
                <>
                    <input type="text" className='control' {...input} />
                    <ul>
                        {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </section >
    )
}