import Button from "./Button/Button"

export default function TabsSection({ active, onChange }) {
    return (
        <section style={{ marginBottom: '1rem' }}>
            <Button isActive={active === 'main'} buttonClicked={() => onChange('main')}>Main</Button>
            <Button isActive={active === 'contactus'} buttonClicked={() => onChange('contactus')}>Contact Us</Button>
            <Button isActive={active === 'windowsect'} buttonClicked={() => onChange('windowsect')}>Window</Button>
        </section>
    )
}